import { ParsedRequest } from "./types";

const groupOptions = ["Science", , "Arts", , "Commerce", , "General"];
const mediumOptions = ["Bangla Medium", "English Medium", "English Version", "Madrasa Medium"];

function getCss() {
	return `
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
			background-image: url("https://phs-og-image.vercel.app/Banner.jpg");
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
			margin: 0px auto;
			padding: 10px 20px;
			font-size: 24px;
			color: #2c2c53;
			font-weight: 600;
			border-radius: 5px;
		}`;
}

export function getHtml(parsedReq: ParsedRequest) {
	const { text, address, budget, medium, group, course, subjectLabel } = parsedReq;

	const title = text === "both" ? "A Tutor !!!" : text === "male" ? "Male teacher" : "Female Tutor";

	return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
		<link rel="preconnect" href="https://fonts.googleapis.com">
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
				<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&display=swap" rel="stylesheet">
				<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Bengali:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss()}
    </style>
    <body>
		<div class="background grid-container">
		<div class="banner-left">
			<div class="class"><h3>For ${course && course}</h3></div>
			<div class="title-div">
				<h1 class="title-shaodow">${title && title}</h1>
				<h1 class="title">${title && title}</h1>
			</div>
			<div class="address">${address && address}</div>
			<div class="applyBtn">Apply Now</div>
		</div>
		<div class="banner-right">
			<div class="group-div">
				<div class="group">
					<h3 class="group-title">Group: ${group && groupOptions[parseInt(group) - 1]}</h3>
					<h3 class="group-shadow">Group: ${group && groupOptions[parseInt(group) - 1]}</h3>
				</div>
			</div>
			<div class="subject-box">
				<h3 class="version">${medium && mediumOptions[parseInt(medium) - 1]}</h3>
				<div class="subjects">
				${subjectLabel && subjectLabel.map((subject: any) => `<div class="subject">◼︎ ${subject}</div>`)}
				</div>
				<div class="budget-div">
					<h3 class="budget">${budget} TK</h3>
				</div>
			</div>
		</div>
	</div>
    </body>
</html>`;
}
