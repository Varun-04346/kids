import * as L from 'lucide-react';
const icons = ['Rocket', 'Moon', 'Heart', 'Sparkles', 'Atom', 'Leaf', 'Brain', 'Lightbulb', 'Smile', 'Search', 'Filter', 'Star', 'BookOpen', 'Bookmark', 'Clock', 'Users', 'ChevronRight', 'Menu', 'X', 'User', 'Play', 'Mail', 'Lock', 'ArrowRight', 'Github', 'Globe', 'Camera', 'Video', 'Bird'];
const missing = icons.filter(name => !L[name]);
console.log('Missing icons:', missing);
