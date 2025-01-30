import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
{/* import Metrics from "./metrics";*/}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Toranet Advanced Solutions",
  description: "Advanced Solutions Provider",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cover bg-center relative`}>
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50"></div>
        <NextUIProvider>
          <Navbar />
          <div className="relative z-10">
            {children}
            <Footer />
          </div>
        </NextUIProvider>
       {/*  <Metrics />*/}
      </body>
    </html>
  );
}
