import { Typography } from '@mui/material';

interface Props {
  text: string;
  variant?: 'h2' | 'h3' | 'h4';
}

const Heading = ({ text, variant = 'h3' }: Props) => (
  <Typography variant={variant} gutterBottom>
    {text}
  </Typography>
);

export default Heading;