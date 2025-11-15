import { expertiseIcons } from './expertiseData'
import TechIcon from './TechIcon'

export default function IconGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-[250px] mt-10">
      {expertiseIcons.map((icon, idx) => (
        <TechIcon key={idx} {...icon} />
      ))}
    </div>
  )
}
