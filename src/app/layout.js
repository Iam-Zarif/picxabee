/* eslint-disable @next/next/no-sync-scripts */

import Providers from "@/Providers";
import Authprovider from "@/components/AuthProvider/Authprovider";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ChatContextProvider } from "@/contexts/ChatContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PicxaBee",
  description: "Created by DevDynamos",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className={`${inter.className} `}>
        <main className="my-container">
          <Providers>
            <Authprovider>
              <ChatContextProvider>{children}</ChatContextProvider>
            </Authprovider>
          </Providers>
          <Toaster />
        </main>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </html>
  );

}
