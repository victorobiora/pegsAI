/** @type {import('next').NextConfig} */
import nextPWA from "next-pwa";
import MonacoWebpackPlugin from "monaco-editor-webpack-plugin";

const production = process.env.NODE_ENV === "production";

const withPWA = nextPWA({
    dest: "public",
    disable: !production,
    swSrc: "service-worker.js",
});

const nextConfig = {
    images: {
        unoptimized: true,
    },
	webpack: (config, { isServer }) => {
		// Ensure MonacoWebpackPlugin is only applied on the client side
		if (!isServer) {
			config.plugins.push(
				new MonacoWebpackPlugin({
					languages: ["javascript", "typescript", "python", "html", "css"], // Add the languages you need
				})
			);
		}
	
		return config;
	},
};

export default withPWA(nextConfig);
