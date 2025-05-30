import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
	ArrowLeft,
	DollarSign,
	CreditCard,
	Wallet,
	TrendingUp,
} from "lucide-react";

const BalancePage: React.FC = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const [amount, setAmount] = useState<string>("");

	// Mock data - in real app this would come from API or context
	const balance = "54656.78";

	const handleDeposit = () => {
		alert(t("depositNotAvailable"));
	};

	const predefinedAmounts = [100, 500, 1000, 5000, 10000];

	return (
		<div className="pb-20 min-h-screen">
			<div className="p-4 flex items-center border-b border-[#2C3467]">
				<button
					className="card-dark p-3 rounded-full mr-4 hover:scale-105 transition-transform duration-200"
					onClick={() => navigate(-1)}
				>
					<ArrowLeft size={20} />
				</button>
				<h1 className="text-2xl font-bold">{t("balance")}</h1>
			</div>

			<div className="px-4 py-6">
				<div className="balance-card mb-6 relative overflow-hidden">
					<div className="absolute top-0 right-0 w-20 h-20 bg-[#4FC824]/10 rounded-full -translate-y-5 translate-x-5" />
					<div className="absolute bottom-0 left-0 w-16 h-16 bg-[#5068d8]/10 rounded-full translate-y-5 -translate-x-5" />

					<div className="relative z-10">
						<p className="text-white/60 mb-2 font-medium">
							{t("currentBalance")}
						</p>
						<div className="flex items-center mb-4">
							<div className="bg-[#4FC824] rounded-full p-2 mr-3">
								<DollarSign size={20} className="text-white" />
							</div>
							<span className="text-4xl font-bold text-white">
								${balance}
							</span>
						</div>
						<div className="flex items-center text-[#4FC824] text-sm">
							<TrendingUp size={16} className="mr-1" />
							<span>+12.5% this month</span>
						</div>
					</div>
				</div>

				<div className="card-dark">
					<h2 className="text-2xl font-bold mb-6 text-center">
						{t("deposit")}
					</h2>

					<div className="mb-6">
						<label className="block mb-3 text-white/80 font-medium">
							{t("amount")}
						</label>
						<div className="relative">
							<DollarSign
								size={18}
								className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4FC824]"
							/>
							<input
								type="number"
								className="input-dark w-full h-14 pl-12 pr-4 text-lg font-semibold"
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
								placeholder="0.00"
							/>
						</div>
					</div>

					<div className="grid grid-cols-3 gap-3 mb-6">
						{predefinedAmounts.map((amt) => (
							<button
								key={amt}
								className={`py-3 rounded-xl font-semibold transition-all duration-200 ${
									amount === amt.toString()
										? "bg-[#5068d8] text-white shadow-lg"
										: "bg-[#171B35] text-white/70 hover:bg-[#2a305b] hover:text-white"
								}`}
								onClick={() => setAmount(amt.toString())}
							>
								${amt}
							</button>
						))}
					</div>

					<div className="space-y-3">
						<button
							className="btn-primary w-full py-4 text-lg font-semibold flex items-center justify-center gap-3"
							onClick={handleDeposit}
						>
							<CreditCard size={20} />
							{t("cardDeposit")}
						</button>

						<button
							className="card-dark w-full py-4 text-lg font-semibold flex items-center justify-center gap-3 bg-[#171B35] hover:bg-[#2a305b] transition-all duration-200"
							onClick={handleDeposit}
						>
							<Wallet size={20} />
							{t("cryptoDeposit")}
						</button>
					</div>

					<div className="mt-6 p-4 bg-[#171B35] rounded-xl">
						<p className="text-white/60 text-sm text-center">
							<span className="text-[#4FC824] font-semibold">
								Instant deposits
							</span>{" "}
							•<span className="ml-1">Secure payments</span> •
							<span className="ml-1">24/7 support</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BalancePage;
