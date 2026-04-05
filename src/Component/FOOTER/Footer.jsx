import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-gray-300 pt-16 relative overflow-hidden">
      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-3">
            <li>› Best Tour Guide</li>
            <li>› Tour Booking</li>
            <li>› Hotel Booking</li>
            <li>› Ticket Booking</li>
          </ul>
        </motion.div>

        {/* COMPANY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            <li>› About Us</li>
            <li>› Community</li>
            <li>› Jobs Careers</li>
            <li>› News Blog</li>
          </ul>
        </motion.div>

        {/* DESTINATIONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-white font-semibold mb-4">Destinations</h3>
          <ul className="space-y-3">
            <li>› African Safaris</li>
            <li>› Alaska & Canada</li>
            <li>› South America</li>
            <li>› Middle East</li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-3">
            <li className="flex gap-2 items-start">
              <MapPin size={18} /> 578 Level, D-block Street Melbourne,
              Australia
            </li>
            <li className="flex gap-2 items-center">
              <Mail size={18} /> supporttravel@gmail.com
            </li>
            <li className="flex gap-2 items-center">
              <Phone size={18} /> +880 123 345 88
            </li>
          </ul>
        </motion.div>

        {/* NEWSLETTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-white font-semibold mb-4">
            Subscribe Our Newsletter
          </h3>
          <p className="text-sm mb-4">Stay connected & never miss a deal!</p>

          <div className="flex bg-gray-900 rounded-xl overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent px-4 py-3 w-full outline-none"
            />
            <button className="bg-white text-black px-4 font-semibold">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* BIG BACKGROUND TEXT */}
      <div className="absolute bottom-10 left-0 w-full text-center pointer-events-none">
        <h1 className="text-[80px] md:text-[180px] font-bold text-white/5 tracking-widest">
          TOURS
        </h1>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 mt-16 py-6 px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © 2026 <span className="text-orange-500">Tours</span>, All rights
          reserved
        </p>

        {/* SCROLL BUTTON */}
        <button
          onClick={scrollToTop}
          className="mt-4 md:mt-0 bg-orange-500 p-3 rounded-full hover:scale-110 transition"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
}
