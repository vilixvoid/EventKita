"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UPCOMING_EVENTS, SPEAKERS } from "@/data/dummyData";

// ==========================================
// 🔹 Komponen Utama
// ==========================================
export default function Page() {
  const eventDate = useMemo(() => new Date("2025-06-10T18:00:00"), []);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(eventDate));
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft(eventDate)), 1000);
    const l = setTimeout(() => setLoading(false), 1500);
    return () => {
      clearInterval(t);
      clearTimeout(l);
    };
  }, [eventDate]);

  function handleEventClick(evTitle: string) {
    alert(`Kamu membuka detail acara: ${evTitle}`);
  }

  function handleExploreClick() {
    alert("Menjelajahi daftar acara...");
  }

  function handleJoinCreator() {
    alert("Menuju halaman pendaftaran kreator...");
  }

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 2500);
  }

  return (
    <main className="min-h-screen bg-[#0f0710] text-gray-200 flex flex-col items-center">
      <Navbar />

      <div className="w-full max-w-7xl px-10 py-16 mx-auto mt-24 space-y-20">
        {/* 🔹 Hero Section */}
        <Hero
          timeLeft={timeLeft}
          onExplore={handleExploreClick}
          onJoin={handleJoinCreator}
        />

        {/* 🔹 Upcoming Events */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Acara Mendatang yang Tidak Boleh Kamu Lewatkan
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Temukan acara besar berikutnya di dekatmu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))
              : UPCOMING_EVENTS.map((ev) => (
                  <EventCard
                    key={ev.id}
                    ev={ev}
                    onClick={() => handleEventClick(ev.title)}
                  />
                ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={handleExploreClick}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shadow-lg font-semibold"
            >
              Lihat Semua Acara
            </button>
          </motion.div>
        </motion.section>

        {/* 🔹 Speakers */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold">
            Pembicara &amp; Penampil Unggulan
          </h3>

          <div className="flex gap-6 justify-center items-center mt-6 overflow-x-auto pb-4">
            {loading
              ? Array.from({ length: 5 }).map((_, i) => (
                  <SkeletonSpeaker key={i} />
                ))
              : SPEAKERS.map((s) => (
                  <motion.div
                    key={s.id}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center w-28"
                  >
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 p-1">
                      <div className="w-full h-full rounded-full bg-[#140618] flex items-center justify-center overflow-hidden">
                        <Image
                          src={s.avatar}
                          alt={s.name}
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <span className="text-sm mt-2 text-center">{s.name}</span>
                  </motion.div>
                ))}
          </div>
        </motion.section>

        {/* 🔹 Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h2 className="text-3xl font-extrabold">
              Rasakan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-500">
                Budayanya.
              </span>
              <br />
              Nikmati{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-500">
                Energinya.
              </span>
            </h2>
            <div className="flex gap-8 mt-8">
              <Stat label="Acara" value="120+" />
              <Stat label="Peserta" value="30K+" />
              <Stat label="Kota" value="10" />
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full h-64 md:h-80 rounded-xl overflow-hidden bg-[#120717]"
          >
            <Image
              src="/assets/images/crowd.jpg"
              alt="crowd"
              width={640}
              height={480}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.section>

        {/* 🔹 Newsletter */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="bg-[#191021] rounded-xl p-8">
            <h3 className="text-xl font-bold">
              Jangan Lewatkan Acara Besar Berikutnya!
            </h3>
            <p className="text-gray-400 mt-2">
              Berlangganan newsletter untuk mendapatkan info acara terbaru,
              lineup, dan penawaran eksklusif.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-6 flex gap-3 flex-col sm:flex-row justify-center"
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 sm:w-1/2 px-4 py-3 rounded-md bg-[#0f0b12] border border-[#2a2130] placeholder:text-gray-500"
                placeholder="Masukkan email kamu"
                type="email"
                required
              />
              <button className="px-6 py-3 rounded-md bg-gradient-to-r from-pink-500 to-violet-500 font-semibold">
                {subscribed ? "Berlangganan ✔" : "Berlangganan"}
              </button>
            </form>
          </div>
        </motion.section>
      </div>

      <Footer />
    </main>
  );
}

// ==========================================
// 🔹 Hero Section
// ==========================================
function Hero({
  timeLeft,
  onExplore,
  onJoin,
}: {
  timeLeft: ReturnType<typeof getTimeLeft>;
  onExplore: () => void;
  onJoin: () => void;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative h-[60vh] rounded-2xl overflow-hidden mt-6"
    >
      <Image
        src="/assets/images/hero.png"
        alt="EvenKita Hero"
        fill
        priority
        className="object-cover rounded-2xl"
      />
      <div className="absolute inset-0 bg-black/70 rounded-2xl flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Di Sini Ide, Musik, dan Budaya <br />
          Bersatu dalam{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-500">
            EvenKita
          </span>
          <span className="block text-3xl text-pink-400 mt-2">2025</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl">
          Temukan acara kreatif, bertemu orang inspiratif, dan jadi bagian dari
          gerakan budaya Indonesia.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={onExplore}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 font-semibold"
          >
            Jelajahi Acara
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={onJoin}
            className="px-6 py-3 rounded-full border border-[#2b2130]"
          >
            Bergabung Sebagai Kreator
          </motion.button>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <CountdownBox label="Hari" value={timeLeft.days} />
          <CountdownBox label="Jam" value={timeLeft.hours} />
          <CountdownBox label="Menit" value={timeLeft.minutes} />
          <CountdownBox label="Detik" value={timeLeft.seconds} />
        </div>
      </div>
    </motion.header>
  );
}

// ==========================================
// 🔹 Komponen Pendukung
// ==========================================
function CountdownBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="w-20 h-16 bg-[#1b1220] rounded-lg flex flex-col items-center justify-center">
      <div className="text-xl font-bold">{String(value).padStart(2, "0")}</div>
      <div className="text-xs text-gray-400 mt-1">{label}</div>
    </div>
  );
}

function EventCard({
  ev,
  onClick,
}: {
  ev: (typeof UPCOMING_EVENTS)[0];
  onClick: () => void;
}) {
  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      className="rounded-xl overflow-hidden bg-[#120917] border border-[#2a2030] shadow-sm cursor-pointer transition-shadow"
      onClick={onClick}
    >
      <div className="w-full h-40 relative">
        <Image src={ev.image} alt={ev.title} fill className="object-cover" />
      </div>
      <div className="p-4 text-left">
        <h4 className="font-bold">{ev.title}</h4>
        <div className="text-sm text-gray-400 mt-1">
          {ev.date} · {ev.location}
        </div>
        <p className="mt-3 text-sm text-gray-300">{ev.excerpt}</p>
      </div>
    </motion.article>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-xl bg-[#120917] border border-[#2a2030] animate-pulse h-60"></div>
  );
}

function SkeletonSpeaker() {
  return (
    <div className="flex flex-col items-center w-28 animate-pulse">
      <div className="w-24 h-24 rounded-full bg-[#1a0f1f]" />
      <div className="w-16 h-3 bg-[#1a0f1f] rounded mt-3" />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  );
}

// ==========================================
// 🔹 Helper Function
// ==========================================
function getTimeLeft(target: Date) {
  const now = new Date().getTime();
  const t = target.getTime() - now;
  const seconds = Math.max(0, Math.floor((t / 1000) % 60));
  const minutes = Math.max(0, Math.floor((t / 1000 / 60) % 60));
  const hours = Math.max(0, Math.floor((t / (1000 * 60 * 60)) % 24));
  const days = Math.max(0, Math.floor(t / (1000 * 60 * 60 * 24)));
  return { days, hours, minutes, seconds };
}
