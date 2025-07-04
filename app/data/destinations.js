export const destinations = [
  {
    id: 13,
    title: 'Kenya',
    type: 'savannah',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.6), rgba(251, 146, 60, 0.6))',
    description: 'Endless plains and incredible wildlife in the heart of East Africa',

    // Add this image field
     heroImage: '/safari.3.jpg',
    
    content: {
      overview: {
        heroDescription: 'From the endless savannahs of the Maasai Mara to the pristine beaches of the Swahili coast, Kenya offers unparalleled diversity.',
        mainDescription: 'Kenya stands as one of Africa\'s premier safari destinations, offering everything from the Great Migration spectacle to intimate cultural encounters with the Maasai people.',
        highlights: [
          'Witness the Great Migration in Maasai Mara',
          'Experience rich Maasai culture',
          'Access to luxury camps and lodges'
        ]
      }
    }
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
        mainDescription: 'Tanzania encompasses the heart of East Africa\'s wildlife kingdom with unmatched wildlife densities and dramatic landscapes.',
        highlights: [
          'Explore the vast Serengeti ecosystem',
          'Descend into Ngorongoro Crater',
          'Climb Mount Kilimanjaro'
        ]
      }
    }
  }
];