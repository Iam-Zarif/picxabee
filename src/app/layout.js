/* eslint-disable @next/next/no-sync-scripts */

import Navbar from "@/components/Navbar/Navbar";
import { ChatContextProvider } from "@/context/ChatContext";
import Providers from "@/provider";
import Authprovider2 from "@/provider/AuthProvider2";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	  title: "PicxaBee",

	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<head>
				<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
			</head>
			<body className={`${inter.className}`}> 
				<Providers>
					<Authprovider2>
						<ChatContextProvider>
							{/* <Navbar /> */}
							{/* <div className="py-28">{children}</div> */}
							<div>{children}</div>
						</ChatContextProvider>
					</Authprovider2>
				</Providers>
				<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
				<script>AOS.init();</script>
			</body>
		</html>
	);
}
