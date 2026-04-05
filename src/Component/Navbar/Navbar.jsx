import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">DEVINE PURI HOLIDAYS</h1>

          {/* Desktop */}
          <ul className="hidden md:flex gap-6 font-medium">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">
              Destinations
            </li>
            <li className="hover:text-orange-500 cursor-pointer">Tours</li>
            <li className="hover:text-orange-500 cursor-pointer">Blog</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>

          <button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-xl">
            Book Now
          </button>

          {/* Mobile Button with animation */}
          <button className="md:hidden z-50" onClick={() => setOpen(!open)}>
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center space-y-8 text-2xl z-40"
          >
            {["Home", "Destinations", "Tours", "Blog", "Contact"].map(
              (item, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="cursor-pointer hover:text-orange-400"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </motion.p>
              ),
            )}

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 bg-orange-500 px-6 py-3 rounded-xl"
            >
              Book Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
