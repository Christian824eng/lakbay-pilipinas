import { ReferenceItem } from '../types';

export interface DestinationReferences {
  destination: string;
  islandGroup: string;
  rrlRationale: string;
  sources: ReferenceItem[];
}

export const MASTER_REFERENCES: DestinationReferences[] = [
  {
    destination: 'Vigan City, Ilocos Sur',
    islandGroup: 'Luzon',
    rrlRationale:
      'The literature and official records demonstrate that Vigan City represents an exceptionally intact example of a planned Spanish colonial town in Asia. UNESCO’s World Heritage inscription documentation provides the legal and historic benchmark verifying its authenticity, urban layout, and architectural synthesis of Asian building designs with European colonial influences. Complementary tourism publications and regional culinary records confirm how historic preservation directly stimulates the local artisanal economy (notably jar-making at Pagburnayan and kalesa transport) and heritage gastronomy.',
    sources: [
      {
        id: 'vigan-1',
        title: 'Historic Town of Vigan',
        publisherOrSource: 'UNESCO World Heritage Centre',
        url: 'https://whc.unesco.org/en/list/502/',
        claimSupported:
          'Validates Vigan as a UNESCO World Heritage site reflecting a rare preservation of a planned Spanish colonial trading town in Asia with authentic fusion of European, Filipino, and Chinese architectural styles.',
      },
      {
        id: 'vigan-2',
        title: 'Local Delicacies to Try in Vigan, Ilocos Sur',
        publisherOrSource: 'KKday Travel Editorial',
        url: 'https://www.kkday.com/en-sg/blog/36950/asia-philippines-ilocos-sur-must-try-local-delicacies-when-in-vigan',
        claimSupported:
          'Documents traditional Ilocano gastronomy, notably authentic Vigan empanada preparation, native garlic longganisa, and crispy bagnet.',
      },
      {
        id: 'vigan-3',
        title: 'Attractions and Activities in Vigan, Ilocos Sur Province',
        publisherOrSource: 'Tripadvisor Philippines',
        url: 'https://www.tripadvisor.com.ph/Attractions-g424958-Activities-Vigan_Ilocos_Sur_Province_Ilocos_Region_Luzon.html',
        claimSupported:
          'Summarizes visitor activity patterns, pedestrian experiences along Calle Crisologo, and the popularity of historical museums and ancestral sites.',
      },
      {
        id: 'vigan-4',
        title: 'Vigan Tourism & Cultural Activities Information',
        publisherOrSource: 'Vigan Tourism Resource',
        url: 'https://vigan-61.webself.net/activites',
        claimSupported:
          'Outlines practical visitor guidelines, heritage walking circuits, and traditional pottery immersion at Pagburnayan.',
      },
      {
        id: 'vigan-5',
        title: 'Viva Vigan Binatbatan Festival of the Arts',
        publisherOrSource: 'Vigan.ph Heritage & Tourism Portal',
        url: 'https://www.vigan.ph/attractions/viva-vigan-festival-of-the-arts.html',
        claimSupported:
          'Describes the cultural origins of the Binatbatan festival, commemorating traditional cotton beating (batbat) and ancestral Abel Iloco weaving traditions.',
      },
    ],
  },
  {
    destination: 'Cebu',
    islandGroup: 'Visayas',
    rrlRationale:
      'Literature on Cebu establishes its unique dual profile as both an ecological haven and the historical cradle of Christianity and festival arts in the Philippines. Marine ecological field accounts substantiate the rich coral biodiversity and marine protected sanctuary status surrounding Pescador Island in the Tañon Strait. Topographical and travel guides for Dalaguete document the distinctive karst geological formation of Osmeña Peak rising over 1,000 meters above sea level. Cultural studies of the Sinulog Festival illuminate the communal synergy between sacred liturgical rites and street-theatre tourism, while regional culinary studies explain the communal identity woven into Cebuano roasting craft (Lechon) and coastal Sutukil traditions.',
    sources: [
      {
        id: 'cebu-1',
        authors: 'Charley',
        year: '2024',
        title: 'A Complete Guide to Pescador Island in Moalboal: Ultimate Snorkeling & Diving Guide',
        publisherOrSource: 'Small Girl Big Backpack',
        url: 'https://smallgirlbigbackpack.com/pescador-island-moalboal-ultimate-snorkeling-diving-guide/',
        claimSupported:
          'Documents underwater marine topography, coral wall drop-offs, marine sanctuary regulations, and marine life at Pescador Island off western Cebu.',
      },
      {
        id: 'cebu-2',
        authors: 'Melon, J.',
        year: '2026',
        title: 'How to Visit Osmeña Peak in Cebu: 2026 Travel Guide',
        publisherOrSource: 'Jonny Melon Adventure Travel',
        url: 'https://www.jonnymelon.com/osmena-peak-cebu/',
        claimSupported:
          'Provides geographic measurements documenting Osmeña Peak as Cebu’s highest point at approximately 1,013 meters above sea level, including eco-trekking regulations and Dalaguete trails.',
      },
      {
        id: 'cebu-3',
        authors: 'Zendrila, M.',
        year: '2024',
        title: 'Sinulog Festival in Cebu: Everything You Need to Know',
        publisherOrSource: 'Cultural Creatives',
        url: 'https://culturalcreatives.org/festivals/sinulog-festival/',
        claimSupported:
          'Analyzes the cultural and spiritual traditions of Sinulog honoring the Santo Niño, traditional two-steps-forward and one-step-backward drum rhythm dance choreography, and community pageantry.',
      },
      {
        id: 'cebu-4',
        title: 'Cebu Food Heritage & Regional Culinary Culture',
        publisherOrSource: 'Unilever Food Solutions Philippines Academy',
        url: 'https://www.unileverfoodsolutions.com.ph/free-courses-academy/menu-planning/cebu-food.html',
        claimSupported:
          'Details authentic Cebuano cooking traditions, notably aromatic lechon spiced with lemongrass, star anise, and scallions, alongside Sutukil (sugba-tuwa-kilaw) seafood hospitality.',
      },
    ],
  },
  {
    destination: 'Surigao del Sur (Hinatuan)',
    islandGroup: 'Mindanao',
    rrlRationale:
      'Environmental, governmental, and scientific documentation on Surigao del Sur highlights the critical ecological balance between karst hydrological systems and sustainable ecotourism. The German Corporation for International Cooperation (GIZ) and DENR protected-area evaluations underscore the biological significance of Caraga’s watershed networks and the Diwata mountain corridors. Reports by the Philippine Information Agency (PIA) and the Provincial Government of Surigao del Sur demonstrate Hinatuan Enchanted River’s prominence as a national ecotourism icon, while anthropological records for the Paladong Festival illustrate the respectful preservation of ancient ladong healing customs rooted in local riverine folklore.',
    sources: [
      {
        id: 'surigao-1',
        authors: 'Atlas Obscura',
        year: '2015',
        title: 'Hinatuan Enchanted River: The Saltwater River Flowing from an Unexplored Cave System',
        publisherOrSource: 'Atlas Obscura Expeditions',
        url: 'https://www.atlasobscura.com/places/hinatuan-enchanted-river',
        claimSupported:
          'Documents the sapphire-blue hue, underground subterranean karst cave exploration, underwater depth chambers, and the folklore of supernatural guardians protecting the river.',
      },
      {
        id: 'surigao-2',
        authors: 'Barcena, N. G. P.',
        year: '2026',
        title: 'ASEAN 2026 Visual Identity Cites Surigao Sur’s Enchanted River',
        publisherOrSource: 'Philippine Information Agency (PIA)',
        url: 'https://pia.gov.ph/news/asean-2026-visual-identity-cites-surigao-surs-enchanted-river/',
        claimSupported:
          'Highlights national and international recognition of Hinatuan Enchanted River as an ecological wonder and official regional icon represented in Southeast Asian identity showcases.',
      },
      {
        id: 'surigao-3',
        authors: 'Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)',
        year: '2017',
        title:
          'Protecting Key Biodiversity Areas Through Better Management and Protected Area Enactment: Report on the Management Effectiveness and Capacity of Protected Areas in the Philippines',
        publisherOrSource: 'DENR FASPS / German Development Cooperation (PDF Report)',
        url: 'https://faspselib.denr.gov.ph/uploads/materials/cc143c2c-93fe-40c4-b31a-547c3dee118b/81c0ccf1-6657-4a3d-91c7-e10f213aa266.pdf',
        claimSupported:
          'Scientific and governmental baseline evaluating biodiversity preservation, river basin habitats, and protected environmental protocols in Mindanao.',
      },
      {
        id: 'surigao-4',
        title: 'History and Cultural Heritage of Surigao del Sur',
        publisherOrSource: 'Province of Surigao del Sur Official Tourism Portal',
        url: 'https://surigaodelsur.gov.ph/tourism/history',
        claimSupported:
          'Documents historical provenance of coastal Surigao del Sur and the rich ethnolinguistic traditions of Indigenous Mamanwa and Manobo communities.',
      },
      {
        id: 'surigao-5',
        title: 'Hinatuan Tourist Attractions and Ecotourism Zones',
        publisherOrSource: 'Provincial Government of Surigao del Sur',
        url: 'https://surigaodelsur.gov.ph/tourism/hinatuan',
        claimSupported:
          'Details official municipal ecotourism policies, the river preservation zoning that relocated swimming to preserve pristine spring water, and island excursions.',
      },
      {
        id: 'surigao-6',
        title: 'Major Events and Festivals Official Schedule',
        publisherOrSource: 'Provincial Government of Surigao del Sur',
        url: 'https://surigaodelsur.gov.ph/tourism/schedule',
        claimSupported:
          'Provides verified cultural calendars and civic observance protocols across Surigao del Sur municipalities.',
      },
      {
        id: 'surigao-7',
        title: 'Festivals of Surigao del Sur & Indigenous Celebrations',
        publisherOrSource: 'Provincial Government of Surigao del Sur',
        url: 'https://surigaodelsur.gov.ph/tourism/festivals',
        claimSupported:
          'Documents the cultural origins of the Paladong Festival in Hinatuan, honoring ancestral spiritual healers (ladong) and folk wellness traditions.',
      },
      {
        id: 'surigao-8',
        title: 'Surigao del Sur Provincial Tourism Office Official Repository',
        publisherOrSource: 'Surigao del Sur Provincial Tourism Office',
        url: 'https://sites.google.com/view/sursurprovincialtourismoffice/home',
        claimSupported:
          'Supplies municipal travel advisories, conservation ordinances, responsible visitor codes, and community livelihood program reports.',
      },
    ],
  },
];
