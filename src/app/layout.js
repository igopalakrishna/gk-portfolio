// File: src/app/layout.js
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: " GK | AI/ML Portfolio",
  description: "My AI/ML projects & blog",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white w-full overflow-x-hidden">
        <Navbar />

        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
