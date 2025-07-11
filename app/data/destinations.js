export const destinations = [
  {
    id: 13,
    title: 'Kenya',
    type: 'savannah',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.6), rgba(251, 146, 60, 0.6))',
    description: 'Endless plains and incredible wildlife in the heart of East Africa',
    heroImage: '/safari.3.jpg',
    
    content: {
      overview: {
        heroDescription: 'From the endless savannahs of the Maasai Mara to the pristine beaches of the Swahili coast, Kenya offers unparalleled diversity.',
        description: 'Kenya stands as one of Africa\'s premier safari destinations, offering everything from the Great Migration spectacle to intimate cultural encounters with the Maasai people. From sweeping savannahs to quiet coastlines, Kenya offers big game safaris, private conservancies, rich Swahili culture, and fly-in access to remote, luxury camps.',
        
        highlights: [
          {
            id: 1,
            title: 'Great Migration',
            description: 'Witness 2 million wildebeest cross the Mara River',
            image: '/migration2.jpg'
          },
          {
            id: 2,
            title: 'Private Conservancies',
            description: 'Exclusive access with no crowds, night drives',
            image: '/camp.3.jpg'
          },
          {
            id: 3,
            title: 'The Big 5',
            description: 'Great densities, fantastic encounters',
            image: '/big5.3.jpg'
          }
        ]
      },
      
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
    },

    // NEW: Add this highlights section
    highlightsSection: [
      {
        id: 1,
        title: "Private Conservancies",
        image: "/demopic.jpg",
        tags: ["Remote", "Night Drives"],
        description: "Experience exclusive access to Kenya's private conservancies with fewer crowds, freedom to off-road, and unique night safaris.",
        link: "/experiences/private-conservancies"
      },
      {
        id: 2,
        title: "The Great Migration",
        image: "/demopic.jpg",
        tags: ["Migration", "Iconic", "July–Oct"],
        description: "Witness one of nature's greatest spectacles as millions of wildebeest and zebra cross the Mara River in dramatic fashion.",
        link: "/experiences/great-migration"
      },
      {
        id: 3,
        title: "Swahili Coast",
        image: "/demopic.jpg",
        tags: ["Beach", "Culture", "Relaxation"],
        description: "Explore Kenya's coastal charm with turquoise waters, white-sand beaches, and vibrant Swahili heritage.",
        link: "/destinations/swahili-coast"
      }
    ]
  },
  
  {
    id: 14,
    title: 'Tanzania',
    type: 'savannah',
    gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.6), rgba(5, 150, 105, 0.6))',
    description: 'Serengeti plains and Ngorongoro Crater adventures',
    heroImage: '/safari.4.jpg',
    
    content: {
      overview: {
        heroDescription: 'Home to the iconic Serengeti and the magnificent Ngorongoro Crater, Tanzania offers legendary safari experiences.',
        description: 'Tanzania encompasses the heart of East Africa\'s wildlife kingdom with unmatched wildlife densities and dramatic landscapes. The Serengeti ecosystem supports the world\'s largest terrestrial mammal migration.',
        
        highlights: [
          {
            id: 1,
            title: 'Serengeti National Park',
            description: 'Endless plains teeming with wildlife year-round',
            image: '/safari.3.jpg'
          },
          {
            id: 2,
            title: 'Ngorongoro Crater',
            description: 'UNESCO World Heritage site with incredible density',
            image: '/safari.4.jpg'
          },
          {
            id: 3,
            title: 'Calving Season',
            description: 'Witness 500,000 wildebeest births in February',
            image: '/safari.2.jpg'
          }
        ]
      },
      
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