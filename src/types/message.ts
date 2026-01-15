export type Message = {
	conversationId?: string;
	messageId: string;
	content: string;
	type: "agent" | "user";
	timestamp: string;
};

export type MessagesResponse = Message[];

export interface SendMessageParams {
	conversationId?: string;
	content: string;
	conversationContext?: string; // JSON string of context array
	saveConversation?: boolean;
}

export interface StreamingChunk {
	content: string;
	done: boolean;
	messageId?: string;
}

export interface StreamingResponse {
	stream: ReadableStream<StreamingChunk>;
	messageId: string; // Client-generated UUIDv4
}
