/* =====================================================================
   ORBITAL ATLAS — portfolio content (3D view)
   Edit this file to change the 3D gallery. The classic view is
   classic.html (plain HTML) — update both when you add something.
   Each collection = one run of sheets on the orbit ring.
   Item fields: title, year, meta, authors, body[] (HTML ok), list[],
     tags[], links[{label,href}], image (photo cover), full (large image
     for the detail view, zoomable), logos[], icon (symbol cover).
   Icon names are Font Awesome 6 solid icons (see ICONS in the engine).
   ===================================================================== */
window.ATLAS = {
  person: {
    name: 'Kalid Hassen Yasin',
    role: 'Geospatial Data Scientist · Remote Sensing · Earth Observation',
    line: 'Lecturer & researcher, Haramaya University · Co-PI on an ESA / Future Earth Earth-observation project · EMJM Copernicus Digital Earth scholar',
    photo: 'assets/images/kalid_profile.jpg',
    cv: 'assets/kalid_hassen_yasin_cv.pdf',
    vcf: 'assets/kalid_hassen_yasin.vcf',
    email: ['kalidh84@gmail.com', 'kalid.yasin@stud.plus.ac.at'],
    phone: ['WhatsApp: +251 923 328 893', '+43 677 634 80369'],
    stats: [['15+', 'Publications'], ['40+', 'Peer reviews'], ['30', 'Certificates'], ['5+', 'Years teaching']],
    social: [
      ['LinkedIn', 'https://www.linkedin.com/in/kalid-hassen-yasin-061a861a1/'],
      ['GitHub', 'https://github.com/Dodokal'],
      ['Google Scholar', 'https://scholar.google.com/citations?user=sUibU4UAAAAJ'],
      ['ResearchGate', 'https://www.researchgate.net/profile/Kalid-Yasin'],
      ['ORCID', 'https://orcid.org/0000-0001-6231-1312'],
      ['GIS Kitchen blog', 'https://giskitchn.blogspot.com/']
    ]
  },

  places: [
    { name: 'Maya · Haramaya Univ.', lat: 9.41, lon: 42.03, label: true, home: true },
    { name: 'Addis Ababa', lat: 9.03, lon: 38.74, label: true, left: true },
    { name: 'Salzburg', lat: 47.81, lon: 13.06, label: true, left: true },
    { name: 'Olomouc', lat: 49.59, lon: 17.25, label: true },
    { name: 'Vienna', lat: 48.21, lon: 16.37 },
    { name: 'Sinaia', lat: 45.35, lon: 25.55 },
    { name: 'Castellón', lat: 39.99, lon: -0.05 },
    { name: 'Tondo, Manila', lat: 14.62, lon: 120.97 },
    { name: 'Tlemcen', lat: 34.88, lon: -1.31 },
    { name: 'Ibadan', lat: 7.38, lon: 3.94 }
  ],
  routes: [[0, 2], [2, 3], [1, 0], [3, 6]],

  collections: [
    {
      id: 'about', title: 'About Me', theme: 'Ground Station', tab: 'About',
      items: [
        {
          title: 'Kalid Hassen Yasin',
          meta: 'Geospatial data scientist & remote sensing specialist',
          image: 'assets/images/kalid_profile.jpg',
          body: [
            'I am a researcher and educator who uses Earth observation to tackle environmental problems. I lecture GIS and remote sensing at Haramaya University, Ethiopia, and I am Co-PI and GIS / remote-sensing lead on an ESA / Future Earth project on smart cities and urban agriculture in eastern Ethiopia.',
            'My work combines GIS, remote sensing and machine learning for environmental modelling: species distribution and invasion risk, flood susceptibility and runoff, groundwater potential and storage, extreme rainfall and soil erosion. I am completing the <strong>Erasmus Mundus Joint Master in Copernicus Digital Earth</strong> (Geo-Visualization & Communication track) at Paris Lodron University of Salzburg and Palacký University Olomouc.'
          ],
          tags: ['Ethiopian', 'Afaan Oromo · Amharic · English', 'Based in Olomouc, CZ']
        },
        {
          title: 'Research focus', icon: 'faSatellite',
          meta: 'Where Earth observation meets machine learning',
          list: [
            'Flood susceptibility and event-runoff modelling (SAR, ML, SCS-CN)',
            'Invasive alien plant species mapping & species distribution models',
            'Groundwater potential and GRACE storage dynamics',
            'Extreme rainfall frequency analysis',
            'Urban expansion, air quality and land change',
            'Thematic cartography and geovisualisation'
          ],
          tags: ['Environmental modelling', 'ML', 'Copernicus']
        }
      ]
    },

    {
      id: 'education', title: 'Education', theme: 'Flight Path', tab: 'Education',
      items: [
        { title: 'MSc Copernicus Digital Earth (GeoVIS)', year: '2025 – 2027', meta: 'Erasmus Mundus Joint Master · Full EMJM+ scholarship', logos: ['assets/logos/cde.png', 'assets/logos/salzburg.png', 'assets/logos/upol.png'], body: ['Paris Lodron University of Salzburg (Austria) and Palacký University Olomouc (Czech Republic), Geo-Visualization and Communication track.'], tags: ['In progress', 'Erasmus Mundus'] },
        { title: 'ASc Computer Science', year: '2023 – 2025', meta: 'University of the People, USA (online) · GPA 3.25', logos: ['assets/logos/uopeople.png'], body: ['Programming foundations in Python, Java and R, plus software engineering.'], tags: ['Completed'] },
        { title: 'MSc Remote Sensing', year: '2022 – 2024', meta: 'Space Science & Geospatial Institute / Addis Ababa University · GPA 3.93 / 4.0', logos: ['assets/logos/ssgi.png', 'assets/logos/aau.png'], body: ['Thesis: <em>Characterizing and Modelling of the Spatiotemporal Trends of Rangelands as a Response to Prosopis juliflora: A Case Study of the Middle Awash Basin, Ethiopia</em>.'], tags: ['Completed'] },
        { title: 'BSc Geo-Information Science', year: '2017 – 2021', meta: 'Haramaya University, Ethiopia · GPA 3.68 / 4.0', logos: ['assets/logos/haramaya.png'], body: ['Graduated with Great Distinction. Foundation in GIS, cartography and spatial analysis.'], tags: ['Completed'] }
      ]
    },

    {
      id: 'skills', title: 'Skills & Technologies', theme: 'Toolkit', tab: 'Skills',
      items: [
        { title: 'GIS & Remote Sensing', icon: 'faLayerGroup', meta: 'Desktop, cloud and image-analysis platforms', list: ['ArcGIS Pro — 95%', 'QGIS — 95%', 'Google Earth Engine — 90%', 'ERDAS IMAGINE — 85%', 'ArcPy toolbox development'], tags: ['ArcGIS', 'QGIS', 'GEE'] },
        { title: 'Programming', icon: 'faCode', meta: 'Languages and data stack', list: ['Python — 90%', 'R — 85%', 'SQL / PostgreSQL — 80%', 'JavaScript — 75% (web maps, dashboards)'], tags: ['Python', 'R', 'SQL', 'JS'] },
        { title: 'Machine Learning', icon: 'faBrain', meta: 'Applied to Earth-observation problems', list: ['Random Forest / XGBoost — 90%', 'Species distribution models — 90%', 'Deep learning — 75%'], tags: ['RF', 'XGBoost', 'SDM'] }
      ]
    },

    {
      id: 'publications', title: 'Publications', theme: 'Research Archive', tab: 'Publications',
      items: [
        { year: '2026', meta: 'Scientific Reports', title: 'An Integrated ArcGIS Python Toolbox for SCS-CN Event Runoff Estimation and Flood Screening in Data-Scarce Ethiopian Basins', authors: 'Yasin, K.H., Yuya, B.A., Muir, F., et al.', tags: ['Hydrology', 'Flood', 'ArcPy'], icon: 'faHouseFloodWater', links: [{ label: 'DOI', href: 'https://doi.org/10.1038/s41598-026-75406-2' }] },
        { year: '2026', meta: 'Ecology and Evolution', title: 'Machine Learning and Geospatial Modeling of Climate Change Impacts on Ethiopian Honeybees for Conservation and Resilient Agriculture', authors: 'Tulu, D., Yasin, K.H., Gelete, T.B., Ahmed, B., Belina, D.', tags: ['ML', 'SDM', 'Climate'], icon: 'faBug', links: [{ label: 'DOI', href: 'https://doi.org/10.1002/ece3.73842' }] },
        { year: '2026', meta: 'Remote Sensing Applications: Society & Environment', title: 'Random Forest-Based Species Distribution Modeling Reveals Intensifying Multi-Species Invasion Risks of Alien Plants in Ethiopia under Climate Change', authors: 'Yasin, K.H., Tulu, D., Gelete, T.B., Yuya, B.A., Iguala, A.D., Tadesse, K.A., Kebede, E.', tags: ['Invasive species', 'SDM', 'Climate'], icon: 'faSeedling', links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.rsase.2026.101869' }] },
        { year: '2025', meta: 'Journal of Hydrology: Regional Studies', title: 'Advanced Geospatial and Machine Learning Models Identify Groundwater Potential and Reveal Storage Dynamics in Ethiopia’s Abbay River Basin', authors: 'Yasin, K.H., Gelete, T.B., Kebede, E., Iguala, A.D., Abdo, M.Y.', tags: ['ML', 'Hydrology', 'GIS'], icon: 'faWater', links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.ejrh.2025.102762' }] },
        { year: '2025', meta: 'Scientific Reports (Nature)', title: 'Machine Learning Predictions of Climate Change Effects on Nearly Threatened Bird Species (Crithagra xantholaema) Habitat in Ethiopia for Conservation Strategies', authors: 'Gelete, T.B., Tulu, D., Yasin, K.H., et al.', tags: ['SDM', 'Conservation', 'Climate'], icon: 'faDove', links: [{ label: 'DOI', href: 'https://doi.org/10.1038/s41598-025-20952-4' }] },
        { year: '2025', meta: 'MethodsX', title: 'Methodological Integration of Machine Learning and Geospatial Analysis for PM10 Pollution Mapping', authors: 'Yasin, K.H., Yasin, M.I., Iguala, A.D., Gelete, T.B., Kebede, E.', tags: ['Air quality', 'ML'], icon: 'faSmog', links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.mex.2025.103322' }] },
        { year: '2025', meta: 'Discover Applied Sciences', title: 'Predictive Machine Learning and Geospatial Modeling Reveal PM10 Hotspots and Guide Targeted Air Pollution Interventions in Addis Ababa, Ethiopia', authors: 'Yasin, K.H., Yasin, M.I., Iguala, A.D., Gelete, T.B., Tulu, D., Kebede, E.', tags: ['Air quality', 'Urban'], icon: 'faWind', links: [{ label: 'DOI', href: 'https://doi.org/10.1007/s42452-025-06723-w' }] },
        { year: '2025', meta: 'Discover Sustainability', title: 'Spatiotemporal Analysis of Urban Expansion and Its Impact on Farmlands in the Central Ethiopia Metropolitan Area', authors: 'Yasin, K.H., Iguala, A.D., Gelete, T.B.', tags: ['Urban', 'Change detection'], icon: 'faCity', links: [{ label: 'DOI', href: 'https://doi.org/10.1007/s43621-024-00749-7' }] },
        { year: '2024', meta: 'Journal of Environmental Management', title: 'Characterizing and Modeling Spatiotemporal Trends in Rangelands: Prosopis juliflora Impact in Middle Awash Basin, Ethiopia', authors: 'Yasin, K.H.', tags: ['Invasive species', 'SDM'], icon: 'faTree', links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.jenvman.2024.123336' }] },
        { year: '2024', meta: 'Frontiers in Environmental Science', title: 'Integrated Machine Learning and Geospatial Analysis Enhanced Gully Erosion Susceptibility Modeling in the Erer Watershed in Eastern Ethiopia', authors: 'Gelete, T.B., Pasala, P., Abay, N.G., Woldemariam, G.W., Yasin, K.H., et al.', tags: ['Erosion', 'ML'], icon: 'faMountain', links: [{ label: 'DOI', href: 'https://doi.org/10.3389/fenvs.2024.1410741' }] },
        { year: '2024', meta: 'MethodsX', title: 'Optimal Interpolation Approach for Groundwater Depth Estimation', authors: 'Yasin, K.H., Gelete, T.B., Iguala, A.D., Kebede, E.', tags: ['Hydrology', 'Methods'], icon: 'faDroplet', links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.mex.2024.102916' }] },
        { year: '2024', meta: 'Springer Geography', title: 'Soil Erosion Risk Assessment — A Key to Conservation Planning in the Ethiopian Highland in East Hararghe', authors: 'Woldemariam, G.W., Awoke, B.G., Yasin, K.H.', tags: ['Erosion', 'Conservation'], icon: 'faMountainSun', links: [{ label: 'DOI', href: 'https://doi.org/10.1007/978-3-031-60251-1_8' }] },
        { year: '2023', meta: 'KN – Journal of Cartography and Geographic Information', title: 'Abattoir Site Suitability Modeling Using GIS and Multi-Criteria Evaluation – A Case Study of Dire Dawa City, Ethiopia', authors: 'Yasin, K.H., Weldemariam, E.C., Woldemariam, G.W., et al.', tags: ['GIS', 'MCDA'], icon: 'faMapLocationDot', links: [{ label: 'DOI', href: 'https://doi.org/10.1007/s42489-023-00134-w' }] },
        { year: '2023', meta: 'Heliyon', title: 'GIS-Based Ecotourism Potentiality Mapping in the East Hararghe Zone, Ethiopia', authors: 'Yasin, K.H., Woldemariam, G.W.', tags: ['Ecotourism', 'GIS'], icon: 'faBinoculars', links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.heliyon.2023.e18567' }] },
        { year: '2023', meta: 'Geosciences', title: 'Water Erosion Risk Assessment for Conservation Planning in the East Hararghe Zone, Ethiopia', authors: 'Woldemariam, G.W., Yasin, K.H., Iguala, A.D.', tags: ['Erosion', 'Conservation'], icon: 'faCloudShowersHeavy', links: [{ label: 'DOI', href: 'https://doi.org/10.3390/geosciences13060184' }] }
      ],
      footer: { label: 'All publications on Google Scholar', href: 'https://scholar.google.com/citations?user=sUibU4UAAAAJ' }
    },

    {
      id: 'projects', title: 'International Projects', theme: 'Mission Control', tab: 'Projects',
      items: [
        {
          title: 'Building Smart Cities and Resilient Urban Agriculture in East Africa through Earth Observation Data',
          year: 'ESA · Future Earth', meta: 'Co-Principal Investigator · €25,000',
          logos: ['assets/logos/esafa.png'],
          body: ['An international research initiative using Earth observation data from ESA’s Copernicus programme to develop smart-city solutions and strengthen urban agriculture resilience in East Africa. It integrates satellite imagery, machine learning and geospatial analysis to address food security and sustainable urban development.'],
          tags: ['East Africa', 'Earth observation', 'Smart cities', 'Urban agriculture'],
          links: [{ label: 'East Ethiopia Flood Dashboard', href: 'https://east-ethiopia-flood-dashboard.netlify.app/' }]
        },
        {
          title: 'East Ethiopia Flood Dashboard', year: 'Web GIS', meta: 'Interactive results of the ESA project', icon: 'faHouseFloodWater',
          body: ['A web dashboard for exploring flood susceptibility results across eastern Ethiopian cities, built as part of the ESA / Future Earth project.'],
          tags: ['Web GIS', 'Flood', 'Dashboard'],
          links: [{ label: 'Open dashboard', href: 'https://east-ethiopia-flood-dashboard.netlify.app/' }]
        }
      ]
    },

    {
      id: 'maps', title: 'Map Gallery', theme: 'Cartography', tab: 'Map Gallery',
      items: [
        { title: 'Where Hunger Concentrates', year: 'Poster · A2', meta: 'SDG 2 Zero Hunger · acute food insecurity in Ethiopia', image: 'assets/maps/thumb_yasin_sdg02_poster.jpg', full: 'assets/maps/yasin_sdg02_poster.jpg', body: ['A thematic poster on SDG 2 target 2.1: an estimated 11.6 million people acutely food insecure across Ethiopia’s 14 regions and chartered cities. Proportional symbols carry the number of food-insecure people; companion pie and bar maps show the share living in Stressed and Crisis phases.', 'Data: FEWS NET IPC v3.1 projection (Oct 2025 – Jan 2026), OCHA population 2022 and boundaries. Lambert azimuthal equal-area.'], tags: ['Thematic cartography', 'Proportional symbols', 'SDG 2'] },
        { title: 'Ethiopia Food Security Analysis', year: 'Map dashboard', meta: 'IPC acute food insecurity · 1,141 woredas', image: 'assets/maps/thumb_sdg2_eth_map.jpg', full: 'assets/maps/sdg2_eth_map.jpg', body: ['A dashboard-style map of IPC near-term projections (October 2025 – January 2026) for all 1,141 woredas: Minimal, Stressed and Crisis phases, with regional breakdowns, crisis hotspots and a classification key.'], tags: ['IPC', 'Dashboard design', 'SDG 2'] },
        { title: 'Ethiopia, Redrawn by Food Security', year: 'Cartogram', meta: 'Diffusion cartogram of acutely food-insecure people', image: 'assets/maps/thumb_xgtc2026_foodsecurity_popr_yasin.jpg', full: 'assets/maps/xgtc2026_foodsecurity_popr_yasin.jpg', body: ['Regions are resized by the estimated number of people in IPC Phase 1–3 (Gastner & Newman 2004 diffusion cartogram), with the true-shape map as an inset in the same colours. Oromia (3,355 thousand), Amhara (2,272) and Somali (2,099) dominate.', 'Data: FEWS NET IPC v3.1 (Oct 2025 – Jan 2026); OCHA population 2022 and boundaries.'], tags: ['Cartogram', 'Thematic cartography'] },
        { title: 'Addis Ababa — City Centre', year: 'Topographic · 1:10 000', meta: 'Topographic map, A1', image: 'assets/maps/thumb_xgpg26_topographic_kalid.jpg', full: 'assets/maps/xgpg26_topographic_kalid.jpg', body: ['A 1:10 000 topographic map of central Addis Ababa: sub-city boundaries, a full road hierarchy, light-rail lines, built-up and land-use classes, vegetation and points of interest, with a locator map and a complete legend.'], tags: ['Topographic', 'Urban', 'Large scale'] },
        { title: 'Marriages and Divorces in Czechia', year: 'Bivariate choropleth', meta: 'Per 1,000 inhabitants, by ORP municipality', image: 'assets/maps/thumb_xgtc2026_choropleth_kalid.jpg', full: 'assets/maps/xgtc2026_choropleth_kalid.jpg', body: ['A 3 × 3 bivariate choropleth combining marriage and divorce rates for municipalities with extended powers (ORP), with a how-to-read legend and a companion scatterplot of the same ORPs.', 'Data: Czech Statistical Office; boundaries from ORP polygons; Natural Earth. UTM 33N.'], tags: ['Bivariate', 'Choropleth', 'Czechia'] },
        { title: 'Transportation Network of Czechia', year: 'Reference · 1:1 300 000', meta: 'Roads, railways and airports', image: 'assets/maps/thumb_xgtc2026_transport_yasin.jpg', full: 'assets/maps/xgtc2026_transport_yasin.jpg', body: ['Roads by class, railways by electrification, gauge and number of tracks, and airports by type, over regional (kraj) boundaries.'], tags: ['Network', 'Symbology', 'Czechia'] },
        { title: 'Central Europe', year: 'Reference · 1:4 000 000', meta: 'Physical–political reference map', image: 'assets/maps/thumb_yasin_dtp.jpg', full: 'assets/maps/yasin_dtp.jpg', body: ['A small-scale reference map with shaded relief, rivers, lakes, borders and a city-size hierarchy. Data: Natural Earth; ETRS89 / LAEA Europe.'], tags: ['Reference map', 'Relief', 'Typography'] },
        { title: 'Ethiopia Food Security — Interactive Dashboard', year: 'Web map', meta: 'IPC projections for 1,141 woredas', icon: 'faWheatAwn', body: ['An interactive web dashboard of IPC acute food-insecurity projections (October 2025 – January 2026): woreda search, key statistics, regional rankings by crisis level and switchable basemaps.'], tags: ['Web map', 'Dashboard', 'IPC'], links: [{ label: 'Open web map', href: 'https://bright-parfait-4e9b49.netlify.app/' }] },
        { title: 'Food Security Crisis Hotspots in Ethiopia', year: 'StoryMap', meta: 'Bivariate spatial analysis at woreda level', icon: 'faEarthAfrica', body: ['A bivariate spatial analysis of IPC food-insecurity clustering at district (woreda) level.'], tags: ['StoryMap', 'Hotspot analysis'], links: [{ label: 'Open StoryMap', href: 'https://storymaps.arcgis.com/stories/53f103c98c4e4860968afcb4d18d2756' }] },
        { title: 'Where Is SNAP Participation Concentrated, and Is It Changing?', year: 'StoryMap', meta: 'Contiguous United States, 2010 – 2019', icon: 'faBasketShopping', body: ['Hot spot, outlier and emerging hot spot analysis of county-level SNAP participation rates across the contiguous United States, 2010 – 2019.'], tags: ['StoryMap', 'Spatial statistics'], links: [{ label: 'Open StoryMap', href: 'https://storymaps.arcgis.com/stories/37d0970345d34edba44f0ccc4b63c862' }] },
        { title: 'Urban Heat Exposure in Tondo, Manila', year: 'StoryMap', meta: 'Internship · CD Laboratory GEOHUM with MSF', image: 'assets/images/tondo_manila_study_area.jpg', body: ['Where heat concentrates inside one of the densest urban districts anywhere, at neighbourhood detail and seasonal frequency, by fusing daily coarse and fine-resolution thermal satellite data.'], tags: ['StoryMap', 'Thermal RS'], links: [{ label: 'Open StoryMap', href: 'https://storymaps.arcgis.com/stories/c3deab0eecda4156877de0046094fb68' }] },
        { title: 'Drones in the Carpathians', year: 'StoryMap', meta: 'CIVIS BIP field week, Romania', image: 'assets/images/bip_romania_drone.jpg', body: ['A field story from the CIVIS Blended Intensive Programme on drones in the environmental sciences, Romanian Carpathians.'], tags: ['StoryMap', 'UAV'], links: [{ label: 'Open StoryMap', href: 'https://storymaps.arcgis.com/stories/58f949a7fdbe47adabdf9d03f1d09d62' }] },
        { title: 'Spot the Bird', year: 'StoryMap · team', meta: 'Where to see the “Bird of the Year”', icon: 'faCrow', body: ['A team StoryMap (Timotej, Kalid, Tanmay, Adina) showing where to go to see the Bird of the Year.'], tags: ['StoryMap', 'Team project'], links: [{ label: 'Open StoryMap', href: 'https://storymaps.arcgis.com/stories/1ed01624c9f045ed98067fc517c40f98' }] }
      ]
    },

    {
      id: 'experience', title: 'Work Experience', theme: 'Field Operations', tab: 'Experience',
      items: [
        { title: 'Lecturer & Researcher', year: 'Mar 2021 – present', meta: 'Haramaya University', icon: 'faChalkboardUser', body: ['Teaching GIS, remote sensing and geodesy courses, conducting research in environmental modelling, and supervising undergraduate thesis projects.'], tags: ['Teaching', 'Research', 'GIS'] },
        { title: 'Co-Principal Investigator & GIS / RS Lead', year: 'ESA · Future Earth', meta: 'Smart cities & resilient urban agriculture, eastern Ethiopia', icon: 'faSatelliteDish', body: ['Leads the GIS and remote-sensing work of a €25,000 ESA / Future Earth project: flood susceptibility, groundwater potential and runoff modelling for eastern Ethiopian cities, and the project’s web dashboard.'], tags: ['Project leadership', 'Earth observation'] },
        { title: 'Research Intern', year: '2026', meta: 'Christian Doppler Laboratory GEOHUM, Z_GIS, Paris Lodron University of Salzburg · with Médecins Sans Frontières', icon: 'faTemperatureHigh', body: ['Mapped urban heat exposure in Tondo, Manila for MSF: where heat concentrates inside the district at neighbourhood detail and seasonal frequency. Thermal satellites force a trade-off — MODIS is daily but 1 km, Landsat resolves 100 m but returns every 16 days and loses most scenes to tropical cloud — so the work fused both to resolve space and time together.'], tags: ['Thermal RS', 'Data fusion', 'Humanitarian'], links: [{ label: 'Story map', href: 'https://storymaps.arcgis.com/stories/c3deab0eecda4156877de0046094fb68' }] },
        { title: 'Technical Consultant', year: 'Aug 2024 – Feb 2025', meta: 'Oromia Chamber of Commerce', icon: 'faChartLine', body: ['GIS consulting for economic development initiatives: spatial analysis for regional planning and investment mapping.'], tags: ['Consulting', 'Spatial analysis'] },
        { title: 'GIS Consultant', year: 'Oct 2021 – Jul 2022', meta: 'Maya Town Land Administration', icon: 'faMapLocationDot', body: ['Urban cadastral mapping, digital land registration systems and spatial databases for property management.'], tags: ['Cadastral', 'Land administration'] }
      ]
    },

    {
      id: 'fieldschools', title: 'Summer School, BIP & Excursions', theme: 'Beyond the Classroom', tab: 'Field Schools',
      items: [
        { title: 'Copernicus Hubs & Institutions', year: 'May 2026', meta: 'Excursion · Vienna', image: 'assets/images/copernicus_hubs_vienna.jpg', body: ['On 26 May 2026 our CDE cohort travelled from Salzburg to Vienna to follow the Earth-observation pipeline end to end: the Earth Observation Data Centre (EODC) with Austria’s national supercomputing (VSC & MUSICA) in the morning, then UNOOSA and the UN-SPIDER disaster-response programme at the UN Office at Vienna. A full day on turning Copernicus data into knowledge, and knowledge into action.'], tags: ['EODC', 'UNOOSA', 'UN-SPIDER'], links: [{ label: 'View more', href: 'https://drive.google.com/file/d/1ucfw9_GZlaS3BguQCuDni7VdICm71rOa/view?usp=sharing' }] },
        {
          title: 'ISSonVIS 2026 — Emotions and Map', year: 'Apr 2026', meta: 'International Summer School · 3 ECTS · Palacký University Olomouc (online)', image: 'assets/images/issonvis2026_group.jpg',
          gallery: [['assets/images/issonvis2026_certificate.jpg', 'Certificate of participation — 3 ECTS', 'assets/certificates/issonvis2026_yasin_kalid.pdf'], ['assets/images/issonvis2026_group.jpg', 'ISSonVIS 2026 participants · photo: Jakub Koníček']],
          body: ['Two days on the affective dimension of visualisation. Georg Gartner opened with how emotion and meaning sit within cartographic theory; Jiří Pánek made emotional mapping concrete enough to see how it gets used. The afternoon stayed with human-centred mapping and perception.', 'Day 2 moved from satire and aggression in maps to emergencies and emotional data in spatial decision-making, closing with design choices and prompt-based cartography — where AI in cartography is heading.'],
          tags: ['Cartography', 'Affective visualisation'], links: [{ label: 'Certificate (PDF)', href: 'assets/certificates/issonvis2026_yasin_kalid.pdf' }]
        },
        { title: 'BIP III — Drones in Environmental Sciences', year: '2026', meta: 'CIVIS Blended Intensive Programme · Sinaia, Romania', image: 'assets/images/bip_romania_drone.jpg', body: ['On-site week in Sinaia, in the Romanian Carpathians: flight planning, photogrammetry and drone-based environmental monitoring, with Brașov’s Council Square, the UNESCO-listed Prejmer fortified church and the Ialomița Cave as an open-air field laboratory. Output: a personal field blog and a technical group IMRaD report.'], tags: ['UAV', 'Photogrammetry', 'Fieldwork'], links: [{ label: 'Field story', href: 'https://arcg.is/0vLm8u0' }] },
        { title: 'Urban Heat Exposure in Tondo, Manila', year: '2026', meta: 'Internship · CD Laboratory GEOHUM, Z_GIS Salzburg · with MSF', image: 'assets/images/tondo_manila_study_area.jpg', body: ['A skills-based internship at the Christian Doppler Laboratory GEOHUM in partnership with Médecins Sans Frontières, mapping where heat concentrates inside Tondo at neighbourhood detail and seasonal frequency.'], tags: ['Thermal RS', 'Humanitarian'], links: [{ label: 'Story map', href: 'https://storymaps.arcgis.com/stories/c3deab0eecda4156877de0046094fb68' }] }
      ]
    },

    {
      id: 'conferences', title: 'Conferences & Workshops', theme: 'Transmissions', tab: 'Conferences',
      items: [
        { title: 'Conferences & presentations', meta: '2024 – 2026', icon: 'faMicrophoneLines', list: ['<b>2026</b> · GeoMundus 2026 (18th edition), “Geospatial Intelligence for Disaster Resilience” — Universitat Jaume I, Castellón de la Plana, Spain', '<b>Dec 2025</b> · Second Pan African Conference — Tlemcen, Algeria', '<b>Nov 2024</b> · First Pan African University International Conference — University of Ibadan, Nigeria', '<b>Jun 2024</b> · Annual Conference of the Space Science & Geospatial Institute — Addis Ababa', '<b>Jun 2024</b> · Planetary, Astronomy, Magnetism & Space Weather Conference — Addis Ababa'], tags: ['Conferences'] },
        { title: 'Seminars, workshops & outreach', meta: 'Academic engagement', icon: 'faUsers', list: ['<b>Seminar</b> · “It’s Time to Assign Nonforested, Nonagricultural Lands a Global Designation” — Cambridge Prisms', '<b>Workshop</b> · Promoting Equity and Social Justice in Online Work Environments — University of the People', '<b>Workshop</b> · National & in-house curriculum review — Haramaya University', '<b>Instructor</b> · Ethio Space Kids Club Summer Camp — Aug–Sep 2023'], tags: ['Seminars', 'Outreach'] }
      ]
    },

    {
      id: 'certificates', title: 'Certificates & Training', theme: 'Calibration Log', tab: 'Certificates',
      items: [
        { title: 'Remote sensing', meta: 'Geoversity, ITC, EO AFRICA, Geo University, DelftX', icon: 'faSatelliteDish', list: ['UAVs in Precision Agriculture — Geoversity & ITC (2025)', 'Exploration of Copernicus and Sentinel Data — Geoversity & ITC (2025)', 'High-resolution Crop Monitoring for Food Security Using EO — EO AFRICA R&D Facility (2025)', 'Drought Assessment and Monitoring from Space v3 — EO AFRICA & ITC (2025)', 'Introduction to Remote Sensing — Geo University (2025)', 'Remote Sensing & Satellite Image Processing (EOS) — Geo University (2025)', 'Hyperspectral Thermal Image Unmixing — Geo University (2025)', 'Introduction to Water and Climate — DelftX / edX (2022)'], tags: ['Remote sensing'] },
        { title: 'GIS', meta: 'Geo University, ALISON, HarvardX', icon: 'faGlobe', list: ['Coordinate Reference Systems, Projections & Spatial Data — Geo University (2025)', 'Learn the FOSS4G Stack: QGIS 3 Desktop — Geo University (2025)', 'Remote Sensing, QGIS and Data Import — ALISON (2022)', 'Geospatial Analysis in Urban Planning — ALISON (2022)', 'CitiesX: The Past, Present and Future of Urban Life — HarvardX / edX (2022)'], tags: ['GIS'] },
        { title: 'Programming', meta: 'Geo University, IBM, Udemy', icon: 'faCode', list: ['Digital Image Processing with OpenCV in Python — Geo University (2025)', 'Python Basics for Data Science — IBM / edX (2022)', 'Data Science in R — Udemy (2024)', 'Java Programming for Beginners — Udemy (2024)'], tags: ['Programming'] },
        { title: 'Machine learning & data science', meta: 'ColumbiaX, IBM, HarvardX, CU Boulder', icon: 'faBrain', list: ['Machine Learning for Data Science and Analytics — ColumbiaX / edX (2022)', 'AI for Everyone — IBM / edX (2022)', 'Data Science: Visualization — HarvardX / edX (2022)', 'Essential Linear Algebra for Data Science — CU Boulder / Coursera (2023)'], tags: ['ML'], note: '21 of 30+ certificates listed.' }
      ]
    },

    {
      id: 'volunteering', title: 'Volunteer Work', theme: 'Community', tab: 'Volunteer',
      items: [
        { title: 'Urban Planning Support', year: 'Jun – Nov 2024', meta: 'Furii Sub-City Plan and Development Office, Sheger City', icon: 'faCity', body: ['GIS and spatial planning support for urban development in the growing Sheger City metropolitan area.'], tags: ['Volunteer', 'Urban planning'] },
        { title: 'Cadastral Mapping & Surveying', year: 'Jun – Aug 2019', meta: 'Sebeta City Municipality', icon: 'faRulerCombined', body: ['Surveying and GIS mapping for municipal land administration and urban cadastral development.'], tags: ['Volunteer', 'Surveying'] }
      ]
    },

    {
      id: 'contact', title: 'Contact', theme: 'Uplink', tab: 'Contact',
      items: [
        { title: 'Let’s collaborate', meta: 'Research collaboration, consulting or opportunities', icon: 'faEnvelopeOpenText', contact: true, body: ['Based in Olomouc, Czech Republic; originally from Ethiopia. Write to me about research collaboration, consulting, PhD or job opportunities, or anything geospatial.'], tags: ['Email', 'WhatsApp'] }
      ]
    }
  ]
};
