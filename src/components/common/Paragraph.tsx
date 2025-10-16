import { Typography } from '@mui/material';

interface Props {
  text: string;
}

const Paragraph = ({ text }: Props) => (
  <Typography variant="body1" paragraph>
    {text}
  </Typography>
);

export default Paragraph;