import { Box } from '@mui/material';
import styles from './SectionWrapper.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({ children, className }: Props) => (
  <Box className={`${styles.wrapper} ${className || ''}`}>
    {children}
  </Box>
);

export default SectionWrapper;