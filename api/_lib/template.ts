import { readFileSync } from "fs";
import { sanitizeHtml } from "./sanitizer";
import { ParsedRequest } from "./types";
// const twemoji = require("twemoji");
// const twOptions = { folder: "svg", ext: ".svg" };
// const emojify = (text: string) => twemoji.parse(text, twOptions);

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
    }
		body {
			margin: 0px;
			padding: 0px;
			font-family: "Montserrat", "Noto Serif Bengali", "sans-serif";
		}
		
		h3 {
			margin: 0;
			padding: 0;
		}
		
		h1 {
			margin: 0;
			padding: 0;
		}
		.background {
			width: 1200px;
			height: 630px;
			margin: 0;
			padding: 0;
			background-repeat: no-repeat;
			background-size: 1200px 630px;
		}
		
		.grid-container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}
		
		.class {
			color: #030831;
			background-color: #f1f3ff;
			display: inline-block;
			margin-top: 75px;
			margin-left: 35px;
			padding: 5px 10px;
			border-radius: 5px;
		}
		
		.class h3 {
			font-size: 28px;
			font-weight: 600;
		}
		
		.title-div {
			position: relative;
			display: flex;
			justify-content: center;
		}
		
		.title {
			font-size: 55px;
			margin-left: -35px;
			margin-top: 32px;
			color: #0a0f3f;
			position: absolute;
			text-align: center;
		}
		
		.title-shaodow {
			font-size: 55px;
			margin-left: -35px;
			position: absolute;
			color: white;
			margin-top: 35px;
			text-align: center;
			top: 0;
		}
		
		.address {
			color: #f5f6ff;
			font-size: 32px;
			width: 450px;
			margin-top: 260px;
			margin-left: 85px;
			font-weight: 500;
		}
		
		.applyBtn {
			color: white;
			background-color: #f9441c;
			display: inline-block;
			font-size: 32px;
			font-weight: 600;
			margin-top: 20px;
			margin-left: 85px;
			padding: 12px 80px;
			border-radius: 5px;
		}
		
		.banner-right {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
		}
		
		.group {
			position: relative;
		}
		
		.group-title {
			font-size: 28px;
			padding: 8px 20px;
			color: #050e5c;
			font-weight: 600;
			position: relative;
			text-align: center;
			z-index: 50;
		}
		
		.group-shadow {
			font-size: 28px;
			margin-top: 2px;
			position: absolute;
			color: white;
			text-align: center;
			font-weight: 600;
			top: 0;
			background-color: #ffcf37;
			padding: 8px 20px;
		}
		
		.subject-box {
			margin-top: 36px;
			border: 4px solid #081163;
			width: 70%;
			padding: 20px 0px;
			margin-bottom: 36px;
		}
		
		.version {
			text-align: center;
			margin-top: -42px;
			margin-bottom: 20px;
			font-size: 32px;
			width: 80%;
			margin-left: auto;
			font-weight: 600;
			margin-right: auto;
			background-color: #f6f6ff;
		}
		
		.budget-div {
			display: flex;
			justify-content: center;
			margin-bottom: -50px;
			background-color: #f6f6ff;
			width: 80%;
			margin-left: auto;
			margin-right: auto;
			margin-top: 20px;
		}
		
		.budget {
			background-color: #fffbee;
			padding: 8px 55px;
			font-size: 32px;
			font-weight: 600;
			color: #fe2e00;
			border-radius: 50px;
			border: 1px solid #d19300;
		}
		
		.subjects {
			width: 80%;
			margin-left: auto;
			margin-right: auto;
		}
		
		.subject {
			background-color: white;
			border: 1px solid #9e9efd;
			margin: 10px auto;
			padding: 10px 20px;
			font-size: 24px;
			color: #2c2c53;
			font-weight: 600;
			border-radius: 5px;
		}`;
}

export function getHtml(parsedReq: ParsedRequest) {
	const { text, theme, fontSize} = parsedReq;

	console.log(text);

	return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss(theme, fontSize)}
    </style>
    <body>
		<div class="background grid-container">
		<div class="banner-left">
			<div class="class"><h3>For Class 6</h3></div>
			<div class="title-div">
				<h1 class="title-shaodow">${text} Tutor</h1>
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
</html>`;
}

// function getImage(src: string, width = "auto", height = "225") {
// 	return `<img
//         class="logo"
//         alt="Generated Image"
//         src="${sanitizeHtml(src)}"
//         width="${sanitizeHtml(width)}"
//         height="${sanitizeHtml(height)}"
//     />`;
// }

// function getPlusSign(i: number) {
// 	return i === 0 ? "" : '<div class="plus">+</div>';
// }
