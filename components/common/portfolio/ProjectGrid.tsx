import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Concert Booking App',
    date: 'Aug 09, 2024',
    duration: '20 Weeks',
    services: ['UI/UX Design', 'Research', 'Development', 'Quality Analyst'],
    description: 'Lorem ipsum dolor sit amet consectetur. Risus iaculis sit tortor lorem sit sodales suspendisse velit ac.',
  },
  {
    title: 'Travel Booking App',
    date: 'Aug 09, 2024',
    duration: '10 Weeks',
    services: ['UI/UX Design', 'Research', 'Development', 'Quality Analyst'],
    description: 'Arcu viverra bibendum facilisis integer et orci aliquam non molestie. Dictum in pharetra odio porta.',
  },
]

const ProjectGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {projects.map((project, idx) => (
      <ProjectCard key={idx} {...project} />
    ))}
  </div>
)

export default ProjectGrid