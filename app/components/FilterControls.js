"use client";

const FilterControls = ({ filterType, onFilterChange }) => {
  return (
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
            filterType === filter ? 'text-white shadow-lg' : 'text-white/60 hover:text-white/80'
          }`}
          style={{
            background: filterType === filter ? 'rgba(203, 213, 255, 0.2)' : 'transparent',
            boxShadow: filterType === filter ? '0 4px 12px rgba(203, 213, 255, 0.2)' : 'none',
          }}
        >
          {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterControls;