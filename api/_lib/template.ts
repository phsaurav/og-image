import { readFileSync } from "fs";
import { sanitizeHtml } from "./sanitizer";
import { ParsedRequest } from "./types";
const twemoji = require("twemoji");
const twOptions = { folder: "svg", ext: ".svg" };
const emojify = (text: string) => twemoji.parse(text, twOptions);

const rglr = readFileSync(`${__dirname}/../_fonts/Inter-Regular.woff2`).toString("base64");
const bold = readFileSync(`${__dirname}/../_fonts/Inter-Bold.woff2`).toString("base64");
const mono = readFileSync(`${__dirname}/../_fonts/Vera-Mono.woff2`).toString("base64");

function getCss(theme: string, fontSize: string) {
	let background = "white";
	let foreground = "black";
	let radial = "lightgray";

	if (theme === "dark") {
		background = "black";
		foreground = "white";
		radial = "dimgray";
	}
	return `
    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${rglr}) format('woff2');
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: bold;
        src: url(data:font/woff2;charset=utf-8;base64,${bold}) format('woff2');
    }

    @font-face {
        font-family: 'Vera';
        font-style: normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${mono})  format("woff2");
      }

    body {
        background: ${background};
        background-image: radial-gradient(circle at 25px 25px, ${radial} 2%, transparent 0%), radial-gradient(circle at 75px 75px, ${radial} 2%, transparent 0%);
        background-size: 100px 100px;
        height: 100vh;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    code {
        color: #D400FF;
        font-family: 'Vera';
        white-space: pre-wrap;
        letter-spacing: -5px;
    }

    code:before, code:after {
        content: '\`';
    }

    .logo-wrapper {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }

    .logo {
        margin: 0 75px;
    }

    .plus {
        color: #BBB;
        font-family: Times New Roman, Verdana;
        font-size: 100px;
    }

    .spacer {
        margin: 150px;
    }

    .emoji {
        height: 1em;
        width: 1em;
        margin: 0 .05em 0 .1em;
        vertical-align: -0.1em;
    }
    
    .heading {
        font-family: 'Inter', sans-serif;
        font-size: ${sanitizeHtml(fontSize)};
        font-style: normal;
        color: ${foreground};
        line-height: 1.8;
    }`;
}

export function getHtml(parsedReq: ParsedRequest) {
	const { gender, studentInfo } = parsedReq;

	console.log(gender, studentInfo);

	return `
		<!DOCTYPE html>
		<html>
			<head>
				<title>Generated OG:Image</title>
				<link rel="stylesheet" href="styles.css" />
			</head>
			<body>
				<div class="background grid-container">
					<div class="banner-left">
						<div class="class"><h3>For Class 6</h3></div>
						<div class="title-div">
							<h1 class="title-shaodow">${gender} Tutor</h1>
							<h1 class="title">Female Tutor</h1>
						</div>
						<div class="address">শিবগঞ্জ/ উপশহর ABC পয়েন্টের আগে মেইন রোড</div>
						<div class="applyBtn">Apply Now</div>
					</div>
					<div class="banner-right">
						<div class="group-div">
							<div class="group">
								<h3 class="group-title">Group: Science</h3>
								<h3 class="group-shadow">Group: Science</h3>
							</div>
						</div>
						<div class="subject-box">
							<h3 class="version">English Version</h3>
							<div class="subjects">
								<div class="subject">◼︎ General Science</div>
								<div class="subject">◼︎ Math</div>
								<div class="subject">◼︎ English</div>
								<div class="subject">◼︎ English</div>
								<div class="subject">◼︎ English</div>
							</div>
							<div class="budget-div">
								<h3 class="budget">3,000 TK</h3>
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>
		
`;
}

function getImage(src: string, width = "auto", height = "225") {
	return `<img
        class="logo"
        alt="Generated Image"
        src="${sanitizeHtml(src)}"
        width="${sanitizeHtml(width)}"
        height="${sanitizeHtml(height)}"
    />`;
}

function getPlusSign(i: number) {
	return i === 0 ? "" : '<div class="plus">+</div>';
}
