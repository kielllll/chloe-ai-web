import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/conversations/")({
	component: ConversationsIndex,
});

function ConversationsIndex() {
	return <div>Conversations Index / New Conversation</div>;
}
