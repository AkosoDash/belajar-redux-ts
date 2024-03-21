import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center bg-black/80 p-24 ${inter.className}`}
    >
      <div className="flex flex-row items-center justify-center gap-4 w-full">
        <Link
          href={"/note-list"}
          className="px-4 py-2 bg-white text-black rounded-lg"
        >
          Note List
        </Link>
        <Link
          href={"/mini-marketplace"}
          className="px-4 py-2 bg-white text-black rounded-lg"
        >
          Mini Marketplace
        </Link>
        <Link
          href={"/mini-article"}
          className="px-4 py-2 bg-white text-black rounded-lg"
        >
          Mini Article
        </Link>
      </div>
    </main>
  );
}
