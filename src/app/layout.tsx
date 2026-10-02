import type { Metadata } from "next";
import "github-markdown-css/github-markdown.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Frontend Certification Project Portfolio",
};

function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
