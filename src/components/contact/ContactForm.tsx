import { TextField, Button, Box } from '@mui/material';
import SectionWrapper from '../common/SectionWrapper';
import Heading from '../common/Heading';

const ContactForm = () => (
  <SectionWrapper>
    <Heading text="Get in Touch" />
    <Box component="form">
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
      <Button variant="contained" type="submit">Send</Button>
    </Box>
  </SectionWrapper>
);

export default ContactForm;