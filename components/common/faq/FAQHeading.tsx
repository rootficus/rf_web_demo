import Heading from '@/components/atoms/Heading'
import Text from '@/components/atoms/Text'

const FAQHeading = () => (
  <div className="text-center space-y-4">
    <Heading text="Frequently Asked Questions" level={2} />
    <Text size="lg" weight="medium" color="text-gray-600">
      Learn more about us and the services we offer.
    </Text>
  </div>
)

export default FAQHeading