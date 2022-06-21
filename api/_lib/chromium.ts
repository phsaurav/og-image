import core from 'puppeteer-core';
import { getOptions } from './options';
import { FileType } from './types';
let _page: core.Page | null;

async function getPage(text: string,isDev: boolean) {
    if (_page) {
        return _page;
    }
    const options = await getOptions(isDev);
    const browser = await core.launch(options);
    _page = await browser.newPage(`https://tutor-media.liilab.com/tutor/home/og/${text}`);
    return _page;
}

export async function getScreenshot(text: string, type: FileType, isDev: boolean) {
    const page = await getPage( text,isDev);
    await page.setViewport({ width: 1200, height: 630 });
    const file = await page.screenshot({ type });
    return file;
}
