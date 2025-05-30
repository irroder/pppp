import React from "react";
import { useTranslation } from "react-i18next";
import { Star, Plus } from "lucide-react";
import GameCard from "./GameCard";
import { Game } from "../types";

interface GameSectionProps {
	title: "new" | "best";
	games: Game[];
}

const GameSection: React.FC<GameSectionProps> = ({ title, games }) => {
	const { t } = useTranslation();

	const icon =
		title === "new" ? (
			<Plus size={20} className="text-[#5068d8]" />
		) : (
			<Star size={20} className="text-[#5068d8]" />
		);

	return (
		<div className="w-full mb-8">
			<div className="flex items-center mb-4">
				{icon}
				<h2 className="text-white font-bold text-xl ml-3">
					{t(title)}
				</h2>
			</div>

			<div className="grid grid-cols-2 gap-4 mb-4">
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</div>

			<button className="btn-primary text-white w-full py-3 font-semibold">
				{t("showAll")}
			</button>
		</div>
	);
};

export default GameSection;
