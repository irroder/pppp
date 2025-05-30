import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
	const navigate = useNavigate();

	const balance = "54656.78";

	const handleLogoClick = () => navigate("/");
	const handleBalanceClick = () => navigate("/balance");
	const handleProfileClick = () => navigate("/profile");

	return (
		<header
			className="flex justify-between items-center w-full px-4 py-4 border-b border-[#2C3467] bg-[#171B35]"
			style={{ height: "80px" }}
		>
			<img
				src="/img/logo.png"
				alt="JoyPlay Logo"
				className="max-h-[50px] cursor-pointer transition-transform duration-200 hover:scale-105"
				onClick={handleLogoClick}
			/>

			<div className="flex gap-3 items-center">
				<div className="balance-card flex items-center gap-3 p-3 min-w-[140px] h-[48px]">
					<div className="flex items-center justify-center text-white font-semibold text-base">
						${balance}
					</div>
					<button
						onClick={handleBalanceClick}
						className="flex justify-center items-center text-white outline-none border-none w-8 h-8 rounded-lg bg-[#4FC824] text-xl font-bold transition-all duration-200 hover:bg-[#45b520] hover:scale-110 hover:shadow-lg"
					>
						+
					</button>
				</div>

				<div
					onClick={handleProfileClick}
					className="profile-avatar w-12 h-12 cursor-pointer"
					style={{ backgroundImage: `url('/img/avatar.png')` }}
				/>
			</div>
		</header>
	);
};

export default Header;
