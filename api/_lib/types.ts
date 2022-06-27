export type FileType = "png" | "jpeg";
export type Theme = "light" | "dark";

export interface ParsedRequest {
	gender?: string | string [] |  undefined;
	studentInfo?: string | string[] | undefined;
}
