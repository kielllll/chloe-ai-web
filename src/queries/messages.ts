import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/query-keys";
import { BACKEND_BASE_URL } from "@/lib/constants";
import type { MessagesResponse } from "@/types/message";

async function fetchMessages(
	conversationId: string,
): Promise<MessagesResponse> {
	const response = await fetch(
		`${BACKEND_BASE_URL}/api/messages/${conversationId}`,
	);

	if (!response.ok) {
		throw new Error(`Failed to fetch messages: ${response.statusText}`);
	}

	return response.json();
}

export function useMessages(conversationId: string) {
	return useQuery({
		queryKey: queryKeys.messages.byConversation(conversationId),
		queryFn: () => fetchMessages(conversationId),
		enabled: !!conversationId,
		staleTime: 1000 * 60 * 5, // 5 minutes
	});
}
