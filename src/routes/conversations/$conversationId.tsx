import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/conversations/$conversationId")({
	component: ConversationView,
});

function ConversationView() {
	const { conversationId } = Route.useParams();
	return <div>Conversation: {conversationId}</div>;
}
