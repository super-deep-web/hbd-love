"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessageCircle, Music } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Inicio", href: "/main", icon: Home },
    { name: "Mensajitos", href: "/main/messages", icon: MessageCircle },
    { name: "Canción", href: "/main/song", icon: Music },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-100 pb-safe"
    >
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link key={item.name} href={item.href} className="w-full">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`flex flex-col items-center py-1 ${
                    isActive
                      ? "text-pink-600"
                      : "text-gray-600 hover:text-pink-400"
                  }`}
                >
                  <Icon className="w-6 h-6 mb-1" />
                  <span className="text-xs font-medium">{item.name}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
