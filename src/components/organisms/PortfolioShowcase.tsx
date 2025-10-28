import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { portfolioData } from "../../data/portfolioData";

const PortfolioShowcase: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "#fafafa" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Portfolio Highlights
        </Typography>
        <Grid container spacing={4}>
          {portfolioData.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.roles}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PortfolioShowcase;