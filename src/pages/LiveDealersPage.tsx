import React from "react";
import SearchBar from "../components/SearchBar";
import ProviderDropdown from "../components/ProviderDropdown";
import CategorySelector from "../components/CategorySelector";
import GameCard from "../components/GameCard";
import BannerSwiper from "../components/BannerSwiper";
import { liveDealerGames } from "../data/games";
import { banners } from "../data/banners";
import { useTranslation } from "react-i18next";

const LiveDealersPage: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className="pb-20">
			<BannerSwiper banners={banners} />
			<SearchBar />
			<ProviderDropdown />
			<CategorySelector currentCategory="live-dealers" />

			<div className="px-3 mt-6">
				<div className="text-center text-white mb-8">
					<h2 className="text-3xl font-bold mb-4">
						{t("liveDealers")}
					</h2>
					<p className="text-white/70 text-lg">
						{t("liveDealersDescription")}
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4">
					{liveDealerGames.map((game) => (
						<GameCard key={game.id} game={game} />
					))}
				</div>
			</div>
		</div>
	);
};

export default LiveDealersPage;
