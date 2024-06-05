import { Inter } from "next/font/google";
import "./globals.css";
import NewNav from "../components/NewNav";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div>
      <NewNav />
      <main className="flex-grow">
        {children}
      </main>
      <Footer className=""/>
    </div>
  );
}
