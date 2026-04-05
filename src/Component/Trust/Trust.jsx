import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Where() {
  return (
    <section className="bg-gray-100 py-10 px-4 md:px-10 overflow-hidden">
      {/* TOP SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-black text-white rounded-2xl p-6 md:p-10 mb-10 grid md:grid-cols-2 gap-6 items-center"
      >
        {/* LEFT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">10m+</h2>
          <p className="text-gray-300 mt-2">Trusted clients / happy clients</p>

          <div className="flex mt-4 -space-x-3">
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/1.jpg"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/2.jpg"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/3.jpg"
            />
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 border-2 border-white">
              +
            </div>
          </div>
        </div>

        {/* FILTER */}
        <div className="flex flex-col md:flex-row gap-3">
          <select className="p-3 rounded-lg bg-gray-800">
            <option>Where To Go</option>
          </select>

          <select className="p-3 rounded-lg bg-gray-800">
            <option>Where To Go</option>
          </select>

          <select className="p-3 rounded-lg bg-gray-800">
            <option>Travel Type</option>
          </select>

          <button className="bg-orange-500 px-6 py-3 rounded-lg hover:scale-105 transition">
            Find Tours
          </button>
        </div>
      </motion.div>
    </section>
  );
}
