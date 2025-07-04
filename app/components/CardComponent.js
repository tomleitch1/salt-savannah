"use client";

const CardComponent = ({ 
  card, 
  isSelected, 
  isHovered, 
  onToggle, 
  onExplore, 
  onHover 
}) => {
  // Add the animation CSS
  const animationCSS = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-in-slow {
      animation: fadeIn 0.6s ease-out;
    }
    .slide-in-slow {
      animation: slideUp 0.6s ease-out;
      animation-delay: 0.2s;
      animation-fill-mode: both;
    }
  `;

  // FIXED: Use heroImage if available, otherwise fall back to gradient
  const cardStyle = card.heroImage 
    ? {
        backgroundImage: `url(${card.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {
        background: card.gradient
      };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: animationCSS }} />
      <div 
        className={`relative overflow-hidden rounded-2xl h-48 md:h-56 lg:h-52 xl:h-56 2xl:h-64 cursor-pointer transition-all duration-300 ${
          isSelected ? 'ring-4 ring-[#CBD5FF] ring-opacity-60 scale-[1.02] shadow-2xl' : 'hover:scale-[1.02]'
        }`}
        style={cardStyle}
        onClick={() => onToggle(card.id)}
        onMouseEnter={() => onHover(card.id)}
        onMouseLeave={() => onHover(null)}
      >
        {/* Gradient overlay for better text readability - stronger at bottom */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6) 100%)'
          }}
        ></div>
        
        {isSelected && (
          <div 
            className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold animate-pulse"
            style={{
              background: 'rgba(203, 213, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 12px rgba(203, 213, 255, 0.4)',
            }}
          >
            ✓
          </div>
        )}
        
        <div className="absolute bottom-4 left-4 right-4">
          <h4 className="text-white text-lg md:text-xl font-semibold mb-2">{card.title}</h4>
          
          {isHovered && (
            <div className="relative hover-content entering">
              <div 
                className="absolute -inset-x-2 -inset-y-1 rounded-lg fade-in-slow"
                style={{
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
                  backdropFilter: 'blur(8px)',
                }}
              />
              <div className="relative z-10">
                <p className="text-white/90 text-sm mb-3 leading-relaxed slide-in-slow">
                  {card.description}
                </p>
                <div className="flex gap-2 slide-in-slow">
                  <button 
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(15px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="text-red-400 text-sm">❤️</span>
                    <span className="text-white">Add to Board</span>
                  </button>
                  <button 
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(15px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onExplore(card);
                    }}
                  >
                    <img 
                      src="/staricon.png" 
                      alt="Star" 
                      className="w-3 h-3"
                      style={{ filter: 'brightness(0) saturate(100%) invert(89%) sepia(12%) saturate(678%) hue-rotate(316deg) brightness(99%) contrast(96%)' }}
                    />
                    <span className="text-white">Explore More</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CardComponent;