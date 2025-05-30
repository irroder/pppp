import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";

interface SearchBarProps {
	onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (searchQuery.trim()) {
			if (onSearch) {
				onSearch(searchQuery.trim());
			} else {
				navigate(`/search/${searchQuery.trim()}`);
			}
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchQuery(value);
		if (onSearch) {
			onSearch(value);
		}
	};

	return (
		<div className="relative">
			<form onSubmit={handleSearch}>
				<div className="search-container">
					<Search size={18} className="search-icon" />
					<input
						type="text"
						value={searchQuery}
						onChange={handleInputChange}
						placeholder={t("search")}
						className="input-dark w-full h-12 pl-12 pr-4 text-white placeholder-white/50 font-medium"
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
