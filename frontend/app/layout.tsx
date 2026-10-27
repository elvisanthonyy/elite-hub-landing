import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Freckle_Face } from "next/font/google";
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
      className={`${roboto.variable} ${caacupeOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
