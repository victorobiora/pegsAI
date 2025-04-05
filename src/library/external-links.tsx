"use client";

import Image from "next/image";

import twitterSvg from "@/public/assets/images/general/twitter.svg";
import telegramSvg from "@/public/assets/images/general/telegram.svg";
import { motion, AnimatePresence } from "framer-motion";



const ExternalLinks = () => {
    return (  <div
        className={`flex gap-4 flex-wrap  DesktopScreen:mt-8 justify-center text-lg font-bold text-white italic `}
      >
        {/* telegram */}
        <a
          href="
          "
        >
          <motion.button
            whileHover={{
              scale: 1.06,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-transparent w-16 h-16 flex justify-center items-center shadow-md border rounded-md p-3 "
          >
            <Image
              alt="telegram"
              src={telegramSvg}
              className="w-1/2 h-1/2"
            />
          </motion.button>
        </a>
        {/* twitter */}
        <a
          href="
          "
        >
          <motion.button
            whileHover={{
              scale: 1.06,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-transparent w-16 h-16 flex justify-center items-center shadow-md border rounded-md p-3 "
          >
            <Image
              alt="telegram"
              src={twitterSvg}
              className="w-1/2 h-1/2"
            />
          </motion.button>
        </a>
    
      </div>)
}

export default ExternalLinks;