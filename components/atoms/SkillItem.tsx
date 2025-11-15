interface SkillItemProps {
  skill: string
}

const SkillItem = ({ skill }: SkillItemProps) => (
  <span className="px-4 py-2 bg-[#EDF2F7] text-[#1D1D21] rounded-full text-sm font-medium">
    {skill}
  </span>
)

export default SkillItem