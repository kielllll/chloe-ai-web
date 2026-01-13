import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/conversations/")({
	component: ConversationsIndex,
});

function ConversationsIndex() {
	const form = useForm({
		defaultValues: {
			message: "",
		},
		onSubmit: async ({ value }) => {
			console.log("Message submitted:", value.message);
			// TODO: Handle message submission
			form.reset();
		},
	});

	return (
		<div className="flex-1 mx-auto flex flex-col gap-4 w-screen max-w-7xl p-4">
			<div>Some content</div>
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
