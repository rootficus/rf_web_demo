interface ProjectCardProps {
  title: string
  date: string
  duration: string
  services: string[]
  description: string
}

const ProjectCard = ({ title, date, duration, services, description }: ProjectCardProps) => (
  <div className="bg-white shadow-md rounded-lg p-6 space-y-4 max-w-md">
    <h3 className="text-2xl font-bold text-[#1D1D21]">{title}</h3>
    <div className="text-sm text-gray-500">
      <p>{date}</p>
      <p>{duration}</p>
    </div>
    <ul className="flex flex-wrap gap-2 text-sm text-white">
      {services.map((service, idx) => (
        <li key={idx} className="bg-[#1D1D21] px-3 py-1 rounded-full">
          {service}
        </li>
      ))}
    </ul>
    <p className="text-gray-600 text-base">{description}</p>
  </div>
)

export default ProjectCard