export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: 'Computer Science I',
    number: 'CSE 115LLR',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=CSE%20115LLR',
    university: 'University at Buffalo',
  },
  {
    title: 'Computer Science II',
    number: 'CSE 116LLB',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=CSE%20116LLB',
    university: 'University at Buffalo',
  },
  {
    title: 'Introduction to Discrete Structures',
    number: 'CSE 191LR',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=CSE%20191LR',
    university: 'University at Buffalo',
  },
  {
    title: 'Data Structures',
    number: 'CSE 250LR',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=CSE%20250LR',
    university: 'University at Buffalo',
  },

  {
    title: 'EE Concepts for Non-Majors',
    number: 'EAS 200LR',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=EAS%20200LR',
    university: 'University at Buffalo',
  },
  {
    title: 'Statics',
    number: 'EAS 207LR',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=EAS%20207LR',
    university: 'University at Buffalo',
  },
  {
    title: 'Applied Probability and Statistics',
    number: 'EAS 305LR',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=EAS%20305LR',
    university: 'University at Buffalo',
  },

  {
    title: 'Urban Planning and Environmental Design',
    number: 'END 212LEC',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=END%20212LEC',
    university: 'University at Buffalo',
  },
  {
    title: 'Statistics for Engineers',
    number: 'IE 306LR',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=IE%20306LR',
    university: 'University at Buffalo',
  },
  {
    title: 'Engineering Economy',
    number: 'IE 320LEC',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=IE%20320LEC',
    university: 'University at Buffalo',
  },
  {
    title: 'Analytics and Computing for IE',
    number: 'IE 322LEC',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=IE%20322LEC',
    university: 'University at Buffalo',
  },
  {
    title: 'Human Factors in System Design',
    number: 'IE 323LLB',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=IE%20323LLB',
    university: 'University at Buffalo',
  },
  {
    title: 'Planning Production and Service Enterprises',
    number: 'IE 326LEC',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=IE%20326LEC',
    university: 'University at Buffalo',
  },
  {
    title: 'Facility Design and Materials Handling',
    number: 'IE 327LEC',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=IE%20327LEC',
    university: 'University at Buffalo',
  },
  {
    title: 'Optimization in Deterministic Models',
    number: 'IE 373LR',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=IE%20373LR',
    university: 'University at Buffalo',
  },
  {
    title: 'Modeling of Stochastic Systems',
    number: 'IE 374LR',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=IE%20374LR',
    university: 'University at Buffalo',
  },
  {
    title: 'Quality Assurance',
    number: 'IE 408LEC',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=IE%20408LEC',
    university: 'University at Buffalo',
  },
  {
    title: 'Decision Analysis',
    number: 'IE 412LEC',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=IE%20412LEC',
    university: 'University at Buffalo',
  },
  {
    title: 'Systems Engineering Practicum',
    number: 'IE 420LLB',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=IE%20420LLB',
    university: 'University at Buffalo',
  },
  {
    title: 'Human-Centered Design for Interactive Systems',
    number: 'IE 435LEC',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=IE%20435LEC',
    university: 'University at Buffalo',
  },
  {
    title: 'Predictive Analytics',
    number: 'IE 459LEC',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=IE%20459LEC',
    university: 'University at Buffalo',
  },
  {
    title: 'Simulation Modeling and Analysis',
    number: 'IE 477LR',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=IE%20477LR',
    university: 'University at Buffalo',
  },
  {
    title: 'Introduction to Differential Equations',
    number: 'MTH 306LR',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=MTH%20306LR',
    university: 'University at Buffalo',
  },

  {
    title: 'International Political Economy',
    number: 'PSC 328LEC',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=PSC%20328LEC',
    university: 'University at Buffalo',
  },
  {
    title: 'Population Problems',
    number: 'SOC 229LEC',
    link: 'https://catalogs.buffalo.edu/search_advanced.php?search_database=Search&search_db=Search&keyword=SOC%20229LEC',
    university: 'University at Buffalo',
  },
];

export default courses;
