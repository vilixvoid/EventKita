// ==========================================
// 🔹 Data Dummy untuk EvenKita
// ==========================================

export type EventCard = {
  id: string;
  title: string;
  date: string;
  location: string;
  excerpt: string;
  image: string;
};

export const UPCOMING_EVENTS: EventCard[] = [
  {
    id: "e1",
    title: "Jakarta Music Fest",
    date: "Sabtu, 14 Desember 2024",
    location: "Stadion GBK, Jakarta",
    excerpt: "Festival musik tahunan terbesar di ibu kota.",
    image: "/assets/images/events/jakarta-music.jpg",
  },
  {
    id: "e2",
    title: "Bandung Tech Summit",
    date: "Jumat, 10 Januari 2025",
    location: "Trans Convention Centre, Bandung",
    excerpt: "Tempat di mana inovasi bertemu kesempatan.",
    image: "/assets/images/events/bandung-tech.jpg",
  },
  {
    id: "e3",
    title: "Yogya Art & Culture Week",
    date: "Senin, 3 Februari 2025",
    location: "Candi Prambanan, Yogyakarta",
    excerpt: "Rayakan jantung warisan budaya Jawa.",
    image: "/assets/images/events/yogya-art.jpg",
  },
];

// ==========================================
// 🔹 Data Dummy untuk Pembicara
// ==========================================
export const SPEAKERS = [
  {
    id: "sp1",
    name: "Ayu Putri",
    avatar: "/assets/images/speakers/avatar-1.jpg",
  },
  {
    id: "sp2",
    name: "Budi Santoso",
    avatar: "/assets/images/speakers/avatar-2.jpg",
  },
  {
    id: "sp3",
    name: "Rizal H",
    avatar: "/assets/images/speakers/avatar-3.jpg",
  },
  {
    id: "sp4",
    name: "Nina Laras",
    avatar: "/assets/images/speakers/avatar-4.jpg",
  },
  {
    id: "sp5",
    name: "Dedi Pranata",
    avatar: "/assets/images/speakers/avatar-5.jpg",
  },
  {
    id: "sp6",
    name: "Maya W",
    avatar: "/assets/images/speakers/avatar-6.jpg",
  },
];
