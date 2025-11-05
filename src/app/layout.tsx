import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aranjit Archita - Portfolio",
  description: "Full-Stack Developer specializing in Vue.js, Laravel, and Node.js for enterprise applications. Building robust, scalable solutions for complex business needs.",
  keywords: ["Full-Stack Developer", "Vue.js", "Laravel", "Node.js", "Enterprise Applications", "Web Development"],
  authors: [{ name: "Aranjit D. Archita" }],
  openGraph: {
    title: "Aranjit Archita - Portfolio",
    description: "Full-Stack Developer specializing in Vue.js, Laravel, and Node.js for enterprise applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
