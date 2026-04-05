import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 120,
    scale: 0.8,
    rotate: -5,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

export default function DestinationSection() {
  return (
    <section className="bg-gray-100 py-14 px-4 md:px-10 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {/* BIG LEFT */}
        <motion.div
          variants={item}
          whileHover={{
            y: -12,
            rotate: 1,
            scale: 1.03,
          }}
          className="lg:row-span-2 rounded-2xl overflow-hidden relative group shadow-lg"
        >
          <img
            src="https://www.savaari.com/blog/wp-content/uploads/2022/11/Konark-Sun-Temple-Ancient.webp"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="absolute bottom-5 left-5 text-white"
          >
            <h3 className="font-bold text-lg">Konark Temple</h3>
          </motion.div>
        </motion.div>

        {/* CARD 1 */}
        <motion.div
          variants={item}
          whileHover={{ y: -10, scale: 1.05 }}
          className="rounded-2xl overflow-hidden relative group shadow-md"
        >
          <img
            src="https://tds.indianeagle.com/wp-content/uploads/2026/02/Konark-temple.png"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-4 text-white"
          >
            <h3 className="font-semibold">Temple View</h3>
          </motion.div>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          variants={item}
          whileHover={{ y: -10, scale: 1.05 }}
          className="rounded-2xl overflow-hidden relative group shadow-md"
        >
          <img
            src="https://victoriaclubhotel.com/Images/blog/puri_beach1.jpg"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-4 text-white"
          >
            <h3 className="font-semibold">Puri Beach</h3>
          </motion.div>
        </motion.div>

        {/* BIG CENTER */}
        <motion.div
          variants={item}
          whileHover={{
            y: -12,
            scale: 1.03,
          }}
          className="lg:col-span-2 rounded-2xl overflow-hidden relative group shadow-lg"
        >
          <img
            src="https://i0.wp.com/stampedmoments.com/wp-content/uploads/2025/06/jagannath-temple-puri.jpg?fit=1024%2C768&ssl=1"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

          <span className="absolute top-4 left-4 bg-orange-500 px-3 py-1 rounded-lg text-sm text-white shadow">
            50+ tours
          </span>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            className="absolute bottom-5 left-5 text-white"
          >
            <h3 className="font-bold text-lg">Jagannath Temple</h3>
          </motion.div>
        </motion.div>

        {/* RIGHT TOP */}
        <motion.div
          variants={item}
          whileHover={{ y: -10, scale: 1.05 }}
          className="rounded-2xl overflow-hidden relative group shadow-md"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/94/Birds_eyeview_of_Chilika_Lake.jpg"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            className="absolute bottom-4 left-4 text-white"
          >
            <h3 className="font-semibold">Chilika Lake</h3>
          </motion.div>
        </motion.div>

        {/* RIGHT BOTTOM */}
        <motion.div
          variants={item}
          whileHover={{ y: -10, scale: 1.05 }}
          className="rounded-2xl overflow-hidden relative group shadow-md"
        >
          <img
            src="https://apps.odishatourism.gov.in/Application/uploadDocuments/TravelTrailDoc/Thumb_Other20190415_230248.jpg"
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            className="absolute bottom-4 left-4 text-white"
          >
            <h3 className="font-semibold">Nature View</h3>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
