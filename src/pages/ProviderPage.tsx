import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { providers } from '../data/providers';
import { allGames } from '../data/games';
import GameCard from '../components/GameCard';

const ProviderPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  // Find provider details
  const provider = providers.find(p => p.id === id);
  
  // Filter games for this provider
  const providerGames = allGames.filter(game => 
    game.providerId === id || 
    (provider && game.provider.toLowerCase() === provider.name.toLowerCase())
  );

  if (!provider) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl mb-4">{t('providerNotFound')}</h2>
        <button 
          className="bg-[#5068d8] px-4 py-2 rounded-lg"
          onClick={() => navigate('/')}
        >
          {t('returnHome')}
        </button>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <div className="p-4 flex items-center">
        <button 
          className="bg-[#2C3467] p-2 rounded-full mr-3"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">{provider.name}</h1>
      </div>
      
      <div className="mx-3">
        {provider.description && (
          <p className="mb-4 opacity-80">{provider.description}</p>
        )}
        
        {providerGames.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {providerGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl font-medium">{t('noGamesFromProvider')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProviderPage;