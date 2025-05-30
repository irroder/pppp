import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { providers } from "../data/providers";

const ProviderDropdown: React.FC = () => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="mx-3 mt-3 relative">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="card-dark w-full h-12 flex items-center justify-between px-4 text-white/70 font-semibold transition-all duration-200 hover:bg-[#343b73]"
			>
				<span className="flex items-center">
					<ChevronDown size={18} className="mr-3" />
					{t("providers")}
				</span>
			</button>

			{isOpen && (
				<div className="absolute top-full left-0 right-0 z-50 mt-1 card-dark max-h-48 overflow-y-auto">
					{providers.map((provider) => (
						<a
							key={provider.id}
							href={`/provider/${provider.id}`}
							className="block px-4 py-3 text-white hover:bg-[#3a4180] transition-colors duration-150 border-b border-white/5 last:border-b-0"
							onClick={() => setIsOpen(false)}
						>
							{provider.name}
						</a>
					))}
				</div>
			)}

			{isOpen && (
				<div
					className="fixed inset-0 z-40"
					onClick={() => setIsOpen(false)}
				/>
			)}
		</div>
	);
};

export default ProviderDropdown;
