export type FileType = "png" | "jpeg";

export interface ParsedRequest {
	text: string;
	address?: string | string[] | undefined;
	medium?: any;
	group?: any;
	course?: any;
	subjectLabel?: any;
	budget?: any;
}
