import React from "react";
import { Box, Container, Typography, TextField, Button, Stack } from "@mui/material";

const ContactSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, sm: 8 } }}>
      <Container maxWidth="sm">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Contact Us
        </Typography>
        <Stack spacing={3}>
          <TextField label="Your Name" fullWidth size="small" />
          <TextField label="Email Address" fullWidth size="small" />
          <TextField label="Message" multiline rows={4} fullWidth size="small" />
          <Button variant="contained" color="primary">Send Message</Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactSection;