import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "https://api.theindia.co.in/storage/image/travelogues/banner/family-trip-jagannath-puri-temple-odisha-775864.jpg",
  "https://s7ap1.scene7.com/is/image/incredibleindia/sri-jagannath-temple-puri-odisha-3-attr-hero?qlt=82&ts=1726663744795",
  "https://cdn.guidetour.in/wp-content/uploads/2018/06/Jagannath-Temple-in-Puri.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* BACKGROUND STACK (NO FLASH) */}
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          initial={false}
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 1.1,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute w-full h-full object-cover"
        />
      ))}

      {/* DARK GRADIENT OVERLAY (BETTER THAN BLACK) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 text-white max-w-2xl px-6 md:px-16">
        {/* TITLE */}
        <motion.h1
          key={index}
          initial="hidden"
          animate="show"
          exit="exit"
          className="text-2xl md:text-4xl font-bold leading-tight"
        >
          {/* 🔥 FIRST LINE (CINEMATIC) */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 80,
                scale: 0.95,
                filter: "blur(10px)",
              },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
              exit: {
                opacity: 0,
                y: -60,
                scale: 0.95,
                filter: "blur(8px)",
                transition: { duration: 0.5 },
              },
            }}
          >
            Turning your <span className="text-orange-400">destiny</span>
          </motion.div>

          {/* 🔥 SECOND LINE (LETTER ANIMATION) */}
          <motion.div
            className="mt-1"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.06,
                  delayChildren: 0.3,
                },
              },
              exit: {
                transition: {
                  staggerChildren: 0.03,
                  staggerDirection: -1,
                },
              },
            }}
          >
            {"dreams into reality".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                    filter: "blur(6px)",
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.3,
                    },
                  },
                  exit: {
                    opacity: 0,
                    y: -30,
                    transition: { duration: 0.2 },
                  },
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-4 text-lg text-gray-200"
        >
          Explore the Puri Konark Temple.
        </motion.p>

        {/* BUTTON */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3 }}
          whileHover={{ scale: 1.08 }}
          className="mt-6 bg-orange-500 px-6 py-3 rounded-xl shadow-lg"
        >
          Explore Now
        </motion.button>

        {/* GLOW TEXT */}
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-6 text-orange-400 text-sm"
        >
          ✨ Discover Amazing Places
        </motion.div>
      </div>
    </section>
  );
}
