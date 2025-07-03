"use client";

import CardComponent from './CardComponent';

const CardGrid = ({ 
  cards, 
  selectedCards, 
  hoveredCard, 
  onCardToggle, 
  onCardExplore, 
  onCardHover 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6">
      {cards.map((card) => (
        <CardComponent
          key={card.id}
          card={card}
          isSelected={selectedCards.has(card.id)}
          isHovered={hoveredCard === card.id}
          onToggle={onCardToggle}
          onExplore={onCardExplore}
          onHover={onCardHover}
        />
      ))}
    </div>
  );
};

export default CardGrid;