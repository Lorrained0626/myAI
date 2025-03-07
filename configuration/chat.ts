import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hey there! I'm ${AI_NAME}, your trusted financial literacy assistant, helping you break financial barriers, avoid predatory practices, and achieve financial stability and success.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Hmm, I’m struggling with that one. Can you rephrase? I want to make sure I give you the best advice possible!`;
export const WORD_CUTOFF: number = 4000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 10; // Number of messages to use for context when generating a response


 
