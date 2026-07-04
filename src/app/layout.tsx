import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import PageLoader from "@/components/PageLoader";

export const metadata: Metadata = {
  title: "Maturi Hemanth - Graphic Designer & Video Editor",
  description:
    "Creative professional specialising in graphic design, video editing, motion graphics, and social media content. Currently at Property Edge Pvt. Ltd.",
  keywords: ["Graphic Designer", "Video Editor", "Motion Graphics", "Social Media Design", "Hemanth", "Maturi Hemanth"],
  authors: [{ name: "Maturi Hemanth" }],
  openGraph: {
    title: "Maturi Hemanth - Graphic Designer & Video Editor",
    description: "Creative professional specialising in graphic design, video editing, and motion graphics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className="grain">
        <ThemeProvider>
          <PageLoader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
