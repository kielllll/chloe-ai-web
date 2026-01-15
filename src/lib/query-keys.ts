// Query keys for TanStack Query caching and invalidation
export const queryKeys = {
	messages: {
		all: ["messages"] as const,
		byConversation: (conversationId: string) =>
			[...queryKeys.messages.all, conversationId] as const,
	},
	mutations: {
		sendMessage: "sendMessage" as const,
	},
} as const;
