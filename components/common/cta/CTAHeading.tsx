import Heading from '@/components/atoms/Heading'
import Text from '@/components/atoms/Text'

interface CTAHeadingProps {
  title: string
  subtitle: string
}

const CTAHeading = ({ title, subtitle }: CTAHeadingProps) => (
  <div className="text-center max-w-4xl mx-auto space-y-4">
    <Heading text={title} level={2} gradient />
    <Text size="lg" weight="medium" color="text-gray-600">
      {subtitle}
    </Text>
  </div>
)

export default CTAHeading