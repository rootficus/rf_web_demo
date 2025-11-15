import Heading from '@/components/atoms/Heading'
import Text from '@/components/atoms/Text'

const TeamIntro = () => (
  <div className="space-y-4 max-w-4xl mx-auto">
    <Heading text="Deploy Android Team with Specific Skill Set" level={2} />
    <Text size="lg" weight="medium" color="text-gray-600">
      At RFBiTE, we connect you with top-tier software developers tailored to your needs. Our experts excel in specific technologies, ensuring customized solutions for your company.
    </Text>
  </div>
)

export default TeamIntro