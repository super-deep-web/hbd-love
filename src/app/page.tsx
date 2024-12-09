"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [isGiftOpened, setIsGiftOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenGift = () => {
    setIsGiftOpened(true);
    setTimeout(() => setShowConfetti(true), 300);
  };

  const handleReset = () => {
    setIsGiftOpened(false);
    setShowConfetti(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #fce7f3, #f3e8ff)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        overflow: "hidden",
      }}
    >
      <AnimatePresence mode="wait">
        {!isGiftOpened ? (
          <div
            style={{
              position: "relative",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <div
              onClick={handleOpenGift}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                display: "inline-block",
                transition: "transform 0.3s",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            >
              <div
                style={{
                  width: "320px",
                  height: "320px",
                  backgroundColor: "#f472b6",
                  borderRadius: "1rem",
                  position: "relative",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-2rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <div
                    style={{
                      width: "4rem",
                      height: "4rem",
                      backgroundColor: "#db2777",
                      borderRadius: "9999px",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "-2rem",
                        top: "50%",
                        transform: "translateY(-50%) rotate(-45deg)",
                        width: "2rem",
                        height: "3rem",
                        backgroundColor: "#db2777",
                        borderRadius: "9999px",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        right: "-2rem",
                        top: "50%",
                        transform: "translateY(-50%) rotate(45deg)",
                        width: "2rem",
                        height: "3rem",
                        backgroundColor: "#db2777",
                        borderRadius: "9999px",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    transform: "translateY(-50%)",
                    width: "100%",
                    height: "3rem",
                    backgroundColor: "#db2777",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "3rem",
                    height: "100%",
                    backgroundColor: "#db2777",
                  }}
                />
              </div>
            </div>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#374151",
                fontWeight: 500,
                marginTop: "2rem",
                padding: "0.75rem 1.5rem",
                background: "rgba(255,255,255,0.5)",
                borderRadius: "9999px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
              }}
            >
              🎁 Toca para abrir tu regalo
            </p>
          </div>
        ) : (
          <div
            style={{ textAlign: "center", width: "100%", maxWidth: "28rem" }}
          >
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                background: "linear-gradient(to right, #db2777, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "2rem",
              }}
            >
              ¡Feliz Cumpleaños!
            </h1>

            <div
              style={{
                width: "320px",
                height: "320px",
                position: "relative",
                margin: "0 auto 2rem",
              }}
            >
              <Image
                src="/images/hb-stitch.jpg"
                alt="Birthday"
                fill
                style={{ objectFit: "cover", borderRadius: "0.75rem" }}
                priority
              />
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <button
                onClick={handleReset}
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "#ec4899",
                  color: "white",
                  borderRadius: "9999px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: "1rem",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                🎁 Repetir
              </button>
              <Link
                href="/main"
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "#8b5cf6",
                  color: "white",
                  borderRadius: "9999px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  textDecoration: "none",
                  textAlign: "center",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                ✨ Continuar
              </Link>
              <a
                href="https://drive.google.com/drive/folders/1y7yzcRC9GmByJmU5RZwmj50uQ2WcEGpX"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.75rem 1.5rem",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  borderRadius: "9999px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  textDecoration: "none",
                  textAlign: "center",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                📸 Ver Fotos
              </a>
            </div>
          </div>
        )}
      </AnimatePresence>

      {showConfetti && (
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none" }}>
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: [
                  "#ff0a54",
                  "#ff477e",
                  "#ff7096",
                  "#ff85a1",
                  "#fbb1bd",
                  "#f9bec7",
                ][Math.floor(Math.random() * 6)],
                animation: `fall ${2 + Math.random() * 2}s linear ${
                  Math.random() * 2
                }s infinite`,
                left: `${Math.random() * 100}%`,
                transform: "translateY(-10px)",
              }}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10px) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
