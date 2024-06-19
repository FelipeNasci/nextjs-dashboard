"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Search() {
  const [search, setSearch] = useState<string>("");
  const route = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    route.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="outline-0 bg-white text-black p-2 me-4 rounded-md w-[260px] text-xl sm:w-80 "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        type="search"
      />
      <button
        className=" bg-zinc-600 text-white p-2 rounded-md w-[70px]"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
