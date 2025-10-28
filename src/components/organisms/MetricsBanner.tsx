import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { metricsData } from "../../data/metricsData";

const MetricsBanner: React.FC = () => {
  return (
    <Box sx={{ py: 6, bgcolor: "#e8f0fe" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {metricsData.map((metric) => (
            <Grid item xs={12} sm={4} key={metric.label} textAlign="center">
              <Typography variant="h4" fontWeight="bold" color="primary">
                {metric.value}
              </Typography>
              <Typography variant="body1">{metric.label}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MetricsBanner;