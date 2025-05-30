import React from "react";

interface Category {
	id: string;
	name: string;
	icon: string;
	count?: number;
}

interface CategoryNavProps {
	categories: Category[];
	activeCategory: string;
	onCategoryChange: (categoryId: string) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({
	categories,
	activeCategory,
	onCategoryChange,
}) => {
	return (
		<div className="px-3 py-2 mb-2">
			<div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
				{categories.map((category) => (
					<button
						key={category.id}
						onClick={() => onCategoryChange(category.id)}
						className={`
							flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 shadow-lg
							${
								activeCategory === category.id
									? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-blue-500/25 scale-105"
									: "bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-gray-700/25 hover:scale-102"
							}
						`}
					>
						<span className="text-base">{category.icon}</span>
						<span className="font-semibold">{category.name}</span>
						{category.count && (
							<span
								className={`text-xs px-2 py-0.5 rounded-full font-bold ${
									activeCategory === category.id
										? "bg-white/20 text-white"
										: "bg-gray-600 text-gray-200"
								}`}
							>
								{category.count}
							</span>
						)}
					</button>
				))}
			</div>
		</div>
	);
};

export default CategoryNav;
