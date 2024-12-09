"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Confetti from "@/components/Confetti";
import Image from "next/image";

export default function Home() {
  const [isGiftOpened, setIsGiftOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [ribbonRemoved, setRibbonRemoved] = useState(false);
  const [step, setStep] = useState(0);

  const horizontalDrag = useMotionValue(0);
  const verticalDrag = useMotionValue(0);
  const DRAG_THRESHOLD = 50;

  const horizontalRibbonOpacity = useTransform(
    horizontalDrag,
    [-100, 0, 100],
    [0, 1, 0]
  );

  const verticalRibbonOpacity = useTransform(
    verticalDrag,
    [-100, 0, 100],
    [0, 1, 0]
  );

  const openGift = () => {
    setIsGiftOpened(true);
    setTimeout(() => setShowConfetti(true), 500);
  };

  const handleHorizontalDragEnd = (_, info) => {
    if (
      Math.abs(info.velocity.x) > 100 ||
      Math.abs(horizontalDrag.get()) > DRAG_THRESHOLD
    ) {
      setStep(1);
    }
    horizontalDrag.set(0);
  };

  const handleVerticalDragEnd = (_, info) => {
    if (
      Math.abs(info.velocity.y) > 100 ||
      Math.abs(verticalDrag.get()) > DRAG_THRESHOLD
    ) {
      setStep(2);
      setTimeout(() => {
        setRibbonRemoved(true);
        setTimeout(openGift, 500);
      }, 500);
    }
    verticalDrag.set(0);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {!isGiftOpened ? (
          <div className="relative">
            <motion.div
              className="touch-none"
              animate={{ scale: ribbonRemoved ? 0.8 : 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-pink-400 rounded-2xl relative shadow-lg">
                {/* Horizontal Ribbon */}
                {step === 0 && (
                  <motion.div
                    drag="x"
                    dragConstraints={{ left: -5, right: 5 }}
                    dragElastic={0.5}
                    dragMomentum={true}
                    style={{
                      x: horizontalDrag,
                      opacity: horizontalRibbonOpacity,
                    }}
                    onDragEnd={handleHorizontalDragEnd}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-12 sm:h-16 bg-pink-600 touch-none"
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                      <div className="text-pink-200 text-2xl animate-pulse">
                        ←
                      </div>
                      <div className="text-pink-200 text-sm">Desliza</div>
                      <div className="text-pink-200 text-2xl animate-pulse">
                        →
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Vertical Ribbon */}
                {step <= 1 && (
                  <motion.div
                    drag={step === 1 ? "y" : false}
                    dragConstraints={{ top: -5, bottom: 5 }}
                    dragElastic={0.5}
                    dragMomentum={true}
                    style={{ y: verticalDrag, opacity: verticalRibbonOpacity }}
                    onDragEnd={handleVerticalDragEnd}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-full bg-pink-600"
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {step === 1 && (
                      <div className="absolute inset-0 flex flex-col items-center justify-between py-4">
                        <div className="text-pink-200 text-2xl animate-pulse">
                          ↑
                        </div>
                        <div className="text-pink-200 text-sm rotate-90">
                          Desliza
                        </div>
                        <div className="text-pink-200 text-2xl animate-pulse">
                          ↓
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Enhanced Bow Design */}
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                  animate={
                    ribbonRemoved
                      ? {
                          y: -50,
                          opacity: 0,
                          scale: 0,
                        }
                      : {}
                  }
                >
                  {/* Center circle */}
                  <div className="w-16 h-16 bg-pink-600 rounded-full shadow-lg relative">
                    {/* Bow loops */}
                    <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-12 bg-pink-600 rounded-full transform -rotate-45" />
                    <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-8 h-12 bg-pink-600 rounded-full transform rotate-45" />
                    {/* Ribbon tails */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-4 h-16 bg-pink-600 transform rotate-12" />
                      <div className="w-4 h-16 bg-pink-600 transform -rotate-12 -mt-14 ml-4" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Instructions */}
            <motion.div
              className="text-center mt-8"
              animate={{ opacity: ribbonRemoved ? 0 : 1 }}
            >
              <p className="text-lg sm:text-xl text-gray-700 font-medium px-6 py-3 bg-white/50 rounded-full shadow-sm">
                {step === 0
                  ? "🎀 Desliza el listón a los lados"
                  : step === 1
                  ? "✨ ¡Ahora desliza arriba o abajo!"
                  : "🎉 ¡Desenvolviéndose!"}
              </p>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center w-full max-w-md mx-auto px-4"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600"
              >
                ¡Feliz Cumpleaños!
              </motion.h1>

              {/* Photo Container */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full max-w-xs aspect-square bg-white rounded-2xl shadow-lg overflow-hidden p-4"
              >
                <div className="w-full h-full bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 rounded-xl relative">
                  <Image
                    src="/images/hb-stitch.jpg"
                    alt="Birthday"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>
              </motion.div>

              {/* Buttons Container */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mt-6">
                <button
                  onClick={() => {
                    setIsGiftOpened(false);
                    setShowConfetti(false);
                    setRibbonRemoved(false);
                    setStep(0);
                  }}
                  className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all hover:scale-105 shadow-md font-medium"
                >
                  🎁 Repetir
                </button>
                <Link
                  href="/main"
                  className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-all hover:scale-105 shadow-md font-medium text-center"
                >
                  ✨ Continuar
                </Link>
                <a
                  href="https://drive.google.com/drive/folders/1y7yzcRC9GmByJmU5RZwmj50uQ2WcEGpX?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all hover:scale-105 shadow-md font-medium text-center"
                >
                  📸 Ver Fotos
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showConfetti && <Confetti />}
    </main>
  );
}
