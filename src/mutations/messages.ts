import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/query-keys";
import { BACKEND_BASE_URL } from "@/lib/constants";
import { v4 as uuidv4 } from "uuid";
import type {
	SendMessageParams,
	StreamingResponse,
	StreamingChunk,
} from "@/types/message";

// Helper to convert plain text response to readable stream
function responseToReadableStream(
	response: Response,
): ReadableStream<StreamingChunk> {
	const reader = response.body?.getReader();
	const decoder = new TextDecoder();

	return new ReadableStream({
		async start(controller) {
			if (!reader) {
				controller.close();
				return;
			}

			try {
				while (true) {
					const { done, value } = await reader.read();
					if (done) {
						controller.enqueue({ content: "", done: true });
						controller.close();
						return;
					}

					const chunk = decoder.decode(value, { stream: true });

					// Handle plain text streaming - treat each chunk as content
					if (chunk.trim()) {
						controller.enqueue({
							content: chunk,
							done: false,
						});
					}
				}
			} catch (error) {
				controller.error(error);
			} finally {
				reader.releaseLock();
			}
		},
	});
}

export function useSendMessage() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (
			params: SendMessageParams,
		): Promise<StreamingResponse> => {
			const messageId = uuidv4();
			const response = await fetch(`${BACKEND_BASE_URL}/api/messages`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					conversationId: params.conversationId,
					content: params.content,
					conversationContext: params.conversationContext,
					saveConversation: params.saveConversation ?? true,
				}),
			});

			if (!response.ok) {
				throw new Error(`Failed to send message: ${response.statusText}`);
			}

			const stream = responseToReadableStream(response);

			return {
				stream,
				messageId,
			};
		},

		onSuccess: (_, variables) => {
			// Invalidate and refetch messages for this conversation
			if (variables.conversationId) {
				queryClient.invalidateQueries({
					queryKey: queryKeys.messages.byConversation(variables.conversationId),
				});
			}
		},
	});
}
