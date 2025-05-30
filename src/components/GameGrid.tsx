import React from "react";
import GameCard from "./GameCard";
import { Game } from "../types";

interface GameGridProps {
	games: Game[];
	title?: string;
	className?: string;
}

const GameGrid: React.FC<GameGridProps> = ({
	games,
	title,
	className = "",
}) => {
	const handleGameClick = (gameId: string) => {
		// TODO: Implement game click handler
		console.log(`Game clicked: ${gameId}`);
	};

	if (games.length === 0) {
		return (
			<div className={`px-4 py-8 ${className}`}>
				<div className="text-center text-gray-400">
					<p className="text-lg">Игры не найдены</p>
					<p className="text-sm mt-2">
						Попробуйте изменить критерии поиска
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className={`px-3 ${className}`}>
			{title && (
				<div className="mb-4">
					<h2 className="text-lg font-bold text-white mb-2">
						{title}
					</h2>
					<div className="h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full w-16" />
				</div>
			)}

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
				{games.map((game) => (
					<GameCard
						key={game.id}
						game={game}
						onClick={handleGameClick}
					/>
				))}
			</div>
		</div>
	);
};

export default GameGrid;
