import SectionWrapper from '../common/SectionWrapper';
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';

const InfoBlock = () => (
  <SectionWrapper>
    <Heading text="Contact Information" />
    <Paragraph text="Email: contact@example.com" />
    <Paragraph text="Phone: +91 98765 43210" />
    <Paragraph text="Address: Gurugram, Haryana, India" />
  </SectionWrapper>
);

export default InfoBlock;