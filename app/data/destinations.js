// app/data/destinations.js - Current State with Precise CMS Integration Notes
export const destinations = [
  {
    id: 13,
    title: 'Kenya', // HARDCODED - will be CMS
    type: 'savannah', // HARDCODED - will be CMS
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.6), rgba(251, 146, 60, 0.6))', // HARDCODED - will be CMS
    description: 'Endless plains and incredible wildlife in the heart of East Africa', // HARDCODED - used as fallback
    heroImage: '/safari.3.jpg', // HARDCODED - will be CMS
    
    // CMS-Ready Content Structure (CURRENTLY HARDCODED)
    content: {
      overview: {
        // CMS INTEGRATION: Used in DetailView hero overlay text
        heroDescription: 'From the endless savannahs of the Maasai Mara to the pristine beaches of the Swahili coast, Kenya offers unparalleled diversity.',
        
        // CMS INTEGRATION: Used in DetailView description glass box
        description: 'Kenya stands as one of Africa\'s premier safari destinations, offering everything from the Great Migration spectacle to intimate cultural encounters with the Maasai people. From sweeping savannahs to quiet coastlines, Kenya offers big game safaris, private conservancies, rich Swahili culture, and fly-in access to remote, luxury camps.'
      },
      
      // FUTURE CMS - Not implemented yet
      experiences: {
        description: null // TBC when Experiences tab is designed
      },
      properties: {
        description: null, // TBC when Properties tab is designed
        items: [] // TBC when Properties tab is designed
      },
      locations: {
        description: null, // TBC when Locations tab is designed
        items: [] // TBC when Locations tab is designed
      }
    }
  },
  
  {
    id: 14,
    title: 'Tanzania', // HARDCODED - will be CMS
    type: 'savannah', // HARDCODED - will be CMS
    gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.6), rgba(5, 150, 105, 0.6))', // HARDCODED - will be CMS
    description: 'Serengeti plains and Ngorongoro Crater adventures', // HARDCODED - used as fallback
    heroImage: '/safari.4.jpg', // HARDCODED - will be CMS
    
    content: {
      overview: {
        // CMS INTEGRATION: Used in DetailView hero overlay text
        heroDescription: 'Home to the iconic Serengeti and the magnificent Ngorongoro Crater, Tanzania offers legendary safari experiences.',
        
        // CMS INTEGRATION: Used in DetailView description glass box
        description: 'Tanzania encompasses the heart of East Africa\'s wildlife kingdom with unmatched wildlife densities and dramatic landscapes. The Serengeti ecosystem supports the world\'s largest terrestrial mammal migration.'
      },
      
      // FUTURE CMS - Not implemented yet
      experiences: {
        description: null
      },
      properties: {
        description: null,
        items: []
      },
      locations: {
        description: null,
        items: []
      }
    }
  }
];

/* 
=== CURRENT CMS INTEGRATION STATUS ===

✅ CURRENTLY CMS-DRIVEN (in DetailView.js):
- experience.content.overview.heroDescription (hero overlay text)
- experience.content.overview.description (description glass box)

🔲 HARDCODED (will be CMS when ready):
- experience.title
- experience.type
- experience.gradient
- experience.heroImage
- experience.description (fallback only)

🔲 NOT IMPLEMENTED YET (TBC when designing each tab):
- experiences content
- properties content  
- locations content

=== CMS INTEGRATION POINTS IN COMPONENTS ===

In DetailView.js Overview section:
1. Hero overlay text: {experience.content?.overview?.heroDescription || experience.description}
2. Description box: {experience.content?.overview?.description || fallback}

When other tabs are designed, they'll follow this pattern:
- experience.content.experiences.description
- experience.content.properties.description
- experience.content.properties.items
- experience.content.locations.description
- experience.content.locations.items

=== FUTURE CMS SETUP ===

When implementing full CMS (Strapi/Contentful/Sanity):

// utils/cms.js
export async function getDestination(slug) {
  try {
    const response = await fetch(`${process.env.CMS_API_URL}/destinations/${slug}?populate=*`);
    return await response.json();
  } catch (error) {
    console.error('CMS fetch error:', error);
    return null;
  }
}

// In component:
const cmsDestination = await getDestination('kenya');
// This will replace the hardcoded destinations array

=== CMS CONTENT MODEL (for future reference) ===

Destination Content Type:
- title (text)
- slug (text) 
- type (select: savannah/sea)
- gradient (text)
- heroImage (media)
- description (text - fallback)
- content (component):
  - overview (component):
    - heroDescription (rich text)
    - description (rich text)
  - experiences (component):
    - description (rich text)
  - properties (component):
    - description (rich text)
    - items (repeatable component)
  - locations (component):
    - description (rich text) 
    - items (repeatable component)
*/