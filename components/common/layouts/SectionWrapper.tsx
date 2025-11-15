import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
}

const SectionWrapper = ({ children, className = '' }: SectionWrapperProps) => (
  <section className={`w-full py-16 ${className}`}>
    <div className="max-w-7xl mx-auto px-4">{children}</div>
  </section>
)

export default SectionWrapper