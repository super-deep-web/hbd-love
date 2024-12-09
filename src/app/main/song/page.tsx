"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { Music } from "lucide-react";

export default function SongPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 pb-20">
      <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
            Una Canción Para Ti
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Porque hay momentos que solo la música puede expresar
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
          className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mb-8"
        >
          <Music className="w-12 h-12 text-pink-600" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6 max-w-md w-full text-center mb-8"
        >
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            He elegido esta canción especialmente para ti, porque también tienes
            que poder disfrutar con un poco de música, que sabes muy bien todo
            lo hago con mucho amor para ti, y en serio espero que te haya
            gustado todo. Te amo muchísimo mi amor. Feliz cumpleaños.
          </p>
        </motion.div>

        <Link
          href="https://www.youtube.com/watch?v=niBD9rWiBm8"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium shadow-lg flex items-center gap-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Escuchar Canción
          </motion.div>
        </Link>
      </main>
      <Navbar />
    </div>
  );
}
