import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import Navbar from "./navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from "@chakra-ui/react";
import { cn } from "@/lib/utils";

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
    <html lang="en" className={cn("font-sans", GeistSans.variable)} suppressHydrationWarning>
      <ChakraProvider>
        <body className="bg-background text-foreground antialiased">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <main>{children}</main>
            <ToastContainer />
            <Analytics />
          </ThemeProvider>
        </body>
      </ChakraProvider>
    </html>
  );
}
