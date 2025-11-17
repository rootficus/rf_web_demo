import { expertiseIcons } from './expertiseData';
import TechIcon from './TechIcon';

export default function IconGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 mt-10">
      {expertiseIcons.map((icon, idx) => (
        <TechIcon key={idx} {...icon} />
      ))}
    </div>
  );
}
