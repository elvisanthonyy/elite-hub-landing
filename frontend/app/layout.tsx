import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import ThemeProvider from "@/context/Theme-Provider";
import localFont from "next/font/local";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const caacupeOne = localFont({
  src: "../public/fonts/CaacupeOne-Regular.ttf",
  variable: "--font-caacupe-one",
});

export const metadata: Metadata = {
  title: "Elite Hub",
  description:
    "   At Elite Hub, we believe technology should be simple, accessible, and empowering. We build practical, scalable digital products that solve real-world problems while creating opportunities for people to learn, build, and grow in the digital industry.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${caacupeOne.variable} h-full antialiased bg-background text-foreground dark:bg-background dark:text-foreground transition-colors duration-500 ease-in-out`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
