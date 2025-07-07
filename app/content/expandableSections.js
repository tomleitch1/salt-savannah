// DEBUG: Updated with tabs structure - v2
export const expandableSections = {
  kenya: [
    {
      id: 1,
      title: "Your Kenya Guide",
      type: "text",
      summary: "Plan your perfect journey with expert insight.",
      detail: "This comprehensive guide includes detailed information about Kenya's diverse regions, optimal seasonal timing, cultural etiquette, and sample itineraries crafted by our local experts. From the rolling plains of the Maasai Mara to the pristine beaches of the coast, discover everything you need to know for an unforgettable journey through Kenya.",
      coverImage: "/demopic.jpg",
      gradient: "linear-gradient(135deg, rgba(220, 38, 127, 0.3), rgba(159, 18, 57, 0.35))",
      content: {
        tabs: [
          {
            id: "planning",
            title: "Trip Planning",
            icon: "",
            blocks: [
              {
                type: "text",
                title: "When to Visit Kenya",
                content: "Kenya offers excellent wildlife viewing year-round, but timing can enhance your experience. The dry seasons (June-October and January-March) offer the best game viewing as animals concentrate around water sources."
              },
              {
                type: "image",
                src: "/demopic.jpg",
                caption: "Dry season wildlife gathering at water holes",
                size: "large"
              },
              {
                type: "text", 
                title: "Duration & Itinerary Planning",
                content: "We recommend a minimum of 7 days to experience Kenya's highlights. This allows time for 2-3 destinations with travel days. Popular combinations include Maasai Mara + Amboseli, or adding coastal relaxation in Diani Beach."
              },
              {
                type: "list",
                title: "Recommended Durations",
                items: [
                  "5-7 days: Single destination focus",
                  "8-10 days: Two destinations + travel",
                  "11-14 days: Multiple parks + coast",
                  "15+ days: Comprehensive Kenya experience"
                ]
              },
              {
                type: "list",
                title: "Your New List Title Here",
                items: [
                    "First item of your new list",
                    "Second item of your new list", 
                    "Third item of your new list",
                    "Fourth item if needed"
                ]
                }
            ]
          },
          {
            id: "regions",
            title: "Regions & Parks",
            icon: "",
            blocks: [
              {
                type: "text",
                title: "Northern Kenya",
                content: "Samburu, Buffalo Springs, and Shaba offer unique wildlife species found nowhere else in Kenya. The landscape is semi-arid with distinctive red earth, and you'll encounter the 'Samburu Special Five' including Grevy's zebra and reticulated giraffe."
              },
              {
                type: "image",
                src: "/demopic.jpg",
                caption: "Samburu's distinctive red earth landscape",
                size: "medium"
              },
              {
                type: "text",
                title: "Central Kenya",
                content: "The Maasai Mara is Kenya's crown jewel, famous for the Great Migration river crossings. Neighboring conservancies offer exclusive experiences with smaller crowds and night drives."
              },
              {
                type: "text",
                title: "Southern Kenya", 
                content: "Amboseli National Park offers stunning views of Mount Kilimanjaro and is renowned for its large elephant herds. Tsavo East and West form Kenya's largest protected ecosystem."
              }
            ]
          },
          {
            id: "culture",
            title: "Culture & Etiquette",
            icon: "",
            blocks: [
              {
                type: "text",
                title: "Meeting Local Communities",
                content: "Kenya is home to over 40 different ethnic groups, each with unique traditions. The Maasai are perhaps the most well-known, living in harmony with wildlife for centuries."
              },
              {
                type: "list",
                title: "Cultural Guidelines",
                items: [
                  "Always ask permission before photographing people",
                  "Dress modestly when visiting villages",
                  "Greet with 'Jambo' (Hello) and 'Asante' (Thank you)",
                  "Remove shoes when entering homes",
                  "Respect local customs and traditions"
                ]
              },
              {
                type: "image",
                src: "/demopic.jpg", 
                caption: "Traditional Maasai welcome ceremony",
                size: "large"
              },
              {
                type: "text",
                title: "Tipping Guidelines",
                content: "Tipping is customary in Kenya's tourism industry. Restaurant staff typically receive 10-15%, safari guides $10-15 per day, and camp staff $5-10 per day depending on service level."
              }
            ]
          },
          {
            id: "practical",
            title: "Practical Info",
            icon: "",
            blocks: [
              {
                type: "text",
                title: "Visa & Documentation",
                content: "Most visitors require a visa to enter Kenya. E-visas can be obtained online prior to travel. Your passport must be valid for at least 6 months from entry date."
              },
              {
                type: "list",
                title: "Essential Packing List",
                items: [
                  "Neutral-colored safari clothing",
                  "Wide-brimmed hat and sunglasses", 
                  "High SPF sunscreen",
                  "Insect repellent",
                  "Binoculars for wildlife viewing",
                  "Camera with extra batteries",
                  "Comfortable walking shoes",
                  "Light jacket for early mornings"
                ]
              },
              {
                type: "text",
                title: "Health & Safety",
                content: "Consult your doctor about recommended vaccinations. Malaria prophylaxis is advised for most areas. Kenya is generally safe for tourists, but standard travel precautions apply."
              }
            ]
          }
        ]
      }
    },
    {
      id: 2,
      title: "Wildlife & Seasons",
      type: "seasonal",
      summary: "Track wildlife movements month-by-month.",
      detail: "Includes weather patterns, migration timings, and calving season data",
      coverImage: "/demopic.jpg",
      gradient: "linear-gradient(135deg, rgba(101, 163, 13, 0.3), rgba(54, 83, 20, 0.35))",
      content: {
        destination: "Kenya",
        highlights: [
          "Great Migration river crossings (July-September)",
          "Calving season in southern parks (January-March)",
          "Best weather for photography (June-October)",
          "Green season landscapes (November-May)"
        ]
      }
    },
    {
      id: 3,
      title: "Our Kenya Gallery",
      type: "gallery",
      summary: "Explore dramatic landscapes, camps, and wildlife.",
      detail: "A curated collection of Kenya's most spectacular destinations",
      coverImage: "/demopic.jpg",
      gradient: "linear-gradient(135deg, rgba(79, 70, 229, 0.3), rgba(67, 56, 202, 0.35))",
      content: {
        featuredImage: {
          src: "/demopic.jpg",
          title: "Maasai Mara National Reserve",
          description: "Witness the Great Migration in one of Africa's most famous parks",
          stats: { area: "1,510 km²", established: "1961", bestTime: "July-October" }
        },
        destinations: [
          {
            src: "/demopic.jpg",
            label: "Masai Mara",
            title: "Maasai Mara National Reserve",
            description: "Home to the Great Migration and incredible wildlife density",
            link: "/destinations/masai-mara",
            highlights: ["Great Migration", "Big Five", "Maasai Culture", "Hot Air Balloons"],
            bestFor: ["Wildlife Photography", "Family Safaris", "Luxury Camps"]
          },
          {
            src: "/demopic.jpg",
            label: "Amboseli",
            title: "Amboseli National Park", 
            description: "Stunning elephants with Mount Kilimanjaro backdrop",
            link: "/destinations/amboseli",
            highlights: ["Elephant Herds", "Kilimanjaro Views", "Bird Watching", "Cultural Visits"],
            bestFor: ["Photography", "Day Trips", "Cultural Tours"]
          },
          {
            src: "/demopic.jpg",
            label: "Laikipia",
            title: "Laikipia Plateau",
            description: "Private conservancies with exclusive wildlife experiences",
            link: "/destinations/laikipia",
            highlights: ["Private Conservancies", "Walking Safaris", "Night Drives", "Endangered Species"],
            bestFor: ["Exclusive Access", "Adventure Activities", "Conservation"]
          },
          {
            src: "/demopic.jpg",
            label: "Tsavo",
            title: "Tsavo National Parks",
            description: "Kenya's largest park with red elephants and diverse landscapes",
            link: "/destinations/tsavo",
            highlights: ["Red Elephants", "Lava Flows", "Historic Sites", "Wilderness"],
            bestFor: ["Adventure Safaris", "Remote Experiences", "History"]
          },
          {
            src: "/demopic.jpg",
            label: "Diani Beach",
            title: "Diani Beach",
            description: "Pristine white sand beaches perfect for post-safari relaxation",
            link: "/destinations/diani-beach",
            highlights: ["White Sand", "Coral Reefs", "Water Sports", "Beach Resorts"],
            bestFor: ["Beach Relaxation", "Honeymoons", "Family Time"]
          }
        ]
      }
    },
    {
      id: 4,
      title: "Book Your Trip",
      type: "booking",
      summary: "Ready to go? Let's start crafting your journey.",
      detail: "Talk to a travel advisor and start building your perfect itinerary tailored to your interests and timeline.",
      coverImage: "/demopic.jpg",
      gradient: "linear-gradient(135deg, rgba(75, 85, 99, 0.3), rgba(55, 65, 81, 0.35))",
      content: {
        contactInfo: {
          phone: "+1 (555) 123-4567",
          email: "hello@saltandsavannah.com",
          hours: "Available 24/7"
        },
        planningSteps: [
          {
            step: "1",
            title: "Share Your Vision",
            description: "Tell us about your dream safari experience, travel dates, and group size",
            icon: "💭"
          },
          {
            step: "2", 
            title: "Expert Planning",
            description: "Our Kenya specialists craft your perfect itinerary with hand-picked accommodations",
            icon: "🗺️"
          },
          {
            step: "3",
            title: "Unforgettable Journey",
            description: "Embark on your personalized adventure with 24/7 support throughout",
            icon: "🦁"
          }
        ],
        trustIndicators: [
          { icon: "🏆", title: "Award Winning", subtitle: "Travel Specialists", description: "Recognized experts in African travel" },
          { icon: "🛡️", title: "100% Protected", subtitle: "ATOL Bonded", description: "Your booking is fully protected" },
          { icon: "⭐", title: "5 Star Reviews", subtitle: "1000+ Happy Clients", description: "Consistently excellent service" }
        ],
        testimonial: {
          text: "Salt & Savannah created the most incredible Kenya experience for our family. Every detail was perfect!",
          author: "Sarah & James Mitchell",
          trip: "Kenya Family Safari 2024"
        }
      }
    }
  ],
  
  tanzania: [
    {
      id: 1,
      title: "Tanzania Explorer",
      type: "text",
      summary: "Discover Serengeti and Ngorongoro secrets.",
      detail: "Your complete guide to Tanzania's premier safari destinations, including the Great Migration patterns, crater wildlife densities, and cultural encounters with local tribes.",
      coverImage: "/demopic.jpg",
      gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(5, 150, 105, 0.35))",
      content: {
        sections: [
          {
            title: "Serengeti Highlights",
            description: "The Serengeti ecosystem is one of the oldest on earth, supporting the world's largest terrestrial mammal migration.",
            items: [
              { icon: "🦓", title: "Great Migration", description: "Follow 2 million wildebeest and zebras year-round" },
              { icon: "🌍", title: "Endless Plains", description: "13,000 square kilometers of pristine wilderness" },
              { icon: "🦁", title: "Predator Paradise", description: "Highest concentration of large predators in Africa" },
              { icon: "🌅", title: "Spectacular Sunsets", description: "Iconic African sunsets over endless grasslands" }
            ]
          },
          {
            title: "Cultural Connections",
            description: "Connect with the Maasai people who have coexisted with wildlife for centuries in this region.",
            items: [
              { icon: "🏠", title: "Maasai Villages", description: "Authentic visits to traditional communities" },
              { icon: "🎭", title: "Traditional Dances", description: "Experience warrior jumping ceremonies" },
              { icon: "🧑‍🎨", title: "Local Crafts", description: "Beautiful beadwork and traditional art" },
              { icon: "📚", title: "Oral History", description: "Stories passed down through generations" }
            ]
          }
        ],
        downloadLinks: [
          { title: "Tanzania Migration Guide", url: "/downloads/tanzania-migration.pdf", size: "3.1 MB" },
          { title: "Serengeti Map", url: "/downloads/serengeti-map.pdf", size: "1.2 MB" }
        ]
      }
    },
    {
      id: 2,
      title: "Migration Calendar",
      type: "seasonal",
      summary: "Follow the herds across the Serengeti.",
      detail: "Month-by-month tracking of the Great Migration route",
      coverImage: "/demopic.jpg",
      gradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(251, 146, 60, 0.35))",
      content: {
        destination: "Tanzania",
        highlights: [
          "Great Migration calving season (January-March)",
          "River crossings in northern Serengeti (July-August)",
          "Best predator action during migrations",
          "Ngorongoro Crater year-round wildlife viewing"
        ]
      }
    },
    {
      id: 3,
      title: "Tanzania Gallery",
      type: "gallery",
      summary: "From crater floors to endless plains.",
      detail: "Visual journey through Tanzania's iconic landscapes",
      coverImage: "/demopic.jpg",
      gradient: "linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(99, 102, 241, 0.35))",
      content: {
        featuredImage: {
          src: "/demopic.jpg",
          title: "Serengeti National Park",
          description: "Experience the endless plains where the Great Migration unfolds",
          stats: { area: "14,750 km²", established: "1951", bestTime: "June-October" }
        },
        destinations: [
          {
            src: "/demopic.jpg",
            label: "Serengeti",
            title: "Serengeti National Park",
            description: "Endless plains supporting the world's greatest wildlife migration",
            link: "/destinations/serengeti",
            highlights: ["Great Migration", "Big Cats", "Endless Plains", "Hot Air Balloons"],
            bestFor: ["Migration Viewing", "Photography", "Luxury Camping"]
          },
          {
            src: "/demopic.jpg",
            label: "Ngorongoro",
            title: "Ngorongoro Crater",
            description: "UNESCO World Heritage site with incredible wildlife density",
            link: "/destinations/ngorongoro",
            highlights: ["Big Five", "Crater Floor", "Maasai Culture", "Bird Watching"],
            bestFor: ["Game Drives", "Photography", "Cultural Tours"]
          },
          {
            src: "/demopic.jpg",
            label: "Tarangire",
            title: "Tarangire National Park",
            description: "Famous for massive elephant herds and ancient baobab trees",
            link: "/destinations/tarangire",
            highlights: ["Elephant Herds", "Baobab Trees", "Tarangire River", "Bird Life"],
            bestFor: ["Elephant Viewing", "Walking Safaris", "Photography"]
          },
          {
            src: "/demopic.jpg",
            label: "Zanzibar",
            title: "Zanzibar",
            description: "Spice islands with pristine beaches and rich cultural heritage",
            link: "/destinations/zanzibar",
            highlights: ["Spice Tours", "Stone Town", "White Beaches", "Dhow Sailing"],
            bestFor: ["Beach Relaxation", "Cultural Tours", "Water Sports"]
          }
        ]
      }
    },
    {
      id: 4,
      title: "Plan Tanzania",
      type: "booking",
      summary: "Create your Serengeti adventure.",
      detail: "Connect with our Tanzania specialists for personalized itinerary planning.",
      coverImage: "/demopic.jpg",
      gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(244, 63, 94, 0.35))",
      content: {
        contactInfo: {
          phone: "+1 (555) 123-4567",
          email: "tanzania@saltandsavannah.com",
          hours: "Available 24/7"
        },
        planningSteps: [
          {
            step: "1",
            title: "Share Your Dreams",
            description: "Tell us about your Tanzania safari dreams and migration interests",
            icon: "🌟"
          },
          {
            step: "2", 
            title: "Expert Curation",
            description: "Our Tanzania specialists design your perfect migration experience",
            icon: "🗺️"
          },
          {
            step: "3",
            title: "Epic Adventure",
            description: "Experience the Serengeti with expert guides and luxury accommodations",
            icon: "🦓"
          }
        ],
        trustIndicators: [
          { icon: "🏆", title: "Migration Experts", subtitle: "Serengeti Specialists", description: "Deep knowledge of migration patterns" },
          { icon: "🛡️", title: "Fully Protected", subtitle: "ATOL Licensed", description: "Complete financial protection" },
          { icon: "⭐", title: "5 Star Service", subtitle: "2000+ Satisfied Guests", description: "Exceptional Tanzania experiences" }
        ],
        testimonial: {
          text: "The Great Migration experience exceeded all our expectations. Salt & Savannah made it absolutely perfect!",
          author: "Michael & Lisa Chen",
          trip: "Tanzania Migration Safari 2024"
        }
      }
    }
  ]
};