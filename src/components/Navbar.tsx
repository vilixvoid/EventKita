"use client";

import { useRouter } from "next/navigation";
import { Ticket } from "lucide-react";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#1a0f1f]/80 backdrop-blur-lg border border-[#2a2030] rounded-full shadow-lg px-8 py-4 flex items-center justify-between w-[95%] md:w-[85%]">
      {/* 🔹 Logo */}
      <div
        className="font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent text-xl cursor-pointer"
        onClick={() => router.push("/")}
      >
        EvenKita
      </div>

      {/* 🔹 Menu Tengah */}
      <div className="flex items-center gap-4 text-gray-300 text-sm">
        {["Beranda", "Lineup", "Akan Datang", "Kreator", "Blog", "Kontak"].map(
          (item) => (
            <button
              key={item}
              className="px-5 py-2 rounded-full hover:bg-[#2b1a33] hover:text-white transition"
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* 🔹 Kanan: Icon Tiket + Tombol Login */}
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-[#2b1a33] transition">
          <Ticket className="w-5 h-5 text-gray-300" />
        </button>

        <button
          onClick={() => router.push("/auth/login")}
          className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-full hover:opacity-90 transition"
        >
          Login
        </button>
      </div>
    </nav>
  );
}
