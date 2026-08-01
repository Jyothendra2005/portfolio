import { HERO_CONTENT, NAME } from "../constants";
import profilePic from "../assets/Jyothendra-image.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <div
      id="hero"
      className="pb-16 border-b border-neutral-900 lg:mb-24"
    >
      <div className="flex flex-wrap lg:flex-nowrap lg:gap-12 items-center">

        {/* LEFT SIDE - INTRODUCTION */}
        <div className="w-full lg:w-3/5">
          <div className="flex flex-col items-center lg:items-start">

            {/* NAME */}
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-5xl font-thin tracking-tight lg:mt-1 lg:text-6xl"
            >
              {NAME}
            </motion.h1>

            {/* ROLE */}
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-2xl tracking-tight text-transparent lg:text-3xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text"
            >
              Full Stack Web Developer
            </motion.span>

            {/* DESCRIPTION */}
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-2xl py-4 my-2 font-light tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>

          </div>
        </div>

        {/* RIGHT SIDE - PROFILE IMAGE */}
        <div className="w-full mt-8 lg:w-2/5 lg:mt-0 flex items-center justify-center">

          {/* PURPLE BORDER + GLOW */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="
              w-72 h-72
              sm:w-80 sm:h-80
              lg:w-[430px] lg:h-[430px]
              rounded-full
              p-[5px]
              bg-purple-600
              shadow-[0_0_25px_rgba(147,51,234,0.8)]
            "
          >

            {/* IMAGE */}

            <div className="w-full h-full rounded-full overflow-hidden bg-[#eeeeee]">

              <img
                src={profilePic}
                alt={NAME}
                className="w-full h-full object-contain rounded-full"
              />

            </div>

          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Hero;