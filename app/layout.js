import "./globals.css";
import { Footer, NavBar } from "@/component/indx";
import { Inter } from "next/font/google";


export const metadata = {
  title: "Car Hub",
  description: "discover cars",
};

  const inter = Inter({subsets:["latin"]})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
