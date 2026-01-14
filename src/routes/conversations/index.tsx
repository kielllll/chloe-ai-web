import { useEffect, useRef, useState } from "react";
import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/conversations/")({
	component: ConversationsIndex,
});

type Message = {
  // messageId: string; // Hide for now
  // conversationId: string; // Hide for now
  content: string;
  type: 'agent' | 'user';
  timestamp: string;
}

const messageClass = {
  user: 'bg-paper-800 text-white border border-paper-900 rounded-tl-lg',
  agent: 'bg-paper-100 border border-paper-300 rounded-tr-lg'
}

function ConversationsIndex() {
	const form = useForm({
		defaultValues: {
			message: "",
		},
		onSubmit: async ({ value }) => {
    	// console.log("Message submitted:", value.message);
			// TODO: Handle message submission
			setMessages(() => [...messages, {
        content: value.message,
        type: (messages.length + 1) % 2 === 0 ? 'agent' : 'user',
        timestamp: new Date().toISOString()
      }]);
			form.reset();
		},
	});

	const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom(); 
    }
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

	return (
		<div className="flex-1 mx-auto flex flex-col gap-4 w-screen max-w-7xl p-4">
			<div className="flex-1 flex flex-col gap-4 overflow-y-auto min-h-[0px] max-h-[calc(100vh-221px)]">
				{messages.map((message, index) => (
					<div
						key={index}
						style={{
							animation: `slideUp 0.3s ease-out ${index === messages.length - 1 ? "" : "forwards"}`,
							opacity: index === messages.length - 1 ? 0 : 1,
							animationFillMode: "forwards",
              alignSelf: message.type === 'agent' ? "start" : "end",
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
