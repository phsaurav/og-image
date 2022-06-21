import Cors from "cors";
import { IncomingMessage, ServerResponse } from "http";
import { getScreenshot } from "./_lib/chromium";
import { parseRequest } from "./_lib/parser";

const isDev = !process.env.AWS_REGION;

const cors = Cors({
	methods: ["GET", "HEAD"],
});

function runMiddleware(req, res, fn) {
	return new Promise((resolve, reject) => {
		fn(req, res, (result) => {
			if (result instanceof Error) {
				return reject(result);
			}

			return resolve(result);
		});
	});
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
	await runMiddleware(req, res, cors);
	try {
		const parsedReq = parseRequest(req);
		// const response = await fetch(`https://api.tutor-media.liilab.com/api/post/v1/posts/${parsedReq.text}`)
		// const data = await response.json()
		const { text, fileType } = parsedReq;
		const file = await getScreenshot(text, fileType, isDev);
		res.statusCode = 200;
		res.setHeader("Content-Type", `image/${fileType}`);
		res.setHeader(
			"Cache-Control",
			`public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
		);
		res.end(file);
	} catch (e) {
		res.statusCode = 500;
		res.setHeader("Content-Type", "text/html");
		res.end("<h1>Internal Error</h1><p>Sorry, there was a problem</p>");
		console.error(e);
	}
}
