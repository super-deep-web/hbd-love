"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const messages = [
  {
    text: "¡Feliz cumpleaños! Espero que este día y muchos más estén llenmos de felicidad para ti, para tu familia, para nosotros dos, que peuda ser yo siempre quien te pueda seguir haciendo muy feliz.",
    author: "Tu principe",
  },
  {
    text: "En este día tan especial, te tengo que recordar lo guapísima que eres, lo importante que eres para muchos, para tu familia, para mi, sobre todo par ami jejeje, que en serio espero poder compartir muchos días más como este contigo.",
    author: "Con cariño, el amor de tu vida",
  },
  {
    text: "Que cada momento puedas disfrutarlo con aquellos a quienes tanto amas, y te aman también a ti, pero no tanto como yo lo hago mi amor, que sabes muy bien que mi amor por ti es inmensamente grande, pero bueno, como tu dices no tanto como el tuyo jajaja.",
    author: "Con amor, tu esposito",
  },
];

export default function MessagesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 pb-20">
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
            Mensajes Especiales
          </h1>
          <p className="text-gray-600 mt-2">
            Para una niña única y tierna como tú
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 max-w-2xl mx-auto"
        >
          {messages.map((message, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 * index }}
                className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-pink-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </motion.div>
              <p className="text-gray-700 text-lg mb-4 text-center italic">
                {message.text}
              </p>
              <p className="text-pink-600 font-medium text-center">
                {message.author}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Navbar />
    </div>
  );
}
