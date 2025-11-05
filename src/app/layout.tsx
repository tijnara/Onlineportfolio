import "./globals.css";
import { Toaster } from "../components/ui/sonner";

export const metadata = {
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
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
