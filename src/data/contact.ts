import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'www.linkedin.com/in/jun-zhe-beh',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/Beh-jun-zhe',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'mailto:behjunzhe@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
