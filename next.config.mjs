/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '192.168.0.108',
				port: '1337',
				pathname: '/uploads/**',
			},
		],
	},
}

export default nextConfig
