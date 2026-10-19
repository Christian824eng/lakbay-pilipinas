import { DestinationStory } from '../types';

export const DESTINATION_STORIES: DestinationStory[] = [
  {
    id: 'luzon-vigan',
    slug: 'vigan-city',
    region: 'luzon',
    regionName: 'Luzon',
    locationName: 'Vigan City, Ilocos Sur',
    articleTitle: 'Walking Through History: Discovering Vigan City',
    subtitle: 'A journey through heritage streets, ancestral houses, traditional crafts, and Ilocano culture.',
    heroImage: '/src/assets/images/vigan_calle_crisologo_heritage_1792417408520.jpg',
    leadKicker: 'Northern Luzon Heritage & Living History',
    introduction: [
      'Vigan City is a well-known tourist destination in Ilocos Sur, located in Northern Luzon, Philippines. Situated near the western coast along the South China Sea, the city is globally recognized for its remarkably preserved Spanish colonial architecture, cobblestone streets, grand ancestral houses, traditional crafts, and distinctive cultural heritage.',
      'Unlike many historic cities that were devastated during the conflicts of the 20th century, Vigan’s core historic town reflects an intact, living synthesis of Asian architectural traditions and European colonial urban planning. Filipino timber craftsmanship, Chinese tile roofing, and Spanish brick masonry coalesce into the unique "Bahay na Bato" (stone house) idiom that defines its landscape.',
      'Today, Vigan continues to attract visitors from across the globe who are eager to experience Philippine history first-hand, explore authentic ancestral estates, savor time-honored Ilocano cuisine, and engage with community artisans who have practiced traditional pottery and textile weaving across generations.',
    ],
    attractions: [
      {
        id: 'calle-crisologo',
        name: 'Calle Crisologo',
        tag: 'Heritage Centerpiece',
        description:
          'Calle Crisologo is Vigan’s world-famous heritage avenue, paved with historic cobblestones and lined with multi-storied ancestral mansions featuring capiz-shell sliding windows, sturdy brick ground floors, and ornate wrought-iron balconies. At dusk, the street is bathed in the warm amber glow of vintage street lamps.',
        visitorTips:
          'Closed to motorized vehicular traffic to preserve structural foundations. Visitors can stroll along the cobblestones, browse artisan souvenir workshops, and ride traditional horse-drawn carriages (kalesas) driven by licensed local kutseros.',
      },
      {
        id: 'st-paul-cathedral',
        name: 'St. Paul Metropolitan Cathedral & Plaza Salcedo',
        tag: 'Religious Landmark',
        description:
          'Constructed in the distinctive "Earthquake Baroque" architectural style, St. Paul Metropolitan Cathedral features thick buttresses designed to withstand seismic tremors, complemented by a separate octagonal bell tower standing 15 meters away in Plaza Salcedo. The adjacent plaza serves as the social heart of Vigan.',
        visitorTips:
          'Plaza Salcedo features an illuminated dancing fountain display in the evening. Visitors are advised to verify local city tourism schedules for scheduled fountain show times and religious service hours.',
      },
      {
        id: 'baluarte',
        name: 'Baluarte',
        tag: 'Open-Space Exhibit',
        description:
          'A multi-hectare tourism complex and recreational destination set amidst the rolling hills of Vigan, showcasing animal exhibits, open green grounds, and panoramic views of the surrounding countryside.',
        visitorTips:
          'Visitors are encouraged to check current operating hours, designated pedestrian paths, and applicable animal-welfare guidelines prior to arrival.',
      },
      {
        id: 'pagburnayan',
        name: 'Pagburnayan Pottery Making',
        tag: 'Ancestral Craftsmanship',
        description:
          'The traditional pottery district of Vigan, where master burnay potters transform local clay, sand, and water on foot-powered potter’s wheels, then fire the earthenware in colossal 50-meter underground dragon kilns (furnaces). These heavy unglazed earthenware jars (burnay) have been used for centuries to ferment sugarcane wine (basi), fish paste (bagoong), and vinegar.',
        visitorTips:
          'Guests can observe master artisans shaping clay with bare hands and attempt hand-thrown pottery under the patient guidance of local craftspeople. Modest donations or souvenir purchases support the community.',
      },
      {
        id: 'syquia-mansion',
        name: 'Syquia Mansion Museum',
        tag: 'Presidential Ancestral Estate',
        description:
          'The historic ancestral residence of Dona Alicia Quirino, wife of the sixth Philippine President, Elpidio Quirino. The palatial estate exhibits original 19th-century hardwood furniture, European crystal chandeliers, Chinese porcelain, historic oil portraits (including works attributed to Fernando Amorsolo), and personal memorabilia of the Quirino administration.',
        visitorTips:
          'Guided interior walkthroughs offer rich historical commentary on the lifestyle and sociopolitical sphere of prominent 19th- and 20th-century Filipino families.',
      },
    ],
    activities: [
      {
        title: 'Kalesa Riding Through Heritage Streets',
        description:
          'Board an authentic horse-drawn carriage guided by an Ilocano kutsero whose storytelling provides firsthand anecdotes about centuries-old mansions and historical events.',
      },
      {
        title: 'Heritage Walking Tours',
        description:
          'Navigate quiet alleyways, ancestral courtyards, and museum galleries on foot, photographing intricate capiz window grilles and historic stone arches in optimal morning and golden hour light.',
      },
      {
        title: 'Local Food Exploration',
        description:
          'Embark on an authentic culinary trail sampling freshly pressed empanadas at the Plaza Burgos food stalls and savory garlic longganisa straight from local markets.',
      },
      {
        title: 'Traditional Pottery Appreciation',
        description:
          'Engage with master potters at Pagburnayan, learning about the indigenous soil preparation and centuries-old firing techniques that produce impervious burnay earthenware.',
      },
      {
        title: 'Shopping for Local Handicrafts & Souvenirs',
        description:
          'Directly support indigenous Ilocano weavers by purchasing authentic handwoven Inabel fabrics, antique woodcarvings, and local cane vinegar from community cooperatives.',
      },
    ],
    festivals: [
      {
        name: 'Viva Vigan Binatbatan Festival of the Arts',
        subtitle: 'Celebration of Weaving & Cultural Heritage',
        description:
          'Held annually in early May, this festival celebrates Vigan’s heritage and ancestral weaving traditions. "Batbat" refers to the rhythmic beating of raw cotton pods with guava twigs to separate seed and fluff before spinning into Abel Iloco cloth. The festival fills Calle Crisologo with street dancing, traditional floral karboza parades, and craft demonstrations.',
        timingNote:
          'Activities, performance schedules, and exhibition dates are coordinated annually by the Vigan City Cultural Affairs Office; visitors should confirm the current program prior to planning.',
      },
      {
        name: 'Longganisa Festival',
        subtitle: 'Honoring Ilocano Culinary Identity',
        description:
          'Celebrated in January alongside Vigan’s Cityhood Anniversary, the Longganisa Festival honors the city’s beloved garlicky, native-spiced cured pork sausage. Highlights include festive cooking competitions, sausage-stringing contests, street street dancing, and community feasts.',
        timingNote:
          'Schedules and parade itineraries vary each year; travelers are advised to verify official announcements from the Ilocos Sur Provincial Tourism Office.',
      },
    ],
    foods: [
      {
        name: 'Vigan Empanada',
        tagline: 'Crispy Rice-Flour Pastry with Savory Filling',
        description:
          'Hand-rolled orange rice-flour pastry filled with freshly grated green papaya, seasoned Vigan longganisa, and a farm egg, folded and deep-fried in bubbling oil until crackling. Served hot with local Sukang Iloko (fermented sugarcane vinegar) infused with garlic and chili.',
      },
      {
        name: 'Vigan Longganisa',
        tagline: 'Aromatic Garlicky Cured Native Sausage',
        description:
          'Distinct from the sweet sausages of other Philippine provinces, Vigan longganisa is small, plump, and intensely savory, packed with local native garlic, black peppercorns, and Ilocano sugarcane vinegar, then simmered in water until fried in its own rendered fat.',
      },
      {
        name: 'Bagnet',
        tagline: 'Twice-Cooked Golden Crispy Pork Belly',
        description:
          'A cornerstone of Ilocano hospitality, pork belly is first boiled in seasoned broth until tender, air-dried, and then deep-fried at high temperatures until the rind blisters into an irresistibly airy, golden crackling shell with juicy, melt-in-the-mouth meat.',
      },
    ],
    tourismSignificance: {
      points: [
        {
          title: 'Cultural & Heritage Tourism Anchor',
          desc: 'Serves as an educational pillar and world model for historic urban conservation, teaching students and travelers how ancestral architecture and local memory can remain vibrant and actively inhabited.',
        },
        {
          title: 'Preservation of Spanish-Filipino-Chinese Architecture',
          desc: 'Maintains rigorous building ordinances ensuring new construction harmonizes with historic zoning, preventing architectural erosion and protecting the tangible historic fabric.',
        },
        {
          title: 'Direct Sustenance of Traditional Crafts',
          desc: 'Generates dependable livelihoods for artisanal burnay jar makers, Inabel handloom weavers, blacksmiths, and woodcarvers whose skills might otherwise vanish.',
        },
        {
          title: 'Economic Engine for Kutseros & Small Hospitality Workers',
          desc: 'Kalesa operators, homestay operators, empanada vendors, and heritage guides directly benefit from sustainable, visitor-fueled economic cycles.',
        },
        {
          title: 'Promotion of Ilocano Cultural Pride',
          desc: 'Elevates regional languages, music, folk festivals, and culinary techniques on national and international stages.',
        },
      ],
      responsibleTourism:
        'Visitors are urged to tread respectfully through historic zones: avoid touching delicate antique plasterwork, patronize licensed local kutseros who ensure fair animal-care practices, support family-owned diners, and refrain from leaving litter in cobblestone plazas.',
    },
    rrl: {
      summary:
        'Scholarly and institutional documentation, led by the UNESCO World Heritage Centre, establishes the Historic Town of Vigan as an extraordinary preservation of a planned Spanish colonial trading town in Asia. Literature highlights that Vigan’s exceptional universal value stems from its fusion of European town planning with indigenous Filipino and Chinese craftsmanship, creating an architecture resilient to regional natural hazards. Research underscores that the town’s long-term sustainability relies upon the active participation of living artisan communities—such as the burnay potters of Pagburnayan—and community-led conservation codes.',
      points: [
        'UNESCO World Heritage Centre Criterion (ii) & (iv): Recognizes Vigan’s unique cultural exchange between Asian and European building traditions.',
        'KKday and regional culinary inventories: Corroborate that authentic foodways (empanada, longganisa, bagnet) form an essential pillar of destination recall and tourist spending.',
        'Tripadvisor & municipal records: Confirm high visitor satisfaction derived from walkable heritage trails and low-emission traditional transportation (kalesa).',
        'Vigan.ph cultural research: Documents the Binatbatan festival as an active intangible heritage safeguard protecting the pre-colonial craft of cotton beating and Abel Iloco weaving.',
      ],
      sourceIds: ['vigan-1', 'vigan-2', 'vigan-3', 'vigan-4', 'vigan-5'],
    },
    conclusion:
      'Vigan City stands as an enduring testament to what happens when history is cherished rather than discarded. By walking its cobblestones, conversing with its potters, and savoring its culinary treasures, travelers partake in a living continuum of Philippine resilience and cultural pride. True appreciation of Vigan requires walking with humility, supporting the local artisans who safeguard its traditions, and preserving its fragile majesty for generations yet to come.',
  },
  {
    id: 'visayas-cebu',
    slug: 'cebu',
    region: 'visayas',
    regionName: 'Visayas',
    locationName: 'Cebu Province',
    articleTitle: 'Beyond the Coast: Exploring the Natural and Cultural Wonders of Cebu',
    subtitle: 'A destination of scenic mountain landscapes, marine attractions, colorful festivals, and beloved Filipino cuisine.',
    heroImage: '/src/assets/images/cebu_osmena_pescador_scenic_1792417409377.jpg',
    leadKicker: 'Central Visayas Biodiversity & Cultural Heartland',
    introduction: [
      'Cebu is one of the most vibrant and multifaceted provinces in the Visayas archipelago. Long celebrated as the historic gateway of the Spanish arrival in 1521, modern Cebu extends far beyond its urban metropolis into a tapestry of rugged mountain ridges, verdant agricultural valleys, world-class marine reserves, and deeply entrenched religious and cultural celebrations.',
      'From the dramatic serrated limestone peaks of southern Dalaguete to the teeming underwater biodiversity of the Tañon Strait marine corridor, Cebu offers travelers an exhilarating convergence of terrestrial eco-adventures and maritime discovery.',
      'Complementing its natural wonders is Cebu’s status as a culinary titan of the Philippines, where artisanal whole-pig roasting traditions and seaside seafood preparation have forged a celebrated food culture renowned across Southeast Asia.',
    ],
    attractions: [
      {
        id: 'osmena-peak',
        name: 'Osmeña Peak (Dalaguete)',
        tag: 'Highest Point in Cebu',
        description:
          'Rising to approximately 1,013 meters above sea level in the municipality of Dalaguete, Osmeña Peak is Cebu’s highest summit. Its topography is characterized by a dramatic landscape of pointed green limestone hills resembling the Chocolate Hills of Bohol, flanked by sweeping views of both the southwestern coastline and the island of Negros across the channel.',
        visitorTips:
          'The ascent from the Mantalongon trailhead is a moderate 20- to 30-minute trek, but weather can transition swiftly from bright sunshine to cool mountain mist and sudden showers. Visitors are required to register with local eco-guides, stay on established footpaths to curb soil erosion, and dress in layered clothing.',
      },
      {
        id: 'pescador-island',
        name: 'Pescador Island (Moalboal)',
        tag: 'Marine Sanctuary & Coral Wall',
        description:
          'Located in the Tañon Strait off Moalboal on Cebu’s western seaboard, Pescador Island is a small, uninhabited limestone islet fringed by spectacular coral reefs. The islet features a sheer underwater wall plunging to depths exceeding 40 meters, renowned for its "Cathedral" cavern system, gorgonian sea fans, sea turtles, and nearby schooling sardines.',
        visitorTips:
          'Renowned for snorkeling, free-diving, and open-water scuba diving under certified divemasters. Marine sanctuary fees directly support local marine protected area (MPA) patrolling; visitors must adhere to strict zero-touch reef policies and use reef-safe sunscreen.',
      },
    ],
    activities: [
      {
        title: 'High-Altitude Ridge Hiking & Eco-Trekking',
        description:
          'Traverse Dalaguete’s vegetable farming highlands ("the Vegetable Basket of Cebu") toward the serrated crest of Osmeña Peak for sunrise panoramic vistas.',
      },
      {
        title: 'Camping Where Permitted',
        description:
          'Overnight camping at designated highland sites allows travelers to experience stargazing above the maritime cloud layer, subject to local municipal permits and strict Leave No Trace protocols.',
      },
      {
        title: 'Island Hopping & Coastal Sightseeing',
        description:
          'Cruise along Cebu’s southwestern coastline aboard traditional motorized outrigger bancas, stopping at remote sandbars and sheltered coves.',
      },
      {
        title: 'Snorkeling with Sea Turtles & Coral Reefs',
        description:
          'Drift over kaleidoscopic coral gardens teeming with reef fish, anemones, and green sea turtles in protected marine sanctuaries.',
      },
      {
        title: 'Responsible Scuba Diving',
        description:
          'Explore deep underwater drop-offs, swim-through caverns, and pelagic feeding grounds in the Tañon Strait under licensed professional dive guidance.',
      },
    ],
    festivals: [
      {
        name: 'Sinulog Festival',
        subtitle: 'The Mother of All Philippine Festivals',
        description:
          'Celebrated on the third Sunday of January in Cebu City, the Sinulog Festival is a monumental cultural and religious celebration honoring the Santo Niño (Child Jesus). The festival is famous for its distinctive dance prayer featuring two steps forward and one step backward to the syncopated beat of brass drums, accompanied by thousands of dancers in vivid, jewel-toned costumes, ornate floats, and solemn fluvial processions.',
        timingNote:
          'Sinulog culminates on the third Sunday of January, though novena masses and cultural pageants span several weeks. Visitors must verify current official schedules published by the Sinulog Foundation and Cebu City Tourism Commission.',
      },
    ],
    foods: [
      {
        name: 'Lechon Cebu',
        tagline: 'World-Renowned Whole Roast Pig with Crispy Skin',
        description:
          'Celebrated across the globe for its crackling skin and richly infused meat. Whole native pigs are stuffed with aromatic stalks of lemongrass (tanglad), crushed native garlic, shallots, black peppercorns, and star anise, then slowly rotated over coconut charcoal embers until the skin turns a glassy mahogany bronze without requiring dipping sauces.',
      },
      {
        name: 'Dried Mangoes',
        tagline: 'Sweet, Tangy Sun-Dried Golden Mango Slivers',
        description:
          'A staple pasalubong (travel gift) and global export, made from peak-ripe Philippine Carabao mangoes, gently dried to preserve their natural sweetness, tanginess, and chewy tropical aroma.',
      },
      {
        name: 'Sutukil',
        tagline: 'Three-Way Coastal Seafood Feast (Sugba, Tuwa, Kilaw)',
        description:
          'A beloved Cebuano culinary tradition combining three cooking styles in one meal: "Sugba" (charcoal-grilled fish or squid), "Tuwa" (clear, soothing fish broth with tomatoes and ginger), and "Kilaw" (fresh raw fish marinated in coconut vinegar, calamansi, ginger, and chili).',
      },
    ],
    tourismSignificance: {
      points: [
        {
          title: 'Direct Coastal & Highland Employment',
          desc: 'Supports thousands of licensed mountain guides in Dalaguete, boat crews in Moalboal, dive operators, and hospitality staff across urban and rural zones.',
        },
        {
          title: 'Empowerment of Small Restaurants & Food Producers',
          desc: 'Sustains local livestock farmers, spice growers, artisanal lechon roasters, and coastal fishermen supplying fresh catches to Sutukil stalls.',
        },
        {
          title: 'Preservation of Marine Biodiversity',
          desc: 'Sanctuary fees directly fund community sea patrols (Bantay Dagat) guarding coral nurseries against destructive fishing.',
        },
        {
          title: 'Cultural Continuity & Spiritual Unity',
          desc: 'Sinulog preserves historical memory, musical traditions, and communal bonds uniting diaspora Cebuanos with local communities.',
        },
        {
          title: 'Pinnacle of Regional Gastronomy',
          desc: 'Cebu is globally cited as a benchmark of Philippine culinary identity, attracting food writers, chefs, and gastro-tourists.',
        },
      ],
      responsibleTourism:
        'Responsible tourism in Cebu requires mindful environmental stewardship: never step on living corals, avoid single-use plastics on island-hopping bancas, respect local farming pathways in Mantalongon, and participate in religious Sinulog rites with reverence.',
    },
    rrl: {
      summary:
        'Academic and travel literature on Cebu underscores how the province harmonizes high-volume cultural tourism with fragile mountain and marine ecosystems. Field guides (Charley 2024; Melon 2026) document the ecological vulnerability of Moalboal’s coral walls and Dalaguete’s karst highlands, advocating for strict guide ratios and quota-based trail management. Cultural research (Zendrila 2024) illustrates Sinulog’s role as both sacred devotion and community tourism, while culinary analyses (Unilever Food Solutions) demonstrate that authentic Cebuano cooking relies upon regional agricultural supply chains and traditional slow-roasting techniques.',
      points: [
        'Charley (2024) Moalboal Marine Guide: Details Pescador Island’s marine reserve regulations, warning against anchor damage and emphasizing the value of marine protected area enforcement.',
        'Jonny Melon (2026) Osmeña Peak Guide: Documents the altitude (~1,013m) and stresses the necessity of licensed local guides from Mantalongon to mitigate soil erosion.',
        'Zendrila (2024) Cultural Creatives: Establishes the historical continuity of the Sinulog dance prayer connecting pre-colonial animist rhythmic worship with Catholic Santo Niño devotion.',
        'Unilever Food Solutions Philippines: Explains the precise culinary mechanics of Cebu lechon stuffing and Sutukil seafood traditions that support local fisherfolk.',
      ],
      sourceIds: ['cebu-1', 'cebu-2', 'cebu-3', 'cebu-4'],
    },
    conclusion:
      'Cebu represents an extraordinary confluence of the Philippine spirit—where jagged emerald peaks drop into azure coral seas, and where sacred rhythms give way to joyous feasts. By exploring both its quiet mountain trails and vibrant festivals with an ethic of conservation and cultural humility, travelers discover the profound heart of the Visayas.',
  },
  {
    id: 'mindanao-surigao',
    slug: 'surigao-del-sur',
    region: 'mindanao',
    regionName: 'Mindanao',
    locationName: 'Surigao del Sur (Hinatuan)',
    articleTitle: 'The Blue Wonder of Mindanao: Discovering Hinatuan Enchanted River',
    subtitle: 'Exploring the remarkable waters, coastal scenery, and cultural heritage of Surigao del Sur.',
    heroImage: '/src/assets/images/surigao_enchanted_river_1792417408296.jpg',
    leadKicker: 'Eastern Mindanao Karst Hydrology & Indigenous Heritage',
    introduction: [
      'Surigao del Sur is a breathtaking coastal province located in the northeastern quadrant of Mindanao, directly facing the vast expanse of the Pacific Ocean. Its landscape is an awe-inspiring juxtaposition of rugged coastal headlands, mangrove estuaries, cascading waterfalls, and the verdant slopes of the Diwata Mountain Range.',
      'Beyond its geography, Surigao del Sur possesses a deep, enduring cultural heritage shaped by centuries of maritime resilience and the living traditions of Indigenous communities, notably the Mamanwa and Manobo peoples who have served as traditional stewards of the region’s watersheds and forests.',
      'For travelers seeking genuine immersion in untouched nature, authentic folklore, and community-based ecotourism, Surigao del Sur offers an unforgettable journey into the ecological richness of Mindanao.',
    ],
    attractions: [
      {
        id: 'hinatuan-enchanted-river',
        name: 'Hinatuan Enchanted River',
        tag: 'Subterranean Karst Spring',
        description:
          'Located in Barangay Talisay, Hinatuan, the Enchanted River is a miraculous natural spring river renowned worldwide for its crystalline, deep sapphire-blue waters. Originating from an unexplored submerged limestone cave system, the river flows a short distance before merging into Hinatuan Bay and the Pacific Ocean. Because the water emerges through deep underground saltwater aquifers, it possesses a unique brackish composition and optical clarity that reveals submerged limestone crevices plunging dozens of meters below the surface.',
        visitorTips:
          'Local legends recount stories of supernatural beings (engkantos and diwatas) who protect the blue waters and its resident fish—tales that have fostered deep communal reverence for the site. To preserve the pristine water quality and fragile subterranean cave ecosystem, swimming directly in the main blue pool was relocated by local ordinance to a designated swimming zone downstream. Visitors must observe strict environmental rules.',
      },
    ],
    activities: [
      {
        title: 'Sightseeing & Optical Photography',
        description:
          'Marvel at the breathtaking shades of cyan, turquoise, and deep sapphire from the landscaped wooden viewing decks overlooking the limestone spring.',
      },
      {
        title: 'Fish-Feeding Experience (Hymn of the Enchanted River)',
        description:
          'At designated hours (typically around 12:00 noon), a melodic bell or chime rings and the "Hymn of Hinatuan" plays over loudspeakers. Dozens of large silver carangoid and mangrove jack fish emerge from the dark underwater cave to feed on rice and shrimp, an enchanting spectacle for visitors.',
      },
      {
        title: 'Downstream Swimming in Designated Areas',
        description:
          'Cool off in designated swimming zones downstream from the main karst crater, equipped with mandatory life vests for safety and river preservation.',
      },
      {
        title: 'River Boat Trips to Coastal Islands',
        description:
          'Board small motorized bancas from the river mouth to visit nearby coastal attractions including Sibadan Fish Cage, Margarito Island, and Hinatuan Bay sandbars.',
      },
      {
        title: 'Visiting Nearby Pacific Beaches & Waterfalls',
        description:
          'Extend your itinerary to explore Surigao del Sur’s wild Pacific beaches and nearby natural wonders such as the tiered curtain of Tinuy-an Falls in Bislig.',
      },
    ],
    festivals: [
      {
        name: 'Paladong Festival',
        subtitle: 'Honoring Traditional Healing & Cultural Roots',
        description:
          'Celebrated in Hinatuan during its town fiesta, the Paladong Festival pays tribute to the indigenous ritual of "ladong"—an ancient traditional healing and thanksgiving ceremony performed by community shamans or healers to invoke the blessings of nature spirits and ancestors. The festival features street-dancing competitions, traditional attire reflecting Manobo and Mamanwa influences, and theatrical performances that respectfully reenact historical folk beliefs.',
        timingNote:
          'Dates and official festival programs are coordinated by the Hinatuan Municipal Tourism Office and the Surigao del Sur Provincial Tourism Council; travelers must verify verified local announcements prior to travel.',
      },
    ],
    foods: [
      {
        name: 'Fresh Pacific Mud Crabs & Lobsters',
        tagline: 'Sweet, Succulent Coastal Seafood Harvested from Mangroves',
        description:
          'Surigao del Sur’s labyrinthine mangrove estuaries yield prized mud crabs (alimango) and rock lobsters, typically steamed simply with native sea salt, calamansi, and butter to showcase their sweet, rich meat.',
      },
      {
        name: 'Kinilaw na Isda with Tabon-Tabon',
        tagline: 'Indigenous Ceviche Cured with Wild Tropical Fruit',
        description:
          'Freshly caught Pacific tuna or mackerel diced and cured in native palm vinegar, ginger, and chili, enhanced by grated sap of the wild "tabon-tabon" fruit, which neutralizes fishiness and adds a subtle, astringent botanical complexity.',
      },
      {
        name: 'Palagsing',
        tagline: 'Traditional Sago Palm and Coconut Delicacy',
        description:
          'A rare indigenous native delicacy crafted from palm starch (sago extracted from lumbia palms), young coconut strips, and brown sugar, wrapped in banana leaves and boiled into a fragrant, chewy treat.',
      },
    ],
    tourismSignificance: {
      points: [
        {
          title: 'Championing Community-Based Ecotourism',
          desc: 'Demonstrates how responsible tourism zoning can protect fragile aquatic ecosystems while delivering direct revenue to municipal communities in Mindanao.',
        },
        {
          title: 'Direct Livelihood for River Stewards & Boat Operators',
          desc: 'Employs local residents as certified river guides, lifeguards, ecological monitors, food vendors, and banca boat operators.',
        },
        {
          title: 'Catalyst for Scientific Hydrological Research',
          desc: 'Continues to inspire speleological and cave-diving expeditions seeking to map the subterranean labyrinth connecting the river to deep ocean trenches.',
        },
        {
          title: 'Raising National Biodiversity Awareness',
          desc: 'Spotlights the critical need to safeguard the Caraga region’s key biodiversity areas and watershed forests from commercial degradation.',
        },
        {
          title: 'Respectful Appreciation of Indigenous Culture',
          desc: 'Provides a respectful platform for celebrating the ancestral heritage and land tenure traditions of the Manobo and Mamanwa peoples.',
        },
      ],
      responsibleTourism:
        'Because Hinatuan Enchanted River is an extraordinarily fragile hydrological feature, visitors must adhere rigorously to the swimming ban in the main spring, wear mandatory life jackets, refrain from throwing food or trash, and honor local folklore and Indigenous cultural sensitivities.',
    },
    rrl: {
      summary:
        'Scientific assessments, environmental studies, and official government reports confirm that the Hinatuan Enchanted River is one of the Philippines’ most ecologically significant karst freshwater-marine springs. Documentation from the Department of Environment and Natural Resources (DENR) and the German Development Cooperation (GIZ, 2017) underscores that protecting such key biodiversity areas demands stringent carrying-capacity management. Media records from the Philippine Information Agency (PIA, 2026) and Atlas Obscura (2015) celebrate the river’s global appeal while emphasizing that municipal restrictions on direct swimming represent an essential environmental conservation victory.',
      points: [
        'Atlas Obscura (2015): Documents the unique saltwater river characteristics, underground cave chambers, and folkloric spiritual guardians that define Hinatuan’s allure.',
        'PIA Report by N. G. P. Barcena (2026): Confirms the river’s selection as an ASEAN 2026 visual identity centerpiece, elevating Mindanao’s ecotourism credentials.',
        'DENR & GIZ (2017) Protected Area Assessment: Highlights the ecological fragility of Caraga’s watershed networks and the imperative of municipal zoning enforcement.',
        'Provincial Government of Surigao del Sur Tourism Records: Details the historical lineage of Indigenous Manobo and Mamanwa communities and official Paladong Festival documentation.',
      ],
      sourceIds: ['surigao-1', 'surigao-2', 'surigao-3', 'surigao-4', 'surigao-5', 'surigao-6', 'surigao-7', 'surigao-8'],
    },
    conclusion:
      'The Hinatuan Enchanted River is not merely a visual spectacle—it is a sacred reminder of the Philippines’ delicate aquatic frontiers. In Surigao del Sur, the rhythms of the Pacific Ocean, the ancient wisdom of Indigenous communities, and the mysteries of deep limestone caves remind us that the greatest treasures of the archipelago require our deepest reverence and unwavering conservation.',
  },
];
