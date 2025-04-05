"use client";

import NavBar from "./navbar";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sidebar } from "./sidebar";

import AboutPegsAI from "./welcome/about-pegs";
import ExternalLinks from "@/src/library/external-links";

const Container = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleFilter = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup when component is unmounted
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section className="flex-1 h-screen overflow-y-auto">
      <div className="sticky top-0 z-[1000]">
        <NavBar toggleSidebar={toggleSidebar} />
      </div>
      <main className="relative">
        <div className="flex ">
          <Sidebar
            openMenu={isOpen}
            setOpenMenu={setIsOpen}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          <div className="flex-1 ">
            <AboutPegsAI />
            <div className="flex gap-4  DesktopScreen:flex-row flex-col DesktopScreen:justify-center items-center DesktopScreen:items-stretch  DesktpScreen:mt-16 mt-8 ">
              <motion.button
                whileHover={{
                  scale: 1.06,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-white w-[20rem] shadow-md rounded-md p-3 "
                onClick={() => {
                  router.push("/chat");
                }}
              >
                <h1 className="text-blue-500 font-bold text-lg my-2">
                  Chat with Pegs
                </h1>
                <div>
                  Ask pegs anything! about everything!{" "}
                  <span className="text-orange-500">😉</span>
                </div>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.06,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
                className="bg-white w-[20rem] shadow-md rounded-md p-3 "
              >
                <h1 className="text-blue-500 font-bold text-lg my-2">
                  Convert Text to Image
                </h1>
                <div>
                  Make your best memes come alive with our help. Your
                  Imagination is the only limit.
                  <br />
                  <br />
                  <br />
                  <span className="italic"> Coming soon...... ⌛</span>
                </div>
              </motion.button>
            </div>
            <div
              className={`flex flex-wrap  mt-5 DesktopScreen:mt-12 justify-center text-lg font-bold text-white italic `}
            >
              <p className="DesktopScreen:w-[50%] px-4 mb-5 animate-slideInAndBounce">
                {" "}
                PegsAI is a revolutionary tool to bring back fun, order and a
                cohabitable world. <br /> A clothespin dedicated to creating a
                connection between living humans and sentients
              </p>
            </div>
            <ExternalLinks />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Container;
