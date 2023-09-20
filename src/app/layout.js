/* eslint-disable @next/next/no-sync-scripts */

import { ChatContextProvider } from "@/context/ChatContext";
import ChatContext2 from "@/context/ChatContext2";
import Providers from "@/provider";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import ThemeProviders from "./ThemeProviders";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PicxaBee | DevDynamos",

  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </head>
      <body className={`${inter.className} dark:bg-black-bg-secondary `}>
        <Providers>
          <ChatContextProvider>
            <ChatContext2>
              <ThemeProviders>
                <div className="">
                  {/* <Navbar /> */}
                  <Toaster />
                  <div className="dark:text-white dark:bg-zinc-800">
                    {children}
                  </div>
                </div>
              </ThemeProviders>
            </ChatContext2>
          </ChatContextProvider>
        </Providers>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </html>
  );
}
