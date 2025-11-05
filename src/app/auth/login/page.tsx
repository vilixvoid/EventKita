"use client";

import React from "react";


export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16 bg-background-dark text-white font-display relative overflow-hidden">
      {/* 🔮 Background Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-purple-600/30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-teal-500/30 blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
      </div>

      {/* 🔹 Login Card */}
      <div className="relative z-10 w-full max-w-md space-y-8 rounded-xl bg-black/30 border border-white/10 p-8 backdrop-blur-lg">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 justify-center mb-4">
           <div className="size-8">
            <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
            >
                <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9333EA" />   {/* from-purple-600 */}
                    <stop offset="100%" stopColor="#EC4899" /> {/* to-pink-500 */}
                </linearGradient>
                </defs>
                <g clipPath="url(#clip0_6_535)">
                <path
                    clipRule="evenodd"
                    fill="url(#gradient)"
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                    fillRule="evenodd"
                ></path>
                </g>
            </svg>
            </div>

            <h1 className="text-3xl font-bold font-heading tracking-[-0.015em] bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              EvenKita
            </h1>
          </div>
          <h2 className="text-3xl font-bold font-heading text-white">
            Masuk ke EvenKita
          </h2>
        </div>

        {/* 🔹 Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/80"
            >
              Email atau Username
            </label>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-primary transition input-glow"
                placeholder="Masukkan email..."
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white/80"
              >
                Password
              </label>
              <a
                href="#"
                className="text-sm font-semibold text-primary hover:text-primary/80"
              >
                Lupa password?
              </a>
            </div>
            <div className="mt-2">
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-primary transition input-glow"
                placeholder="Masukkan password..."
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center h-12 px-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition"
          >
            Masuk
          </button>
        </form>

        {/* 🔹 Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-background-dark px-2 text-white/60">
              Atau masuk dengan
            </span>
          </div>
        </div>

        {/* 🔹 Social Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 w-full h-12 px-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-colors">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-sm font-semibold text-white">Google</span>
          </button>

          <button className="flex items-center justify-center gap-3 w-full h-12 px-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-colors">
            <svg
              className="h-5 w-5 text-[#1877F2]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              />
            </svg>
            <span className="text-sm font-semibold text-white">Facebook</span>
          </button>
        </div>

        <p className="text-center text-sm text-white/70">
          Belum punya akun?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-blue-500 hover:text-blue-500/80"
          >
            Daftar di sini
          </a>
        </p>
      </div>
    </main>
  );
}
