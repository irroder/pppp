import React, { useState, useMemo } from "react";
import BannerSwiper from "../components/BannerSwiper";
import SearchBar from "../components/SearchBar";
import GameGrid from "../components/GameGrid";
import CategoryNav from "../components/CategoryNav";
import { banners } from "../data/banners";
import { allGames } from "../data/games";

const categories = [
	{ id: "all", name: "Все", icon: "🎮", count: allGames.length },
	{ id: "popular", name: "Популярные", icon: "🔥", count: 24 },
	{ id: "new", name: "Новые", icon: "✨", count: 12 },
	{ id: "slots", name: "Слоты", icon: "🎰", count: 156 },
	{ id: "table", name: "Настольные", icon: "🃏", count: 32 },
	{ id: "live", name: "Live", icon: "📹", count: 18 },
];

const HomePage: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredGames = useMemo(() => {
		let filtered = allGames;

		// Filter by search query
		if (searchQuery.trim()) {
			filtered = filtered.filter(
				(game) =>
					game.title
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) ||
					game.provider
						.toLowerCase()
						.includes(searchQuery.toLowerCase())
			);
		}

		// Filter by category
		if (activeCategory !== "all") {
			switch (activeCategory) {
				case "popular":
					filtered = filtered.slice(0, 24);
					break;
				case "new":
					filtered = filtered.slice(-12);
					break;
				case "slots":
					filtered = filtered.filter(
						(game) =>
							game.title.toLowerCase().includes("slot") ||
							game.provider.toLowerCase().includes("pragmatic") ||
							game.provider.toLowerCase().includes("netent")
					);
					break;
				case "table":
					filtered = filtered.filter(
						(game) =>
							game.title.toLowerCase().includes("blackjack") ||
							game.title.toLowerCase().includes("roulette") ||
							game.title.toLowerCase().includes("baccarat")
					);
					break;
				case "live":
					filtered = filtered.filter((game) =>
						game.title.toLowerCase().includes("live")
					);
					break;
			}
		}

		return filtered;
	}, [searchQuery, activeCategory]);

	const handleSearch = (query: string) => {
		setSearchQuery(query);
	};

	const handleCategoryChange = (categoryId: string) => {
		setActiveCategory(categoryId);
	};

	return (
		<div className="min-h-screen bg-gray-900">
			<main className="pb-20">
				{/* Banner Section */}
				<section>
					<BannerSwiper banners={banners} />
				</section>

				{/* Search Section */}
				<section className="px-3 mb-4">
					<SearchBar onSearch={handleSearch} />
				</section>

				{/* Category Navigation */}
				<section>
					<CategoryNav
						categories={categories}
						activeCategory={activeCategory}
						onCategoryChange={handleCategoryChange}
					/>
				</section>

				{/* Games Section */}
				<section className="mt-2">
					{searchQuery ? (
						<GameGrid
							games={filteredGames}
							title={`Результаты поиска "${searchQuery}" (${filteredGames.length})`}
						/>
					) : (
						<GameGrid
							games={filteredGames}
							title={
								activeCategory === "all"
									? `Все игры (${filteredGames.length})`
									: `${
											categories.find(
												(c) => c.id === activeCategory
											)?.name
									  } (${filteredGames.length})`
							}
						/>
					)}
				</section>
			</main>
		</div>
	);
};

export default HomePage;
