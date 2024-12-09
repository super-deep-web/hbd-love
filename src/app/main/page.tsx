"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 pb-20">
      <main className="container mx-auto px-4 pb-4 pt-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
            ¡Feliz cumpleaños mi amor!
          </h1>
          <p className="text-lg text-gray-600">
            Espero poder hacerte muy feliz mi hermosa princesita
          </p>
        </motion.div>

        {/* Featured Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
        >
          {/* Card 1 - Momentos Especiales */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-6 flex flex-col items-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ type: "spring", duration: 1.5, delay: 0.3 }}
              className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-pink-600"
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
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl font-semibold text-gray-800 mb-2 text-center"
            >
              Con mucho amor
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 text-center leading-relaxed"
            >
              Debo decirte que fuiste hecha con mucho amor porque en serio que
              ha llegado nacer una hermosa y muy buena mujer, en ti solo puedo
              ver mucho amor, mucha valentía, mucha feliidad y es todo eso lo
              que logras transmitir y compartir conmigo siempre.
            </motion.p>
          </motion.div>

          {/* Card 2 - Celebraciones */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-6 flex flex-col items-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: -360 }}
              transition={{ type: "spring", duration: 1.5, delay: 0.4 }}
              className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl font-semibold text-gray-800 mb-2 text-center"
            >
              Eres una bendición
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 text-center leading-relaxed"
            >
              Porque me encantaría haberte conocido antes para saber que había
              tan maravillosa niña esperándome, y en serio que agradezco a Dios
              de habernos encontrado, que te haya dado la vida y la oportunidad
              de encontrarnos.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Animated Message Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-6 mb-12"
        >
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Para ti</h2>
          <p className="text-gray-700 leading-relaxed">
            En serio que te mereces todo lo más bueno y maravilloso de este
            mundo, para ti siempre dedicaré todo mi amor, y mi amor será inmenso
            e infinito, para ti mi hermosa princesita, mi dulce y tierna
            esposita, en serio quiero decirte que te amo muchísimo y mi misión
            más grande es cuidar de ti, cuidar de esa sonrisa hermosa y de ese
            precioso corazón.
          </p>
        </motion.div>
      </main>

      <Navbar />
    </div>
  );
}
