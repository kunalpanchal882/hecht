
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100","300","400","500","700","900"],
});

export const metadata = {
  title: "HECHT",
  description: "Contact lens website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <link
  href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
  rel="stylesheet"
/>
        </head>
      <body className={roboto.className}>
        {children}
        </body>
    </html>
  );
}
