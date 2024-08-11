
import Header from "@/components/header/Header";
import { Inter } from "next/font/google";
import HeaderBottom from "@/components/header/HeaderBottom";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>

      <div className="py-10 bg-gray-300">Home Page</div>

    </main>
  )
}
