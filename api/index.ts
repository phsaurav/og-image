import { IncomingMessage, ServerResponse } from 'http';
import fetch from 'node-fetch';
import { getScreenshot } from './_lib/chromium';
import { parseRequest } from './_lib/parser';
import { getHtml } from './_lib/template';

const isDev = !process.env.AWS_REGION;
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
    try {
        const parsedReq = parseRequest(req);
				const response = await fetch(`https://api.tutor-media.liilab.com/api/post/v1/posts/${parsedReq.text}`)
				const data = await response.json()
        const html = await getHtml(data,parsedReq);
        if (isHtmlDebug) {
            res.setHeader('Content-Type', 'text/html');
            res.end(html);
            return;
        }
        const { text, fileType } = parsedReq;
        const file = await getScreenshot(text, fileType, isDev);
        res.statusCode = 200;
        res.setHeader('Content-Type', `image/${fileType}`);
        res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
        res.end(file);
    } catch (e) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
        console.error(e);
    }
}
