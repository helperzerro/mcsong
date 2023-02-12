import Head from "next/head";
import "../styles/output.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <Head />
      <body>{children}</body>
    </html>
  );
}
