import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestVersionPopup from "@/components/TestVersionPopup";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TestVersionPopup />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
