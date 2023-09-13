/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'i.ibb.co',
			'www.example.com',
			'ibb.co',
			'firebasestorage.googleapis.com',
			'lh3.googleusercontent.com',
			'encrypted-tbn0.gstatic.com',
		], // Add your domains here
	},
};

module.exports = nextConfig
