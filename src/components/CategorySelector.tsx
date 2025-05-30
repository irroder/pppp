import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface CategorySelectorProps {
	currentCategory: "slots" | "live-dealers";
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
	currentCategory,
}) => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<div className="mx-3 mt-3 flex rounded-xl overflow-hidden bg-[#2C3467]">
			<button
				className={`flex-1 py-3 px-4 font-semibold text-center transition-all duration-200 ${
					currentCategory === "slots"
						? "bg-[#5068d8] text-white shadow-lg"
						: "text-white/70 hover:text-white hover:bg-[#343b73]"
				}`}
				onClick={() => navigate("/")}
			>
				{t("slots")}
			</button>

			<button
				className={`flex-1 py-3 px-4 font-semibold text-center transition-all duration-200 ${
					currentCategory === "live-dealers"
						? "bg-[#5068d8] text-white shadow-lg"
						: "text-white/70 hover:text-white hover:bg-[#343b73]"
				}`}
				onClick={() => navigate("/livedealers")}
			>
				{t("liveDealers")}
			</button>
		</div>
	);
};

export default CategorySelector;
