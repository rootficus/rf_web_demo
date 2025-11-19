import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Concert Booking App',
    date: 'Aug 09, 2024',
    duration: '20 Weeks',
    services: ['UI/UX Design', 'Research', 'Development', 'Quality Analyst'],
    description:
      'Lorem ipsum dolor sit amet consectetur. Risus iaculis sit tortor lorem sit sodales suspendisse velit ac.',
  },
  {
    title: 'Travel Booking App',
    date: 'Aug 09, 2024',
    duration: '10 Weeks',
    services: ['UI/UX Design', 'Research', 'Development', 'Quality Analyst'],
    description:
      'Arcu viverra bibendum facilisis integer et orci aliquam non molestie. Dictum in pharetra odio porta.',
  },
]

const ProjectGrid = () => (
  <section className="w-full max-w-screen-xl mx-auto px-4 py-24 space-y-16">
    <div className="text-left">
      <h2 className="text-[64px] leading-[83px] font-bold text-[#1D1D21] font-inter capitalize">
        Discover the Extensive Array of Cutting-Edge IT Services We Offer
      </h2>
      <div className="mt-4 w-[543px] h-[1px] bg-[rgba(12,11,72,0.8)]" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  </section>
)

export default ProjectGrid
