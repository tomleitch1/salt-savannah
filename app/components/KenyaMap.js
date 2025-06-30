"use client"

import React, { useEffect, useRef } from 'react';

const KenyaMap = ({ className = "" }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Only initialize map if we're in the browser and the container exists
    if (typeof window !== 'undefined' && mapRef.current) {
      initializeMap();
    }
  }, []);

  const initializeMap = () => {
    // Initialize the map centered on Kenya
    const map = L.map(mapRef.current, {
      zoomControl: false
    }).setView([-1.2921, 36.8219], 6);

    // Add custom zoom control
    L.control.zoom({
      position: 'bottomright'
    }).addTo(map);

    // Premium tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '© CARTO',
      maxZoom: 20,
      detectRetina: true
    }).addTo(map);

    // Country borders - Kenya highlight
    const kenyaBorder = [
      [[-1.0, 33.9], [-1.0, 41.9], [4.6, 41.9], [4.6, 33.9], [-1.0, 33.9]]
    ];

    L.polygon(kenyaBorder, {
      color: '#FAE1D8',
      weight: 3,
      opacity: 1,
      fillColor: '#FAE1D8',
      fillOpacity: 0.1
    }).addTo(map);

    // Safari locations
    const safariLocations = [
      {
        name: "Maasai Mara National Reserve",
        coords: [-1.4061, 35.0084],
        icon: "🦁",
        description: "World-famous for the Great Migration"
      },
      {
        name: "Amboseli National Park", 
        coords: [-2.6527, 37.2606],
        icon: "🐘",
        description: "Stunning views of Mount Kilimanjaro"
      },
      {
        name: "Diani Beach",
        coords: [-4.3194, 39.5781],
        icon: "🏖️",
        description: "Pristine white sand beaches"
      },
      {
        name: "Samburu National Reserve",
        coords: [0.5692, 37.5342],
        icon: "🦒",
        description: "Unique wildlife species"
      }
    ];

    // Add markers
    safariLocations.forEach(location => {
      const marker = L.marker(location.coords, {
        icon: L.divIcon({
          className: 'safari-marker',
          html: location.icon,
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        })
      }).addTo(map);

      const popupContent = `
        <div style="min-width: 200px; padding: 5px;">
          <h3 style="margin: 0 0 8px 0; color: white; font-size: 16px; font-weight: 600;">${location.name}</h3>
          <p style="margin: 0; line-height: 1.4; font-size: 13px; opacity: 0.9;">${location.description}</p>
        </div>
      `;

      marker.bindPopup(popupContent, {
        maxWidth: 250,
        className: 'luxury-popup'
      });
    });
  };

  return (
    <>
      {/* Load Leaflet CSS and JS */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js"></script>
      
      {/* Map Styles */}
      <style jsx>{`
        .map-container {
          position: relative;
          height: 400px;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .map-header {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .map-title {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(20px);
          padding: 8px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-weight: 600;
          font-size: 14px;
        }

        .safari-marker {
          background: rgba(250, 225, 216, 0.95);
          border: 3px solid white;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: bold;
          color: #1F0709;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .safari-marker:hover {
          transform: scale(1.2);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }

        :global(.leaflet-popup-content-wrapper) {
          background: rgba(0, 0, 0, 0.7) !important;
          backdrop-filter: blur(20px);
          border-radius: 16px !important;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        :global(.leaflet-popup-content) {
          color: white !important;
          font-family: 'Inter', sans-serif !important;
          margin: 12px !important;
        }

        :global(.leaflet-popup-tip) {
          background: rgba(0, 0, 0, 0.7) !important;
        }
      `}</style>

      <div className={`map-container ${className}`}>
        <div className="map-header">
          <div className="map-title">Kenya Safari Regions</div>
        </div>
        <div 
          ref={mapRef} 
          style={{ height: '100%', width: '100%', borderRadius: '20px' }}
        />
      </div>
    </>
  );
};

export default KenyaMap;