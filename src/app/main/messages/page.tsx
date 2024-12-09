"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const messages = [
  {
    text: "¡Feliz cumpleaños! Espero que este día y muchos más estén llenmos de felicidad para ti, para tu familia, para nosotros dos, que peuda ser yo siempre quien te pueda seguir haciendo muy feliz.",
    author: "Tu principe",
  },
  {
    text: "En este día tan especial, te tengo que recordar lo guapísima que eres, lo importante que eres para muchos, para tu familia, para mi, sobre todo para mi jejeje, que en serio espero poder compartir muchos días más como este contigo.",
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
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #fdf2f8, #f3e8ff)",
        paddingBottom: "5rem",
      }}
    >
      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem 1rem",
        }}
      >
        <motion.div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "clamp(1.875rem, 5vw, 3rem)",
              fontWeight: "bold",
              background: "linear-gradient(to right, #db2777, #9333ea)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mensajes Especiales
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ color: "#4b5563", marginTop: "0.5rem" }}
          >
            Palabras llenas de cariño para ti
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "grid",
            gap: "1.5rem",
            maxWidth: "42rem",
            margin: "0 auto",
          }}
        >
          {messages.map((message, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(4px)",
                borderRadius: "1rem",
                padding: "1.5rem",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 * index }}
                style={{
                  width: "3rem",
                  height: "3rem",
                  background: "#fce7f3",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
              <motion.p
                style={{
                  color: "#374151",
                  fontSize: "1.125rem",
                  marginBottom: "1rem",
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                {message.text}
              </motion.p>
              <motion.p
                style={{
                  color: "#db2777",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                {message.author}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Navbar />
    </div>
  );
}
