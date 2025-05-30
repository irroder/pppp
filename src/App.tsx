import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ModalMenu from "./components/ModalMenu";
import HomePage from "./pages/HomePage";
import LiveDealersPage from "./pages/LiveDealersPage";
import SearchPage from "./pages/SearchPage";
import ProviderPage from "./pages/ProviderPage";
import ProfilePage from "./pages/ProfilePage";
import BalancePage from "./pages/BalancePage";

function App() {
	return (
		<div className="w-full min-h-screen bg-[#171B35] relative">
			<Header />
			<main className="pb-24">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/livedealers" element={<LiveDealersPage />} />
					<Route path="/search/:query" element={<SearchPage />} />
					<Route path="/provider/:id" element={<ProviderPage />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="/balance" element={<BalancePage />} />
				</Routes>
			</main>
			<ModalMenu isOpen={true} onClose={() => {}} />
		</div>
	);
}

export default App;
