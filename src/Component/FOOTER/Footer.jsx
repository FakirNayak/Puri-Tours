import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative bg-black text-gray-300 pt-20 overflow-hidden">
      {/* 🌈 Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-purple-500/10 blur-3xl"></div>

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {/* SERVICES */}
        <motion.div variants={item}>
          <h3 className="text-white text-lg font-semibold mb-5 relative inline-block">
            Services
            <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-orange-500"></span>
          </h3>
          <ul className="space-y-3">
            {[
              "Best Tour Guide",
              "Tour Booking",
              "Hotel Booking",
              "Ticket Booking",
            ].map((text, i) => (
              <li
                key={i}
                className="hover:text-orange-400 transition cursor-pointer hover:translate-x-2"
              >
                › {text}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* DESTINATIONS */}
        <motion.div variants={item}>
          <h3 className="text-white text-lg font-semibold mb-5 relative inline-block">
            Destinations
            <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-orange-500"></span>
          </h3>
          <ul className="space-y-3">
            {["Puri", "Konark", "Chilika", "Chandrabhaga"].map((place, i) => (
              <li
                key={i}
                className="hover:text-orange-400 transition cursor-pointer hover:translate-x-2"
              >
                › {place}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div variants={item}>
          <h3 className="text-white text-lg font-semibold mb-5 relative inline-block">
            Contact
            <span className="absolute left-0 -bottom-1 w-10 h-[2px] bg-orange-500"></span>
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start hover:text-orange-400 transition">
              <MapPin size={18} /> Puri, Odisha
            </li>
            <li className="flex gap-3 items-center hover:text-orange-400 transition">
              <Mail size={18} /> supporttravel@gmail.com
            </li>
            <li className="flex gap-3 items-center hover:text-orange-400 transition">
              <Phone size={18} /> +91 7538969012
            </li>
          </ul>
        </motion.div>

        {/* ABOUT / BRAND */}
        <motion.div variants={item}>
          <h3 className="text-white text-lg font-semibold mb-5">Tours</h3>
          <p className="text-sm leading-relaxed">
            Discover the beauty of travel with us. We provide the best tours,
            bookings, and unforgettable experiences across top destinations.
          </p>
        </motion.div>
      </motion.div>

      {/* BIG BACKGROUND TEXT */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-10 left-0 w-full text-center pointer-events-none"
      >
        <h1 className="text-[70px] md:text-[180px] font-bold text-white/5 tracking-widest">
          TOURS
        </h1>
      </motion.div>

      {/* BOTTOM BAR */}
      <div className="relative border-t border-gray-800 mt-20 py-6 px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © 2026 <span className="text-orange-500">Tours</span>, All rights
          reserved
        </p>

        {/* 🚀 Scroll To Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-4 md:mt-0 bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-full shadow-lg"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
}
