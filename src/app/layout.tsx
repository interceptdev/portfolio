import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata: Metadata = {
  title: "intercept — UI designer & Roblox scripter",
  description: "Interfaces with character. Code that brings them to life. UI design and Roblox Luau scripting by intercept.",
  robots: { index: true, follow: true },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/icon.svg` },
  openGraph: {
    title: "intercept — Made to be played",
    description: "UI design and Roblox Luau scripting. Explore the interface collection.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#050505", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark"><body>{children}</body></html>;
}
