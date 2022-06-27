export type FileType = "png" | "jpeg";

export interface ParsedRequest {
	text: string;
	address?: string | string[] | undefined;
	studentInfo?: any;
}
