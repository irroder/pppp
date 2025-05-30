const Preloader: React.FC = () => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-[9999] flex items-center justify-center bg-[#171B35]">
      <img 
        src="/img/logo.png" 
        alt="JoyPlay Logo" 
        className="max-w-[100px] h-auto animate-pulse"
        style={{ animation: 'pulse 1.5s infinite' }}
      />
    </div>
  );
};

export default Preloader;