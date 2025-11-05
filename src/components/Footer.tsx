"use client";

export default function Footer() {
  return (
    <footer className="mt-16 pb-12 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-400">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center">
              <span className="text-black font-bold">EK</span>
            </div>
            <div className="font-semibold">EvenKita</div>
          </div>
          <div>Dirancang untuk generasi kreatif Indonesia.</div>
        </div>

        <div>
          <div className="font-medium mb-2">Tautan Cepat</div>
          <ul className="space-y-1">
            <li>Beranda</li>
            <li>Lineup</li>
            <li>Blog</li>
            <li>Kontak</li>
          </ul>
        </div>

        <div>
          <div className="font-medium mb-2">Tentang</div>
          <ul className="space-y-1">
            <li>Tentang Kami</li>
            <li>Kreator</li>
            <li>Partner</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <div className="font-medium mb-2">Ikuti Kami</div>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1a1220] flex items-center justify-center">TW</div>
            <div className="w-8 h-8 rounded-full bg-[#1a1220] flex items-center justify-center">IG</div>
            <div className="w-8 h-8 rounded-full bg-[#1a1220] flex items-center justify-center">YT</div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#241925] mt-8 pt-6 text-center text-xs text-gray-600">
        © 2025 EvenKita. Semua hak cipta dilindungi.
      </div>
    </footer>
  );
}
