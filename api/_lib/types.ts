export type FileType = "png" | "jpeg";

export interface ParsedRequest {
	text: string;
	gender?: string | string[] | undefined;
	studentInfo?: string | string[] | undefined;
}
