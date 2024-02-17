import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import AppContext from "@/components/AppContext";

// Apply font
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl p-4 mx-auto">
          <AppContext>
          <Navbar />
          {children}
          <footer className="p-8 mt-16 text-center text-gray-500 border-t">
            &copy; 2024 All Rights Reserved CTECH
          </footer>
          </AppContext>
        </main>
      </body>
    </html>
  );
}
