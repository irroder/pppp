import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, CreditCard, Activity, Gift, MessageCircle } from 'lucide-react';

interface ModalMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalMenu: React.FC<ModalMenuProps> = ({ isOpen }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  if (!isOpen) {
    return null;
  }

  const menuItems = [
    { icon: <Menu size={24} />, label: t('menu'), onClick: () => console.log('Menu clicked') },
    { icon: <CreditCard size={24} />, label: t('casino'), onClick: () => navigate('/') },
    { icon: <Activity size={24} />, label: t('sport'), onClick: () => navigate('/sport') },
    { icon: <Gift size={24} />, label: t('earn'), onClick: () => navigate('/earn') },
    { icon: <MessageCircle size={24} />, label: t('chat'), onClick: () => navigate('/chat') },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[#2D2D3A] rounded-full py-2 px-4 flex justify-around items-center z-[1000] shadow-lg min-w-[300px] max-w-[400px] mx-auto">
      {menuItems.map((item, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center mx-2 cursor-pointer transition-all duration-200 hover:text-[#5068d8]"
          onClick={item.onClick}
        >
          <div className="mb-1">{item.icon}</div>
          <div className="text-xs font-medium">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default ModalMenu;