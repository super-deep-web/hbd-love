"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Confetti() {
  const containerRef = useRef<HTMLDivElement>(null);
  const confettiRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const colors = ["#FF69B4", "#87CEEB", "#DDA0DD", "#90EE90", "#FFD700"];
    const container = containerRef.current;
    confettiRefs.current = [];

    const createConfetti = () => {
      const confetti = document.createElement("div");
      confetti.className = "absolute w-3 h-3 rotate-45";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = `${Math.random() * 100}%`;
      container.appendChild(confetti);
      confettiRefs.current.push(confetti);

      gsap.fromTo(
        confetti,
        {
          y: -20,
          x: 0,
          rotation: 0,
          opacity: 1,
        },
        {
          y: "100vh",
          x: "random(-100, 100)",
          rotation: "random(-360, 360)",
          duration: "random(2, 4)",
          ease: "power1.out",
          opacity: 0,
          onComplete: () => {
            if (confetti.parentNode === container) {
              container.removeChild(confetti);
            }
            confettiRefs.current = confettiRefs.current.filter(
              (ref) => ref !== confetti
            );
          },
        }
      );
    };

    // Crear confeti inicial
    for (let i = 0; i < 30; i++) {
      createConfetti();
    }

    // Continuar creando confeti con intervalo
    const intervalId = setInterval(() => {
      if (confettiRefs.current.length < 100) {
        createConfetti();
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    // Limpieza
    return () => {
      clearInterval(intervalId);
      confettiRefs.current.forEach((confetti) => {
        if (confetti.parentNode === container) {
          container.removeChild(confetti);
        }
      });
      confettiRefs.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
    />
  );
}
