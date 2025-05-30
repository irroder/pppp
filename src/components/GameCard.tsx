import React from "react";
import { Game } from "../types";

interface GameCardProps {
	game: Game;
	onClick?: (gameId: string) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
	const handleClick = () => {
		if (onClick) {
			onClick(game.id);
		}
	};

	return (
		<div
			className="game-card-container group cursor-pointer"
			onClick={handleClick}
		>
			<div className="relative overflow-hidden rounded-xl bg-gray-900 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
				<img
					className="game-card-image w-full object-cover transition-transform duration-300 group-hover:scale-110"
					src={game.imageUrl}
					alt={game.title}
					loading="lazy"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
				<div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
					<h3 className="text-sm font-semibold truncate">
						{game.title}
					</h3>
					<p className="text-xs text-gray-300 mt-1">
						{game.provider}
					</p>
				</div>
			</div>
		</div>
	);
};

export default GameCard;
