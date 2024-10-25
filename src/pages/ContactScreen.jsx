import { motion } from "framer-motion";
import github from "../assets/github.png";

export const ContactScreen = () => {
  return (
    <div className="min-h-screen flex items-start justify-center bg-white text-black dark:bg-gray-900 dark:text-white p-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md dark:bg-gray-800 bg-gray-300 p-8 rounded-lg shadow-lg"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl font-bold text-center mb-4"
        >
          Contact Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mb-6"
        >
          Hi, I’m Konstantinos Gerogiannis. I developed this app using React and
          Tailwind CSS.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="space-y-4 flex flex-col justify-center items-center"
        >
          <div className="flex items-center justify-between gap-10">
            <span className="font-medium">Email:</span>
            <a
              href="mailto:kostger2@gmail.com"
              className="text-blue-400 hover:underline"
            >
              kostger2@gmail.com
            </a>
          </div>
          <a
            href="https://github.com/kostger"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            <img
              src={github}
              alt="github"
              className="aspect-square w-20 h-20"
            />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};
