import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSendMessage } from "@/mutations/messages";
import type { Message } from "@/types/message";

export const Route = createFileRoute("/conversations/")({
	component: ConversationsIndex,
});

const messageClass = {
	user: "bg-paper-800 text-white border border-paper-900 rounded-tl-lg",
	agent: "bg-paper-100 border border-paper-300 rounded-tr-lg",
};

function ConversationsIndex() {
	const sendMessage = useSendMessage();

	const form = useForm({
		defaultValues: {
			message: "",
		},
		onSubmit: async ({ value }) => {
			if (!value.message.trim()) return;

			// Add user message immediately
			const userMessage: Message = {
				messageId: `user-${Date.now()}`,
				content: value.message,
				type: "user",
				timestamp: new Date().toISOString(),
			};

			setMessages((prev) => [...prev, userMessage]);

			// Prepare conversation context
			const context = JSON.stringify(
				messages.map((msg) => ({
					content: msg.content,
					type: msg.type,
				})),
			);

			try {
				const { stream, messageId } = await sendMessage.mutateAsync({
					content: value.message,
					conversationContext: context,
					// saveConversation: true,
				});
        
				// Add empty assistant message for streaming
				const assistantMessage: Message = {
					messageId,
					content: "",
					type: "agent",
					timestamp: new Date().toISOString(),
				};

				setMessages((prev) => [...prev, assistantMessage]);

				// Consume stream and update message content
				const reader = stream.getReader();
				let accumulatedContent = "";

				try {
					while (true) {
						const { done, value: chunk } = await reader.read();
						if (done) break;

						if (chunk.content) {
							accumulatedContent += chunk.content;
							setMessages((prev) =>
								prev.map((msg) =>
									msg.messageId === messageId
										? { ...msg, content: accumulatedContent }
										: msg,
								),
							);
						}
					}
				} finally {
					reader.releaseLock();
				}
			} catch (error) {
				console.error("Failed to send message:", error);
				// TODO: Show error message to user
			}

			form.reset();
		},
	});

	const [messages, setMessages] = useState<Message[]>([]);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = useCallback(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, []);

	useEffect(() => {
		if (messages.length > 0) {
			scrollToBottom();
		}
	}, [messages, scrollToBottom]);

	return (
		<div className="flex-1 mx-auto flex flex-col gap-4 w-screen max-w-7xl p-4">
			<div className="flex-1 flex flex-col gap-4 overflow-y-auto min-h-[0px] max-h-[calc(100vh-221px)]">
				{messages.map((message, index) => (
					<div
						key={message.messageId || index}
						style={{
              animationName: "slideUp",
              animationDuration: "0.3s",
              animationTimingFunction: "ease-out",
							animationFillMode: index === messages.length - 1 ? "none" : "forwards",
							alignSelf: message.type === "agent" ? "start" : "end",
						}}
						className={`rounded-b-lg w-fit lg:max-w-[70%] p-4 ${messageClass[message.type]}`}
					>
						{message.content}
					</div>
				))}
				<div ref={messagesEndRef} />
			</div>
			<div className="mt-auto">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						form.handleSubmit();
					}}
					className="flex gap-2"
				>
					<form.Field name="message">
						{(field) => (
							<Input
								id={field.name}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								placeholder="Ask Chloe a question..."
								className="flex-1 bg-paper-100! border-paper-300!"
								onKeyDown={(e) => {
									if (e.key === "Enter" && !e.shiftKey) {
										e.preventDefault();
										form.handleSubmit();
									}
								}}
							/>
						)}
					</form.Field>
					<form.Subscribe selector={(state) => state.values.message}>
						{(message) => (
							<Button type="submit" size="icon" disabled={!message.trim()}>
								<Send className="size-4 text-paper-900" />
							</Button>
						)}
					</form.Subscribe>
				</form>
			</div>
		</div>
	);
}
