"use client";

const DetailHeader = ({ 
  title, 
  onBack, 
  filterType, 
  onFilterChange,
  children 
}) => {
  return (
    <div className="flex-shrink-0 border-b border-white/10 p-4 lg:p-5 bg-black/20 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h3 className="text-white text-xl lg:text-2xl font-medium mb-3">{title}</h3>
            {children}
          </div>
          <div className="flex-1 h-px bg-white/20 ml-4"></div>
        </div>
        <div 
          className="flex items-center rounded-2xl p-1 transition-all duration-300"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {['all', 'savannah', 'sea'].map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                filterType === filter 
                  ? 'text-white shadow-lg' 
                  : 'text-white/60 hover:text-white/80'
              }`}
              style={{
                background: filterType === filter 
                  ? 'rgba(203, 213, 255, 0.2)' 
                  : 'transparent',
                boxShadow: filterType === filter 
                  ? '0 4px 12px rgba(203, 213, 255, 0.2)' 
                  : 'none',
              }}
            >
              {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailHeader;