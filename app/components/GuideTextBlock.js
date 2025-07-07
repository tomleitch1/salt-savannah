"use client";

import React, { useState } from 'react';

const GuideTextBlock = ({ section }) => {
  const content = section.content || {};
  const tabs = content.tabs || [];
  const [activeTab, setActiveTab] = useState(tabs.length > 0 ? tabs[0].id : '');

  // Fallback to old structure if no tabs
  if (!tabs.length) {
    const sections = content.sections || [];
    const downloadLinks = content.downloadLinks || [];

    return (
      <div className="space-y-6">
        {/* Main Introduction */}
        <div className="space-y-4">
          <p className="text-[#FAE1D8]/90 leading-relaxed text-base">
            {section.detail}
          </p>
        </div>

        {/* Old CMS-Driven Content Sections */}
        {sections.map((contentSection, index) => (
          <div key={index}>
            <h4 className="text-[#FAE1D8] text-lg font-semibold mb-4">{contentSection.title}</h4>
            
            {contentSection.description && (
              <p className="text-[#FAE1D8]/80 text-sm mb-4 leading-relaxed">
                {contentSection.description}
              </p>
            )}
            
            <div 
              className="p-4 rounded-2xl mb-4"
              style={{
                background: 'rgba(0, 0, 0, 0.25)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(250, 225, 216, 0.1)'
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contentSection.items && contentSection.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3 text-sm text-[#FAE1D8]/80">
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-[#FAE1D8] mb-1">{item.title}</div>
                      <div className="text-xs leading-relaxed">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Download Links Section */}
        {downloadLinks.length > 0 && (
          <div>
            <h4 className="text-[#FAE1D8] text-lg font-semibold mb-4">Download Resources</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {downloadLinks.map((download, index) => (
                <button 
                  key={index}
                  className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-left"
                  style={{
                    background: 'rgba(203, 213, 255, 0.2)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(203, 213, 255, 0.3)',
                  }}
                  onClick={() => download.url && window.open(download.url, '_blank')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">📖</span>
                      <div>
                        <div className="text-[#FAE1D8] font-semibold">{download.title}</div>
                        <div className="text-[#FAE1D8]/60 text-xs">{download.size}</div>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-[#FAE1D8]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m-4-4V3" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'rgba(250, 225, 216, 0.2)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(250, 225, 216, 0.3)',
            }}
          >
            <div className="flex items-center justify-center gap-2 text-[#FAE1D8]">
              <span>💬</span>
              <span>Ask an Expert</span>
            </div>
          </button>
          
          <button 
            className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'rgba(203, 213, 255, 0.2)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(203, 213, 255, 0.3)',
            }}
          >
            <div className="flex items-center justify-center gap-2 text-[#FAE1D8]">
              <span>📧</span>
              <span>Email This Guide</span>
            </div>
          </button>
        </div>
      </div>
    );
  }

  // New tabbed interface
  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  const renderBlock = (block, index) => {
    switch (block.type) {
      case 'text':
        return (
          <div key={index} className="space-y-3">
            {block.title && (
              <h4 className="text-[#FAE1D8] text-lg font-semibold">{block.title}</h4>
            )}
            <p className="text-[#FAE1D8]/90 leading-relaxed text-sm">
              {block.content}
            </p>
          </div>
        );

      case 'image':
        return (
          <div key={index} className="space-y-3">
            <div 
              className={`rounded-2xl overflow-hidden ${
                block.size === 'large' ? 'h-48 md:h-64' : 
                block.size === 'medium' ? 'h-32 md:h-40' : 'h-24 md:h-32'
              }`}
              style={{
                backgroundImage: `url(${block.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="w-full h-full bg-black/20 flex items-end p-4">
                <div className="text-[#FAE1D8]/60 text-xs">📸 {block.caption}</div>
              </div>
            </div>
          </div>
        );

      case 'list':
        return (
          <div key={index} className="space-y-3">
            {block.title && (
              <h4 className="text-[#FAE1D8] text-lg font-semibold">{block.title}</h4>
            )}
            <div 
              className="p-4 rounded-2xl"
              style={{
                background: 'rgba(0, 0, 0, 0.25)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(250, 225, 216, 0.1)'
              }}
            >
              <ul className="space-y-2">
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-sm text-[#FAE1D8]/80">
                    <span className="text-[#CBD5FF] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Custom CSS for hiding scrollbars */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {/* Tab Navigation */}
      <div className="relative overflow-hidden">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-3 pt-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex-shrink-0 whitespace-nowrap hover:scale-[1.02] ${
                activeTab === tab.id 
                  ? 'text-white' 
                  : 'text-white/80 hover:text-white'
              }`}
              style={{
                background: activeTab === tab.id 
                  ? 'linear-gradient(135deg, rgba(203, 213, 255, 0.4), rgba(147, 197, 253, 0.3))'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1))',
                boxShadow: activeTab === tab.id 
                  ? '0 2px 8px rgba(203, 213, 255, 0.15)' 
                  : '0 1px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                minWidth: 'fit-content'
              }}
            >
              <span className="text-base flex-shrink-0">{tab.icon}</span>
              <span className="text-sm font-medium">{tab.title}</span>
            </button>
          ))}
          {/* Spacer to ensure fade effect works properly */}
          <div className="w-8 flex-shrink-0" />
        </div>
        {/* Fade out gradient mask - matches tab height only */}
        <div 
          className="absolute top-1 right-0 w-16 pointer-events-none"
          style={{
            height: '40px', // Matches the tab height (py-2 + text height)
            background: 'linear-gradient(to right, transparent 0%, transparent 30%, rgba(0, 0, 0, 0.05) 60%, rgba(0, 0, 0, 0.15) 80%, rgba(0, 0, 0, 0.3) 90%, rgba(0, 0, 0, 0.25) 100%)'
          }}
        />
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {currentTab.blocks.map((block, index) => renderBlock(block, index))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button 
          className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{
            background: 'rgba(250, 225, 216, 0.2)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(250, 225, 216, 0.3)',
          }}
        >
          <div className="flex items-center justify-center gap-2 text-[#FAE1D8]">
            <span>💬</span>
            <span>Ask an Expert</span>
          </div>
        </button>
        
        <button 
          className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{
            background: 'rgba(203, 213, 255, 0.2)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(203, 213, 255, 0.3)',
          }}
        >
          <div className="flex items-center justify-center gap-2 text-[#FAE1D8]">
            <span>📧</span>
            <span>Email This Guide</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default GuideTextBlock;