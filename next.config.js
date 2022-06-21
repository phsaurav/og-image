module.exports = {
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: "https://phs-og-image.vercel.app/:path*",
			},
		];
	},
};
