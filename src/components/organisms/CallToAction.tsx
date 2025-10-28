import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";

const CallToAction: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 6, sm: 10 }, bgcolor: "#6C5CE7", color: "#fff", textAlign: "center" }}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: "1.8rem", sm: "2rem" } }}
        >
          Ready to Build Your Android App?
        </Typography>
        <Typography variant="body1" mb={4}>
          Let’s turn your idea into a high-performance mobile experience.
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
          <Button variant="contained" color="secondary">Schedule a Call</Button>
          <Button variant="outlined" color="inherit">Request a Quote</Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default CallToAction;