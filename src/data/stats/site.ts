import dayjs from 'dayjs';

import { StatData } from '../../components/Stats/types';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/Beh-jun-zhe/personal-site
 */
const data: StatData[] = [
  {
    label: 'Cups of coffee consumed',
    value: 'Too many',
  },
  {
    label: 'Awards and scholarships',
    value: '2',
  },
  {
    label: 'Languages spoken',
    value: '4',
  },
  {
    label: 'Times my code worked on the first try',
    value: '0',
  },
  {
    label: 'Browser tabs currently open',
    value: '36',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/Beh-jun-zhe/personal-site/commits',
    format: (x: unknown) => dayjs(x as string).format('MMMM DD, YYYY'),
  },
  {
    label: 'Lines of TypeScript powering this website',
    value: '2272',
    link: 'https://github.com/Beh-jun-zhe/personal-site/graphs/contributors',
  },
];

export default data;
