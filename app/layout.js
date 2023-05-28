import Head from "next/head";
import "../styles/output.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <Head />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
