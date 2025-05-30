import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Search, ArrowLeft } from 'lucide-react';
import { allGames } from '../data/games';
import GameCard from '../components/GameCard';

const SearchPage: React.FC = () => {
  const { query } = useParams<{ query: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  // Filter games based on search query
  const filteredGames = allGames.filter(
    (game) => 
      game.title.toLowerCase().includes((query || '').toLowerCase()) ||
      game.provider.toLowerCase().includes((query || '').toLowerCase())
  );

  return (
    <div className="pb-20">
      <div className="p-4 flex items-center">
        <button 
          className="bg-[#2C3467] p-2 rounded-full mr-3"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">{t('searchResults')}: "{query}"</h1>
      </div>
      
      <div className="mx-3">
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-xl font-medium">{t('noGamesFound')}</p>
            <p className="opacity-70">{t('tryDifferentSearch')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;