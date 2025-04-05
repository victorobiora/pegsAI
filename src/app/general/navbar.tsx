"use client";

import pegsaiLogo from '@/public/assets/images/general/pegsAi_Image.png'
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import MenuIcon from "@/public/assets/images/general/menu-icon.svg";

import { useEffect } from "react";

const NavBar: React.FC<{
	toggleSidebar: () => void;
}> = ({ toggleSidebar}) => {
	const router = useRouter();
	const [viewNotifications, setViewNotifications] = useState(false);
	const [viewNavigationModal, setViewNavigationModal] = useState(false);
	const navigationRef = useRef<HTMLDivElement | null>(null);

	// Handle clicks outside periodChosen fields
	useEffect(() => {
		function handleClickOutsidePeriodChosen(event: MouseEvent) {
			if (
				viewNavigationModal &&
				navigationRef.current &&
				!navigationRef.current.contains(event.target as Node)
			) {
				setViewNavigationModal(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutsidePeriodChosen);

		return () => {
			document.removeEventListener("mousedown", handleClickOutsidePeriodChosen);
		};
	}, [viewNavigationModal]);

	

	/** Desktop View */
	const desktopView = () => {
		return (
			<section className=" MobileScreen:hidden TabletScreen:hidden w-full h-[7rem] py-4 px-10 bg-[#fb923c] flex justify-between items-center">
				<div
					className="h-20 w-[5rem] cursor-pointer"
					onClick={() => {
						router.push('/')
					}}

				>
					<Image alt="logo" src={pegsaiLogo} className="w-full h-full object-cover" />
				</div>

				

				{/* account details */}
				{/* <div className="flex justify-end my-10">
					<div className="flex">
						<div className="flex flex-row items-center gap-6 mx-6">
						<motion.button
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						className={`px-2 py-2 mx-4 ml-2 rounded-md text-[#435769] bg-pegsai-background-light-grey shadow-md`}
						onClick={(event) => {
							event.preventDefault();
						
						}}
					>
				CA: Coming soon... ⌛
					</motion.button>
						
						</div>
					</div>
				</div> */}
			</section>
		);
	};

	/** Tablet View */
	const tableView = () => {
		return (
			<div className="DesktopScreen:hidden MobileScreen:hidden  flex flex-row justify-between py-[13px] px-[24px] shadow-md">
				<div
					className="h-[4rem] w-[4rem] cursor-pointer"
					onClick={() => {
						router.push('/')
					}}
				>
					<Image alt="logo" src={pegsaiLogo} className="w-full h-full" />
				</div>
				<div className="flex flex-row items-center gap-[12px]">
					<Image
						src={MenuIcon}
						alt={" Menu Icon"}
						className="cursor-pointer"
						onClick={toggleSidebar}
					></Image>
				</div>
			</div>
		);
	};

	/** Mobile View */
	const mobileView = () => {
		return (
			<div className="DesktopScreen:hidden TabletScreen:hidden bg-[#fb923c] flex flex-row justify-between py-[13px] px-[24px] shadow-md">
				<div
					className="h-[4rem] w-[4rem] cursor-pointer"
					onClick={() => {
						router.push('/')
					}}
		
				>
					<Image alt="logo" src={pegsaiLogo} className="w-full h-full" />
				</div>
				<div className="flex flex-row items-center gap-[12px]">
					<Image
						src={MenuIcon}
						alt={" Menu Icon"}
						className="cursor-pointer"
						onClick={toggleSidebar}
					></Image>
				</div>
			</div>
		);
	};

	return (
		<section>
			{desktopView()}
			{tableView()}
			{mobileView()}
		</section>
	);
};

export default NavBar;

