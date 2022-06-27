import { IncomingMessage } from "http";
import { parse } from "url";
import { ParsedRequest } from "./types";

export function parseRequest(req: IncomingMessage) {
	console.log("HTTP " + req.url);
	const { pathname, query } = parse(req.url || "/", true);
	const { address,budget, studentInfo, subjectLabel } = query || {};

	const arr = (pathname || "/").slice(1).split(".");
	let text = "";
	if (arr.length === 0) {
		text = "";
	} else if (arr.length === 1) {
		text = arr[0];
	} else {
		arr.pop() as string;
		text = arr.join(".");
	}

	const parsedRequest: ParsedRequest = {
		text: decodeURIComponent(text),
		address,
		budget,
		studentInfo,
	};
	return parsedRequest;
}
