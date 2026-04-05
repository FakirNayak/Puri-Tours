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

export default function DestinationSection() {
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

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {/* BIG LEFT */}
        <motion.div
          variants={item}
          className="lg:row-span-2 rounded-2xl overflow-hidden will-change-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            className="w-full h-full object-cover hover:scale-110 transition duration-700"
          />
        </motion.div>

        {/* CARD 1 */}
        <motion.div
          variants={item}
          className="rounded-2xl overflow-hidden relative group will-change-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-bold">Climbing Waterfalls</h3>
            <p className="text-sm">Bol, Croatia</p>
          </div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          variants={item}
          className="rounded-2xl overflow-hidden relative group"
        >
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-bold">River Rafting</h3>
            <p className="text-sm">Alps</p>
          </div>
        </motion.div>

        {/* BIG CENTER */}
        <motion.div
          variants={item}
          className="lg:col-span-2 rounded-2xl overflow-hidden relative group"
        >
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <span className="absolute top-4 left-4 bg-orange-500 px-3 py-1 rounded-lg text-sm text-white">
            50+ tours
          </span>
        </motion.div>

        {/* RIGHT TOP */}
        <motion.div
          variants={item}
          className="rounded-2xl overflow-hidden relative group"
        >
          <img
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-bold">Temple View</h3>
            <p className="text-sm">Thailand</p>
          </div>
        </motion.div>

        {/* RIGHT BOTTOM */}
        <motion.div
          variants={item}
          className="rounded-2xl overflow-hidden relative group"
        >
          <img
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="font-bold">Mountain Escape</h3>
            <p className="text-sm">Nepal</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
