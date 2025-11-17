// Define a type for each icon entry
export interface ExpertiseIcon {
  name: string;
  src: string;
}

// Explicitly type the array
export const expertiseIcons: ExpertiseIcon[] = [
  { name: 'HTML', src: '/icons/html.svg' },
  { name: 'Ruby', src: '/icons/ruby.svg' },
  { name: 'C', src: '/icons/c.svg' },
  { name: 'React', src: '/icons/react.svg' },
  { name: 'Python', src: '/icons/python.svg' },
  { name: 'JavaScript', src: '/icons/js.svg' },
  { name: 'CSS', src: '/icons/css.svg' },
  { name: 'Java', src: '/icons/java.svg' },
];
