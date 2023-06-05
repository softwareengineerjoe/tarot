import { easeIn, motion } from "framer-motion";

export default function Loader() {
  return (
    <main
      className="h-screen font-playfair"
      style={{ backgroundColor: "#2a3042" }}
    >
      <nav className="flex items-center justify-center h-full">
        <ul className="flex flex-col text-center text-[#c3a38c] text-2xl">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="flex flex-row gap-2 mb-4 text-3xl tracking-wider text-gray-200"
          >
            Let your fate be{" "}
            <div className="text-[#c3a38c] flex flex-row">
              <motion.p
                initial={{ y: -500, x: 400, rotate: 360 }}
                animate={{ y: 0, x: 0, rotate: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                r
              </motion.p>
              <motion.p
                initial={{ y: 500, x: 400, rotate: 360 }}
                animate={{ y: 0, x: 0, rotate: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                e
              </motion.p>
              <motion.p
                initial={{ y: 500, x: -400, rotate: 360 }}
                animate={{ y: 0, x: 0, rotate: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                a
              </motion.p>
              <motion.p
                initial={{ y: -500, x: -400, rotate: 360 }}
                animate={{ y: 0, x: 0, rotate: 0 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                d
              </motion.p>
            </div>
          </motion.h3>
          <div className="flex flex-row justify-center gap-3 mb-4 text-3xl tracking-widest text-gray-200">
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="text-[#c3a38c]">D</span>raw{" "}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <span className="text-[#c3a38c]">Y</span>our{" "}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <span className="text-[#c3a38c]">C</span>ards
            </motion.p>
          </div>
        </ul>
      </nav>
    </main>
  );
}
