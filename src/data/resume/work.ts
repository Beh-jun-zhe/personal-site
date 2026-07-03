/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Promptfoo',
    position: 'Co-founder & CTO',
    url: 'https://corning.com',
    startDate: '2026-05-27',
    summary: `Supported four supplier quality and manufacturing projects at Corning, spanning quality systems, Databricks workflow development, 
    equipment inspections, and supplier compliance. Worked with 2022–2026 quality data, supported internal and vendor inspection activities, 
    and contributed to process improvements involving more than 20 suppliers.
`,
    highlights: [
      'Developed a Databricks workflow for 3D scanner deviation analysis, supporting GD&T review and dimensional quality improvement.',
      'Supported material re-sourcing by researching applications, supplier alternatives, and qualification testing needs.',
      'Assisted with sourcing and quality review of specialized equipment through measurement checks, documentation, and schedule tracking.',
      'Supported supplier inspections, SOP alignment, defect reporting, and vendor quality follow-up actions.',
    ],
  },
  {
    name: 'Student Life Finance Office',
    position: 'Assets Management Specialist',
    url: 'https://www.buffalo.edu/studentlife',
    startDate: '2025-05-01',
    summary: `Supported asset management and inventory operations for the University at Buffalo Student Life Finance Office, helping maintain accurate records, improve workflows, and support compliant disposal procedures.`,
    highlights: [
      'Tracked, recorded, and reconciled hundreds of campus assets to maintain accurate inventory and financial records.',
      'Designed storage layouts and optimized check-in/out workflows, improving efficiency and asset visibility.',
      'Collaborated with procurement to provide precise inventory data for cost-effective purchasing decisions.',
      'Developed disposal procedures and drafted a SOP to support compliance with New York State regulations.',
    ],
  },
  {
    name: 'Decision, Risk and Big Data Analytics Lab',
    position: 'Undergraduate Researcher',
    url: 'https://www.buffalo.edu',
    startDate: '2025-02-01',
    endDate: '2026-05-01',
    summary: `Contributed to a University at Buffalo research project developing real-time, intelligence-based patrol strategies using operations research, decision analysis, game theory, and computer science.`,
    highlights: [
      'Contributed to the Real-Time Reconfigurable Intelligence-based Patrol Strategies project.',
      'Used VeRoViz, a UB-developed software tool, to map and display optimal patrol routes on the TAK server.',
      'Assisted in developing a toolkit for users to generate, reconfigure, and visualize patrol strategies dynamically.',
    ],
  },
  {
    name: 'Asia Research Institute',
    position: 'Cultural Liaison',
    url: 'https://www.buffalo.edu',
    startDate: '2025-06-01',
    endDate: '2025-08-01',
    summary: `Supported international visiting students through cultural programming, daily guidance, and cross-cultural engagement during their time in Buffalo.`,
    highlights: [
      'Supported visiting students from South Korea as they adjusted to life in the U.S. and practiced English in daily interactions.',
      'Led cultural activities including community visits and social events to create a meaningful and immersive experience.',
      'Built cross-cultural connections through daily interactions, promoting mutual learning and cultural exchange.',
    ],
  },
  {
    name: 'Design and Construction of a Solar Greenhouse',
    url: 'NA',
    position: 'Project Assistant',
    startDate: '2024-07-01',
    endDate: '2024-09-01',
    summary: `Helped design and build a solar-powered greenhouse in Cameron Highlands, Malaysia, combining sustainability, engineering design, and economic analysis.`,
    highlights: [
      'Designed and built a solar-powered greenhouse to assess sustainability and economic feasibility.',
      'Optimized solar panel placement and energy-efficient design, achieving a 61% return on investment.',
      'Collected and analyzed performance data to refine future greenhouse designs for improved efficiency.',
    ],
  },

  {
    name: 'Institute of Industrial and Systems Engineers',
    position: 'Secretary',
    url: 'https://www.iise.org',
    startDate: '2025-11-01',
    summary: `Serve as secretary for the IISE student chapter, supporting academic, professional, and networking initiatives for industrial engineering students.`,
    highlights: [
      'Planned and coordinated academic, professional, and networking events for the IISE student chapter.',
      'Collaborated with board members and external partners to manage event logistics, scheduling, and outreach.',
    ],
  },

  {
    name: 'Institute for Supply Chain Management WNY',
    position: 'Student Member',
    url: 'https://ismworld.org',
    startDate: '2025-05-01',
    summary: `Participate in professional supply chain and operations-focused initiatives through the Western New York ISM community.`,
    highlights: [
      'Serve as an active member supporting the institute’s initiatives and community engagement.',
      'Assist in coordinating professional networking events and activities.',
    ],
  },
  {
    name: 'Bridges International',
    position: 'Student Leader',
    url: 'https://www.bridgesinternational.com',
    startDate: '2024-04-01',
    summary: `Lead and support international student community-building efforts through weekly gatherings, discussions, and campus events.`,
    highlights: [
      'Led weekly gatherings and discussions, creating an inclusive space for cross-cultural connection.',
      'Organized community events, strengthening engagement and building meaningful global connections.',
    ],
  },
];

export default work;
