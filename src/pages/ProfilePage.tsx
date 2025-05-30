import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
	ArrowLeft,
	User,
	Settings,
	History,
	HelpCircle,
	LogOut,
	Globe,
	Crown,
} from "lucide-react";

const ProfilePage: React.FC = () => {
	const navigate = useNavigate();
	const { t, i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	const menuItems = [
		{
			icon: <User size={20} />,
			label: t("personalInfo"),
			onClick: () => console.log("Personal info"),
		},
		{
			icon: <History size={20} />,
			label: t("history"),
			onClick: () => console.log("History"),
		},
		{
			icon: <Settings size={20} />,
			label: t("settings"),
			onClick: () => console.log("Settings"),
		},
		{
			icon: <HelpCircle size={20} />,
			label: t("support"),
			onClick: () => console.log("Support"),
		},
		{
			icon: <LogOut size={20} />,
			label: t("logout"),
			onClick: () => console.log("Logout"),
			isDestructive: true,
		},
	];

	return (
		<div className="pb-20 min-h-screen">
			<div className="p-4 flex items-center border-b border-[#2C3467]">
				<button
					className="card-dark p-3 rounded-full mr-4 hover:scale-105 transition-transform duration-200"
					onClick={() => navigate(-1)}
				>
					<ArrowLeft size={20} />
				</button>
				<h1 className="text-2xl font-bold">{t("profile")}</h1>
			</div>

			<div className="px-4 py-6">
				<div className="flex flex-col items-center mb-8">
					<div className="relative mb-4">
						<div
							className="profile-avatar w-24 h-24"
							style={{
								backgroundImage: `url('/img/avatar.png')`,
							}}
						/>
						<div className="absolute -top-1 -right-1 bg-[#4FC824] rounded-full p-2">
							<Crown size={16} className="text-white" />
						</div>
					</div>
					<h2 className="text-2xl font-bold mb-1">User Name</h2>
					<p className="text-white/60 text-sm">ID: 123456789</p>
					<div className="mt-3 px-4 py-2 bg-gradient-to-r from-[#4FC824] to-[#45b520] rounded-full">
						<span className="text-white font-semibold text-sm">
							VIP Player
						</span>
					</div>
				</div>

				<div className="card-dark mb-6">
					<h3 className="font-bold mb-4 flex items-center text-lg">
						<Globe size={20} className="mr-3 text-[#5068d8]" />
						{t("language")}
					</h3>
					<div className="flex gap-3">
						<button
							className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
								i18n.language === "en"
									? "bg-[#5068d8] text-white shadow-lg"
									: "bg-[#171B35] text-white/70 hover:bg-[#2a305b]"
							}`}
							onClick={() => changeLanguage("en")}
						>
							English
						</button>
						<button
							className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
								i18n.language === "ru"
									? "bg-[#5068d8] text-white shadow-lg"
									: "bg-[#171B35] text-white/70 hover:bg-[#2a305b]"
							}`}
							onClick={() => changeLanguage("ru")}
						>
							Русский
						</button>
					</div>
				</div>

				<div className="card-dark overflow-hidden">
					{menuItems.map((item, index) => (
						<div
							key={index}
							className={`menu-item flex items-center ${
								item.isDestructive
									? "text-red-400"
									: "text-white"
							}`}
							onClick={item.onClick}
						>
							<div
								className={`mr-4 ${
									item.isDestructive
										? "text-red-400"
										: "text-[#5068d8]"
								}`}
							>
								{item.icon}
							</div>
							<div className="font-medium">{item.label}</div>
							<ArrowLeft
								size={16}
								className="ml-auto rotate-180 opacity-40"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
