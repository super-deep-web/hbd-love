"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function MainPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #fef2f6, #f5f3ff)",
        paddingBottom: "5rem",
      }}
    >
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3rem 1rem 1rem",
        }}
      >
        <div className="text-center mb-2">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              style={{
                fontSize: "clamp(1.875rem, 5vw, 3rem)",
                fontWeight: "bold",
                background: "linear-gradient(to right, #db2777, #9333ea)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "1rem",
              }}
            >
              ¡Feliz cumpleaños mi amor!
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#4b5563" }}>
              Espero poder hacerte muy feliz mi hermosa princesita
            </p>
          </motion.section>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(4px)",
              borderRadius: "1rem",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ type: "spring", duration: 1.5, delay: 0.3 }}
              style={{
                width: "5rem",
                height: "5rem",
                background: "#fce7f3",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#db2777"
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
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "#1f2937",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              Con mucho amor
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                color: "#4b5563",
                textAlign: "center",
                lineHeight: "1.625",
              }}
            >
              Debo decirte que fuiste hecha con mucho amor porque en serio que
              ha llegado nacer una hermosa y muy buena mujer, en ti solo puedo
              ver mucho amor, mucha valentía, mucha feliidad y es todo eso lo
              que logras transmitir y compartir conmigo siempre.
            </motion.p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(4px)",
              borderRadius: "1rem",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: -360 }}
              transition={{ type: "spring", duration: 1.5, delay: 0.4 }}
              style={{
                width: "5rem",
                height: "5rem",
                background: "#f3e8ff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#9333ea"
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
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "#1f2937",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              Eres una bendición
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                color: "#4b5563",
                textAlign: "center",
                lineHeight: "1.625",
              }}
            >
              Porque me encantaría haberte conocido antes para saber que había
              tan maravillosa niña esperándome, y en serio que agradezco a Dios
              de habernos encontrado, que te haya dado la vida y la oportunidad
              de encontrarnos.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(4px)",
            borderRadius: "1.5rem",
            padding: "1.5rem",
            marginBottom: "3rem",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#db2777",
              marginBottom: "1rem",
            }}
          >
            Para ti
          </h2>
          <p
            style={{
              color: "#374151",
              lineHeight: "1.625",
            }}
          >
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
