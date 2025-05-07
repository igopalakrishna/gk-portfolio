import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Gopala Krishna Abba | AI/ML Portfolio",
  description: "My AI/ML projects & blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
