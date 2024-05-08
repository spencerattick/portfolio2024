import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Spencer Attick Portfolio"
// };

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className={inter.className}>
        {children}
      </div>
    </>
  );
}
