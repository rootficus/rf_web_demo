import CTAHeading from './CTAHeading'
import CTAButtonGroup from './CTAButtonGroup'

const CTASection = () => {
  const buttons = [
    { label: 'Schedule a meeting' },
    { label: 'Call us Now.' },
    { label: 'Request a Quote' },
    { label: 'Contact Us Now' },
  ]

  return (
    <section className="w-full py-16 bg-[#FAFAFA] text-center space-y-8">
      <CTAHeading
        title="Simple Steps, Big Moves"
        subtitle="Aliquet fames neque turpis morbi amet proin nunc commodo pretium. Faucibus at cum ac auctor."
      />
      <CTAButtonGroup buttons={buttons} />
    </section>
  )
}

export default CTASection