import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import pegsImage2 from "@/public/assets/images/general/clothespin.jpg";
import pegsImage1 from "@/public/assets/images/general/pegsAi_Image.png";
import Image from "next/image";
import Link from "next/link";

const MobileDropDownNavBar: React.FC<{
  remove: () => void;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  activeSection: string;
}> = ({ remove, activeSection, setActiveSection }) => {
  const router = useRouter();

  return (
    <section
      className="top-0 left-0 h-full w-full bg-[#43576980] DesktopScreen:hidden"
      onClick={(event) => {
        event.stopPropagation();
        remove();
      }}
    >
      <div className="flex TabletScreen:justify-end justify-center w-full h-screen">
        <div
          className="py-5 rounded-md px-3 TabletScreen:w-[50%] w-[80%] h-[50%] bg-white relative top-5 TabletScreen:right-5 flex flex-col"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <div className="flex flex-col gap-7 py-5 text-blue-400 underline font-bold">
            <Link href="/" className="flex gap-2 items-center cursor-pointer ">
              <div className="h-8 w-8">
                <Image
                  alt="pegs_1"
                  src={pegsImage1}
                  className="w-full h-full"
                />
              </div>

              <p>Home</p>
            </Link>
            <Link href="/chat" className="flex gap-2 items-center cursor-pointer">
              <div className="h-8 w-8">
                <Image
                  alt="pegs_2"
                  src={pegsImage2}
                  className="w-full h-full rounded-full"
                />
              </div>

              <p>Chat with Pegs</p>
            </Link>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileDropDownNavBar;
