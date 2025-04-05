import React from "react";
import { motion } from "framer-motion";

type ButtonProps = {
	whileHover?: object;
	whileTap?: object;
	type?: "button" | "submit" | "reset";
	title?: string;
	disabled?: boolean;
	onClick?: React.MouseEventHandler;
	className?: string;
	text?: string;
	children?: React.ReactNode;
	loading?: boolean;
};

const Buttons: React.FC<ButtonProps> = (props): JSX.Element => {
	const {
		whileHover,
		whileTap,
		type,
		title,
		disabled,
		onClick,
		className,
		text,
		children,
		loading,
	} = props;

	return (
		<motion.button
		
			type={type || "button"}
			title={title}
			disabled={disabled || loading}
			onClick={onClick}
			className={`${className} rounded-3xl flex items-center justify-center`}
		>
			{loading ? (
				<div className="loader"></div>
			) : (
				<>
					<p className="font-sefarvestSFProDisplay text-lg">{text}</p>
					{children}
				</>
			)}
		</motion.button>
	);
};

export default Buttons;
