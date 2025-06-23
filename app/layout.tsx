import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { AppProvider } from "./AppProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProjeX",
  description: "Project Management Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
        <body
            className={cn(
                geistSans.variable,
                geistMono.variable,
                "min-h-screen bg-background font-sans antialiased"
            )}
        >
            <AppProvider>
                {children}
            </AppProvider>
            <Toaster />
        </body>
        </html>
  );
}
