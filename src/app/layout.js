import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "@/components/ui/ThemeProvider";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Abdulsalam Hassan | Full-Stack Developer",
  description: "Portfolio of Abdulsalam Hassan, a modern full-stack developer specializing in MERN, Next.js, and high-quality web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
