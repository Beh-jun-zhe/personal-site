export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'University at Buffalo',
    degree: 'B.S. Industrial Engineering, Computer Science (minor)',
    link: 'https://buffalo.edu',
    year: 2027,
  },
];

export default degrees;
