import heroImg from '../assets/hero.png';
import logoImg from '../assets/logo.png';
import benefitsImg from '../assets/benefits.png';
import newsletterImg from '../assets/newsletter.png';
import story1 from '../assets/story1.png';
import story2 from '../assets/story2.png';
import story3 from '../assets/story3.png';
import story4 from '../assets/story4.png';
import age1 from '../assets/age0-2.png';
import age2 from '../assets/age3-5.png';
import age3 from '../assets/age6-8.png';
import age4 from '../assets/age9-12.png';
import age5 from '../assets/age13plus.png';

export const navigation = [
  { name: 'Home', href: '#', active: true },
  { name: 'Stories', href: '#' },
  { name: 'Categories', href: '#' },
  { name: 'Age Groups', href: '#' },
  { name: 'About Us', href: '#' },
];

export const categories = [
  { name: 'Adventure', subtitle: 'Exciting journeys', icon: 'Rocket', color: 'bg-pastel-pink' },
  { name: 'Bedtime', subtitle: 'Sweet dreams', icon: 'Moon', color: 'bg-pastel-lavender' },
  { name: 'Values', subtitle: 'Good habits', icon: 'Heart', color: 'bg-rose-50' },
  { name: 'Fantasy', subtitle: 'Magical worlds', icon: 'Sparkles', color: 'bg-pastel-sky' },
  { name: 'Science', subtitle: 'Curious minds', icon: 'Atom', color: 'bg-pastel-mint' },
  { name: 'Nature', subtitle: 'Our beautiful planet', icon: 'Leaf', color: 'bg-green-50' },
];

export const stories = [
  {
    id: 1,
    title: 'The Little Dreamer',
    description: 'A story about courage and never giving up.',
    image: story1,
    age: '4-7 yrs',
    duration: '8 min',
    category: 'Adventure',
  },
  {
    id: 2,
    title: 'Stella and the Star',
    description: 'A magical friendship that lights up the sky.',
    image: story2,
    age: '5-8 yrs',
    duration: '10 min',
    category: 'Fantasy',
  },
  {
    id: 3,
    title: 'The Wise Old Owl',
    description: 'Kind words can change someone\'s day.',
    image: story3,
    age: '3-6 yrs',
    duration: '7 min',
    category: 'Values',
  },
  {
    id: 4,
    title: 'Tiny Turtle\'s Big Wish',
    description: 'Small steps can lead to big changes.',
    image: story4,
    age: '4-7 yrs',
    duration: '9 min',
    category: 'Nature',
  },
];

export const ageGroups = [
  { label: '0-2', sublabel: 'Years', icon: age1, color: 'bg-rose-50' },
  { label: '3-5', sublabel: 'Years', icon: age2, color: 'bg-violet-50' },
  { label: '6-8', sublabel: 'Years', icon: age3, color: 'bg-emerald-50' },
  { label: '9-12', sublabel: 'Years', icon: age4, color: 'bg-sky-50' },
  { label: '13+', sublabel: 'Years', icon: age5, color: 'bg-orange-50' },
];

export const benefits = [
  { title: 'Boosts Imagination', description: 'Inspires creativity and big ideas.', icon: 'Brain' },
  { title: 'Improves Learning', description: 'Enhances focus and memory.', icon: 'Lightbulb' },
  { title: 'Builds Empathy', description: 'Helps kids understand and care more.', icon: 'Heart' },
  { title: 'Brings Happiness', description: 'Stories make every day brighter.', icon: 'Smile' },
];

export const assets = {
  logo: logoImg,
  hero: heroImg,
  benefits: benefitsImg,
  newsletter: newsletterImg,
};
