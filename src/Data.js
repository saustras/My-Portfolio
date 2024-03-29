import {
  FaCss3,
  FaNodeJs,
  FaReact,
  FaSass,
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaAngular,
  FaPhp,
  FaLaravel,
  FaFacebook,
  FaGithub,
  FaWhatsapp,
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import admin from './assets/admin.png';
import encuesta from './assets/encuesta.png';
import eccomerce from './assets/eccomerce.png';
import restaurant from './assets/restaurant.png';
import nodeEcommerce from './assets/nodeEcommerce.png';
import favorite from './assets/favorite.png';

export const navLinks = ['home', 'about', 'skills', 'portfolio', 'contact'];

export const socialIcons = [
  {
    id: 1,
    icon: <FaFacebook />,
    link: 'https://www.facebook.com/federico.rendonbuelbas/',
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: 'https://github.com/saustras',
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/federico-rendon-buelvas-b93425161/',
  },
  {
    id: 4,
    icon: <FaWhatsapp />,
    link: 'https://wa.link/l228x3',
  },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: 'Name',
    value: 'Federico',
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: 'Phone',
    value: '(57)3145961181',
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: 'Email',
    value: 'federendon26@hotmail.com',
  },
];
export const icons = [
  {
    id: 1,
    icon: <FaAngular className="angular" />,
  },
  {
    id: 2,
    icon: <FaNodeJs className="node" />,
  },
  {
    id: 3,
    icon: <FaPhp className="php" />,
  },
  {
    id: 4,
    icon: <FaReact className="react" />,
  },
  {
    id: 5,
    icon: <SiTypescript className="typescript" />,
  },
  {
    id: 6,
    icon: <FaSass className="sass" />,
  },
  {
    id: 7,
    icon: <FaCss3 className="css" />,
  },
  {
    id: 8,
    icon: <FaLaravel className="laravel" />,
  },
];

export const experiences = [
  {
    id: 1,
    year: '2023',
    position: 'Full stack developer',
    company: 'UltraSys',
  },
  {
    id: 2,
    year: '2021-2022',
    position: 'Full stack developer',
    company: 'Sisma Corporation',
  },
  {
    di: 3,
    year: '2020',
    position: 'Free lancer Web Developer',
    company: '',
  },
];
export const workImages = [
  {
    id: 1,
    img: admin,
    name: 'Administrador',
    category: 'angular',
    github: 'https://github.com/saustras/front-angular-admin',
    web: 'https://kacheslicores.up.railway.app',
  },
  {
    id: 2,
    img: encuesta,
    name: 'Encuesta',
    category: 'php',
    github: 'https://github.com/saustras/encuestas',
    web: 'angular',
  },
  {
    id: 3,
    img: eccomerce,
    name: 'Eccomerce',
    category: 'angular',
    github: 'angular',
    web: 'https://kacheslicoresecommerce.up.railway.app/',
  },
  {
    id: 4,
    img: restaurant,
    name: 'Restaurant',
    category: 'React',
    github: 'https://github.com/saustras/Restaurant-react',
    web: 'angular',
  },
  {
    id: 5,
    img: nodeEcommerce,
    name: 'Node Backend Ecommerce',
    category: 'node',
    github: 'https://github.com/saustras/back-Ecommerce-node',
    web: 'angular',
  },
  {
    id: 6,
    img: favorite,
    name: 'Component Favoritos en React',
    category: 'react',
    github: 'https://github.com/saustras/React-redux-ts-components-favorite',
    web: 'angular',
  },
];
export const workNavs = ['All', 'React', 'Angular', 'PHP', 'Node'];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: 'Colombia, Cordoba , Monteria',
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: 'federendon26@hotmail.com',
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: '+(57)3145961181',
  },
];
