import Link from "next/link";
import Search from "@/app/components/Search";

export default function Navbar() {
  return (
    <nav className="flex flex-col gap-4 items-center p-4 font-bold max-w-6xl mx-auto sm:flex-row sm:justify-between ">
      <h1 className="font-thin text-white">
        <Link href="/">Next JS Gallery</Link>
      </h1>
      <Search />
    </nav>
  );
}
