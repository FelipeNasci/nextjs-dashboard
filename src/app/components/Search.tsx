"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import {
  useState,
  FormEvent,
  useRef,
  InputHTMLAttributes,
  useCallback,
  memo,
} from "react";

function Search() {
  const search = useRef<InputHTMLAttributes<HTMLInputElement>>(null);
  const [disabledButton, setDisabledButton] = useState(true);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const route = useRouter();

  const params = new URLSearchParams();

  const clearInputSearch = () => {
    if (search.current) search.current.value = "";
  };

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisabledButton(true);

    const value = search?.current?.value as string;

    if (value) params.set("search", value);
    else params.delete("search");

    route.replace(`${pathname}?${params.toString()}`);
    clearInputSearch();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="outline-0 bg-white text-black p-2 me-4 rounded-md w-[260px] text-xl sm:w-80 "
        placeholder="Search"
        type="search"
        ref={search as any}
        onChange={(e) => setDisabledButton(!e.target.value)}
        defaultValue={searchParams?.get("search") ?? ""}
      />
      <button
        className=" bg-zinc-600 text-white p-2 rounded-md w-[70px] disabled:text-zinc-400 disabled:bg-zinc-500 disabled:cursor-not-allowed"
        type="submit"
        disabled={disabledButton}
      >
        Search
      </button>
    </form>
  );
}

export default memo(Search);
