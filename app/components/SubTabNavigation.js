"use client";

const SubTabNavigation = ({ activeTab, onTabChange, tabs }) => {
  return (
    <div className="flex items-center gap-8">
      {tabs.map((tab) => (
        <button 
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`text-base font-medium transition-all duration-300 ${
            activeTab === tab.id 
              ? 'text-[#CBD5FF]' 
              : 'text-white/60 hover:text-white/80'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default SubTabNavigation;