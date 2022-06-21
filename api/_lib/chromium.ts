import core from "puppeteer-core";
import { getOptions } from "./options";
import { FileType } from "./types";
let _page: core.Page | null;

async function getPage(isDev: boolean) {
	if (_page) {
		return _page;
	}
	const options = await getOptions(isDev);
	const browser = await core.launch(options);
	_page = await browser.newPage();
	return _page;
}

export async function getScreenshot(text: string, type: FileType, isDev: boolean) {
	const page = await getPage(isDev);
	await page.setViewport({ width: 1200, height: 630 });
	await page.goto(`https://tutor-media.liilab.com/tutor/home/og/${text}`, {
		waitUntil: "networkidle2",
	});
	const file = await page.screenshot({ type });
	await page.goto(`https://phs-og-image.vercel.app/${text}`, {
		waitUntil: "networkidle2",
	});
	return file;
}
