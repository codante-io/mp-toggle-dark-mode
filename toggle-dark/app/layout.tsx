import "./globals.css"
import { Inter } from "next/font/google";
import { ThemeProvider } from "./themeProvider"
import { ThemeSwitcher } from "./ThemeSwitcher";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Darkmode with Next.js and TailwindCSS",
  description:
    "I simply app to showcase dark mode with Next.js and TailwindCSS",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}
        transition-colors duration-1000
        dark:bg-gray-800 dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}