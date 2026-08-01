import { motion } from "framer-motion";

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Codingprofiles = () => {
  return (
    <div className="pb-24 border-b border-neutral-900">

      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        Coding Profiles 🎯
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >

        {/* LEETCODE */}
        <motion.a
          variants={iconvariants(0)}
          initial="initial"
          animate="animate"
          href="https://leetcode.com/u/Jyothendra/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg"
            alt="LeetCode"
            width="40"
            height="40"
          />
        </motion.a>


        {/* CODEFORCES */}
        <motion.a
          variants={iconvariants(0)}
          initial="initial"
          animate="animate"
          href="https://codeforces.com/profile/Jyothendra_2005"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codeforces.svg"
            alt="Codeforces"
            width="40"
            height="40"
          />
        </motion.a>

        {/* CODE360 / CODING NINJAS */}
        <motion.a
          variants={iconvariants(0)}
          initial="initial"
          animate="animate"
          href="https://www.naukri.com/code360/profile/20938171-b7b6-4e35-a0a4-a416e7ecf1aa"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.simpleicons.org/codingninjas"
            alt="Code360"
            width="40"
            height="40"
          />
        </motion.a>


        {/* CODECHEF */}
        <motion.a
          variants={iconvariants(0)}
          initial="initial"
          animate="animate"
          href="https://www.codechef.com/users/jyothendra"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.codechef.com/images/cc-logo.svg"
            alt="CodeChef"
            width="80"
            height="80"
          />
        </motion.a>


        {/* HACKERRANK */}
        <motion.a
          variants={iconvariants(0)}
          initial="initial"
          animate="animate"
          href="https://www.hackerrank.com/profile/jyothendra25"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg"
            alt="HackerRank"
            width="40"
            height="40"
          />
        </motion.a>

      </motion.div>
    </div>
  );
};

export default Codingprofiles;