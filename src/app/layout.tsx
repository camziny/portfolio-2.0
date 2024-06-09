import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { switchThemeDuration } from "./constants";
import Navbar from "./navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cam Ziny",
  description:
    "I'm a software developer with a passion for creating web applications that enhance user experiences. My expertise lies in developing robust, scalable solutions using modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ChakraProvider>
        <body
          className={`${inter.className} bg-gray-50 dark:bg-gray-900 ${switchThemeDuration}`}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <main>{children}</main>
            <ToastContainer />
          </ThemeProvider>
        </body>
      </ChakraProvider>
    </html>
  );
}
