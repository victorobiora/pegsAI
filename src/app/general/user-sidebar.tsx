import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import exitIcon from "@/public/assets/images/general/exit-icon.svg";
import { useRouter } from "next/navigation";
import pegsaiLogoSideWays from "@/public/assets/images/general/reubba-logo-side-ways.png";

import { UserSidebarList } from "./user-sidebar-list";

export const UserSidebar = ({ openMenu, setOpenMenu }: any) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
      }
    };
    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu, setOpenMenu]);

  /** Desktop View */
  const desktopView = () => {
    return (
      <div
        className={`min-h-screen  ${isOpen ? "w-[260px]" : "w-20"} TabletScreen:hidden MobileScreen:hidden transition-all duration-300 border-r-[1px] border-b-[1px] bg-white border-[#E4E7EC]`}
      >
        <div className=" px-5 py-4 bg-white cursor-pointer">
          <Image
            alt="logo"
            src={pegsaiLogoSideWays}
            className="h-10 w-[10rem]"
          />
        </div>

        <aside onClick={() => setIsOpen(true)}>
          <UserSidebarList isOpen={isOpen} />
        </aside>
      </div>
    );
  };

  /** Tablet and Mobile View */
  const tabletmobileView = () => {
    return (
      <>
        {openMenu && (
          <div
            ref={sidebarRef}
            className="min-h-screen w-full z-[2000] absolute bg-white DesktopScreen:hidden  transition-all duration-300 border-r-[1px] border-[#E4E7EC]"
          >
            <div className="relative flex justify-between p-[30px] pr-[10px] pl-[20px]">
              <div className="h-10 w-[10rem]">
                <Image
                  alt="logo"
                  src={pegsaiLogoSideWays}
                  className="w-full h-full"
                />
              </div>

              <Image
                className="text-xl cursor-pointer "
                src={exitIcon}
                alt={"Exit Icon"}
                onClick={() => setOpenMenu(false)}
              />
            </div>
            <aside>
              <UserSidebarList />
            </aside>
          </div>
        )}
      </>
    );
  };

  return (
    <section>
      {desktopView()}
      {tabletmobileView()}
    </section>
  );
};
