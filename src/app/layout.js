/* eslint-disable @next/next/no-sync-scripts */
import Authprovider from '@/components/AuthProvider/Authprovider';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'PicxaBee',
	description: 'Created by DevDynamos',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
			</head>
			<body className={`${inter.className} `}>
				<main className="my-container">
				<Authprovider>{children}</Authprovider>
				</main>
				<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
				<script>AOS.init();</script>
			</body>
		</html>
	);
}
