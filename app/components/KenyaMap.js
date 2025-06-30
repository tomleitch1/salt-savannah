"use client"

import React, { useEffect, useRef, useState } from 'react';

const KenyaMap = () => {
  const mapRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !mapRef.current) return;
    
    const initializeMap = async () => {
      try {
        // Wait for the container to be properly sized
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Check if container exists and has dimensions
        if (!mapRef.current || mapRef.current.offsetWidth === 0) {
          setTimeout(initializeMap, 500);
          return;
        }

        // Dynamic import of Leaflet
        const L = (await import('leaflet')).default;
        
        // Load CSS if not already loaded
        if (!document.querySelector('link[href*="leaflet.css"]')) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
          document.head.appendChild(link);
          await new Promise(resolve => setTimeout(resolve, 200));
        }
        
        // Fix for default markers in Next.js
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

        // Initialize map
        const map = L.map(mapRef.current, {
          zoomControl: false,
          preferCanvas: true
        }).setView([-1.2921, 36.8219], 6);

        // Add zoom control
        L.control.zoom({
          position: 'bottomright'
        }).addTo(map);

        // Beautiful tiles
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '© CARTO',
          maxZoom: 20,
          detectRetina: true
        }).addTo(map);

        // Kenya border highlight
        const kenyaBorder = [
          [[-1.0, 33.9], [-1.0, 41.9], [4.6, 41.9], [4.6, 33.9], [-1.0, 33.9]]
        ];

        L.polygon(kenyaBorder, {
          color: '#FAE1D8',
          weight: 3,
          opacity: 0.8,
          fillColor: '#FAE1D8',
          fillOpacity: 0.1
        }).addTo(map);

        // Safari locations
        const safariLocations = [
          {
            name: "Maasai Mara National Reserve",
            coords: [-1.4061, 35.0084],
            icon: "🦁",
            type: "savannah",
            description: "World-famous for the Great Migration. Witness millions of wildebeest and zebras crossing the Mara River.",
            experiences: ["Hot Air Balloons", "Luxury Camps", "Great Migration", "Maasai Culture"]
          },
          {
            name: "Amboseli National Park", 
            coords: [-2.6527, 37.2606],
            icon: "🐘",
            type: "savannah",
            description: "Stunning views of Mount Kilimanjaro with large elephant herds roaming acacia woodlands.",
            experiences: ["Kilimanjaro Views", "Elephant Herds", "Cultural Visits", "Photography"]
          },
          {
            name: "Diani Beach",
            coords: [-4.3194, 39.5781],
            icon: "🏖️",
            type: "sea",
            description: "Pristine white sand beaches with turquoise waters, perfect for post-safari relaxation.",
            experiences: ["White Sand Beaches", "Coral Reefs", "Swahili Culture", "Marine Life"]
          },
          {
            name: "Samburu National Reserve",
            coords: [0.5692, 37.5342],
            icon: "🦒",
            type: "savannah",
            description: "Semi-arid landscape with unique wildlife species found nowhere else in Kenya.",
            experiences: ["Unique Wildlife", "Cultural Immersion", "River Safari", "Traditional Dances"]
          },
          {
            name: "Tsavo East & West",
            coords: [-2.9833, 38.4167],
            icon: "🦏",
            type: "savannah",
            description: "Kenya's largest national park, famous for red elephants and diverse landscapes.",
            experiences: ["Red Elephants", "Historic Sites", "Wilderness", "Reptiles"]
          },
          {
            name: "Lamu Island",
            coords: [-2.2717, 40.9021],
            icon: "🏛️",
            type: "sea",
            description: "UNESCO World Heritage site with well-preserved Swahili architecture and culture.",
            experiences: ["Historic Architecture", "Dhow Sailing", "Pristine Beaches", "Swahili Culture"]
          },
          {
            name: "Malindi Marine Park",
            coords: [-3.2194, 40.1181],
            icon: "🐠",
            type: "sea",
            description: "Spectacular coral reefs and marine life sanctuary on Kenya's coast.",
            experiences: ["Snorkeling", "Coral Gardens", "Marine Life", "Beach Resorts"]
          }
        ];

        const markers = [];

        // Add markers with subtle animations
        safariLocations.forEach(location => {
          const marker = L.marker(location.coords, {
            icon: L.divIcon({
              className: 'safari-marker',
              html: `<div class="marker-icon" style="
                background: rgba(250, 225, 216, 0.95);
                border: 3px solid white;
                border-radius: 50%;
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                font-weight: bold;
                color: #1F0709;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
                cursor: pointer;
                transition: all 0.3s ease;
              ">${location.icon}</div>`,
              iconSize: [32, 32],
              iconAnchor: [16, 16]
            })
          }).addTo(map);

          marker.locationType = location.type;
          markers.push(marker);

          // Dark glass morphism popup - your original beautiful style
          const popupContent = `
            <div style="min-width: 280px; padding: 12px; font-family: 'Inter', sans-serif;">
              <h3 style="margin: 0 0 12px 0; color: white; font-size: 16px; font-weight: 700;">${location.name}</h3>
              <p style="margin: 0 0 15px 0; line-height: 1.5; font-size: 13px; opacity: 0.9; color: white;">${location.description}</p>
              <div style="margin-bottom: 15px;">
                <h4 style="margin: 0 0 8px 0; color: rgba(255, 255, 255, 0.8); font-size: 12px; font-weight: 600;">Experiences</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                  ${location.experiences.map(exp => `<span style="background: rgba(255, 255, 255, 0.15); padding: 3px 8px; border-radius: 6px; font-size: 10px; font-weight: 500; color: white;">${exp}</span>`).join('')}
                </div>
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="popup-btn explore-btn" style="
                  flex: 1; 
                  background: rgba(203, 213, 255, 0.1); 
                  border: 1px solid rgba(203, 213, 255, 0.3); 
                  border-radius: 8px; 
                  padding: 8px 12px; 
                  color: white; 
                  font-weight: 500; 
                  cursor: pointer; 
                  font-size: 11px;
                  transition: all 0.3s ease;
                  backdrop-filter: blur(10px);
                ">
                  🔍 Explore More
                </button>
                <button class="popup-btn board-btn" style="
                  flex: 1; 
                  background: rgba(250, 225, 216, 0.1); 
                  border: 1px solid rgba(250, 225, 216, 0.3); 
                  border-radius: 8px; 
                  padding: 8px 12px; 
                  color: white; 
                  font-weight: 500; 
                  cursor: pointer; 
                  font-size: 11px;
                  transition: all 0.3s ease;
                  backdrop-filter: blur(10px);
                ">
                  ❤️ Add to Board
                </button>
              </div>
            </div>
          `;

          marker.bindPopup(popupContent, {
            maxWidth: 320,
            className: 'luxury-popup',
            autoPan: false,
            autoClose: true, // This will close other popups when a new one opens
            closeOnClick: false
          });

          // Positioning for lower placement
          marker.on('popupopen', function(e) {
            // Close any other open popups first
            map.eachLayer(function(layer) {
              if (layer.getPopup && layer.getPopup() && layer !== e.target) {
                layer.closePopup();
              }
            });

            setTimeout(() => {
              const map = e.target._map;
              const markerLatLng = e.target.getLatLng();
              
              // Get current view bounds
              const bounds = map.getBounds();
              const mapHeight = bounds.getNorth() - bounds.getSouth();
              
              // Move marker UP more so popup appears much LOWER
              const offsetLat = mapHeight * 0.4; // Increased from 0.25 to 0.4 for much lower positioning
              const targetLat = markerLatLng.lat + offsetLat;
              
              // Direct movement to lower position
              map.setView([targetLat, markerLatLng.lng], map.getZoom(), {
                animate: true,
                duration: 0.5
              });
            }, 100);
          });
        });

        // Force map to resize properly
        setTimeout(() => {
          map.invalidateSize();
        }, 100);

        setMapInstance({ map, markers });
        setIsLoaded(true);
        
      } catch (error) {
        console.error('Map initialization error:', error);
        setTimeout(initializeMap, 1000);
      }
    };

    initializeMap();

    // Cleanup
    return () => {
      if (mapInstance && mapInstance.map) {
        mapInstance.map.remove();
      }
    };
  }, [isClient]);

  // Filter function with smooth panning
  const handleFilterChange = (filterType) => {
    setActiveFilter(filterType);
    
    if (!mapInstance) return;
    
    const { map, markers } = mapInstance;
    
    if (filterType === 'all') {
      markers.forEach(marker => marker.addTo(map));
      map.setView([-1.2921, 36.8219], 6);
    } else if (filterType === 'savannah') {
      markers.forEach(marker => {
        if (marker.locationType === 'savannah') {
          marker.addTo(map);
        } else {
          map.removeLayer(marker);
        }
      });
      map.setView([-1.0, 36.0], 7);
    } else if (filterType === 'sea') {
      markers.forEach(marker => {
        if (marker.locationType === 'sea') {
          marker.addTo(map);
        } else {
          map.removeLayer(marker);
        }
      });
      map.setView([-3.0, 40.0], 7);
    }
  };

  // Don't render until client-side
  if (!isClient) {
    return (
      <div className="w-full h-96 rounded-2xl overflow-hidden relative bg-black/25 backdrop-blur-sm border border-white/15">
        <div className="flex items-center justify-center h-full text-white">
          <div>Loading map...</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="w-full h-96 rounded-2xl overflow-hidden relative"
      style={{
        background: 'rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* Header */}
      <div className="absolute top-3 left-3 z-[1000]">
        <div 
          className="px-4 py-2 rounded-xl text-white font-semibold text-sm"
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          Locations
        </div>
      </div>

      {/* Filter Controls */}
      <div className="absolute top-3 right-3 z-[1000]">
        <div 
          className="flex items-center rounded-xl p-1"
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          {[
            { key: 'all', icon: '🌍', label: 'All' },
            { key: 'savannah', icon: '🌾', label: 'Savannah' },
            { key: 'sea', icon: '🌊', label: 'Sea' }
          ].map(filter => (
            <button
              key={filter.key}
              onClick={() => handleFilterChange(filter.key)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.key 
                  ? 'text-white shadow-lg' 
                  : 'text-white/60 hover:text-white/80'
              }`}
              style={{
                background: activeFilter === filter.key 
                  ? (filter.key === 'savannah' ? 'rgba(34, 197, 94, 0.3)' : 
                     filter.key === 'sea' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(255, 255, 255, 0.2)') 
                  : 'transparent',
                boxShadow: activeFilter === filter.key 
                  ? '0 4px 12px rgba(0, 0, 0, 0.2)' 
                  : 'none',
              }}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white z-[999]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
            <div>Loading luxury map...</div>
          </div>
        </div>
      )}

      {/* Map container */}
      <div 
        ref={mapRef} 
        className="w-full h-full"
        style={{ minHeight: '320px' }}
      />

      {/* Your original beautiful dark glass morphism styles */}
      <style jsx global>{`
        .leaflet-popup-content-wrapper {
          background: rgba(0, 0, 0, 0.8) !important;
          backdrop-filter: blur(20px) !important;
          border-radius: 16px !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5) !important;
        }
        
        .leaflet-popup-content {
          color: white !important;
          margin: 8px !important;
        }
        
        .leaflet-popup-tip {
          background: rgba(0, 0, 0, 0.8) !important;
        }

        .marker-icon:hover {
          transform: scale(1.2) !important;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6) !important;
        }

        .popup-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
        }

        .explore-btn:hover {
          background: rgba(203, 213, 255, 0.2) !important;
          border-color: rgba(203, 213, 255, 0.5) !important;
        }

        .board-btn:hover {
          background: rgba(250, 225, 216, 0.2) !important;
          border-color: rgba(250, 225, 216, 0.5) !important;
        }
      `}</style>
    </div>
  );
};

export default KenyaMap;