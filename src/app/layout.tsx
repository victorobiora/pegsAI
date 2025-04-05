import React from "react";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToastContainer } from "react-toastify";
import { Montserrat } from "next/font/google";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import "@/public/assets/css/global.css";
import Link from "next/link";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "PegsAi - A revolutionary tool to bring back fun, order and a cohabitable world.",
  description:
    "PegsAI is a revolutionary tool to bring back fun, order and a cohabitable world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/general/pegsAi_Image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#199B6C" />
        <meta
          name="description"
          content="AI tool using deepseek as LLM"
        />

        <title>PegsAI.</title>
      </head>
      <body className={`${montserrat.className}  antialiased text-black`}>
        <ToastContainer />
        {children}

        <SpeedInsights />
      </body>
    </html>
  );
}
