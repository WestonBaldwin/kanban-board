import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Kanban Board</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-700 hover:text-blue-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-700 hover:text-blue-500 transition">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
