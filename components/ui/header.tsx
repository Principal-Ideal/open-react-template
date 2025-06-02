"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="absolute z-30 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-14 items-center">
          <Logo />
        </div>
      </div>
    </header>
  );
}