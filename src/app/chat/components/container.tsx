"use client";

import NavBar from "../../general/navbar";
import { useState, useEffect } from "react";
import { Sidebar } from "../../general/sidebar";
import ChatUI from "./ChatUI";
import ExternalLinks from "@/src/library/external-links";


const Container = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [guestActiveSection, setGuestActiveSection] = useState("home");
  const [activeSection, setActiveSection] = useState("home");

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
3
    // Cleanup when component is unmounted
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
    
      <section className="flex-1 h-screen overflow-y-auto relative z-20">
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

            <div className="flex-1 flex  h-[40rem] DesktopScreen:mt-1 mt-10  items-center justify-center px-4">
              <ChatUI />
            </div>
          </div>
          <ExternalLinks />
        </main>
      </section>
    </>
  );
};

export default Container;
