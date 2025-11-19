interface ProjectCardProps {
  title: string
  date: string
  duration: string
  services: string[]
  description: string
}

const ProjectCard = ({ title, date, duration, services, description }: ProjectCardProps) => (
  <div className="bg-[#F2F2F2] rounded-[40px] shadow-md p-8 space-y-6 w-full max-w-[854px]">
    <h3 className="text-[35px] leading-[43px] font-bold text-[#1D1D21] font-inter">{title}</h3>

    <div className="flex items-center gap-3 text-[19px] leading-[23px] text-[rgba(26,32,44,0.5)] font-inter">
      <span>{date}</span>
      <span className="w-[5px] h-[5px] rounded-full bg-[rgba(26,32,44,0.5)]" />
      <span className="font-bold">{duration}</span>
    </div>

    <div className="flex flex-wrap gap-[13.66px]">
      {services.map((service, idx) => (
        <span
          key={idx}
          className="px-[16px] py-[6px] text-[21px] leading-[26px] font-medium text-[#1D1D21] bg-[#E1E0E0] rounded-full font-inter"
        >
          {service}
        </span>
      ))}
    </div>

    <p className="text-[19px] leading-[34px] text-[#1D1D21] opacity-60 font-inter">{description}</p>
  </div>
)

export default ProjectCard
