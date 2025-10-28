import React from "react";
import { Box, Container, Typography, Table, TableBody, TableCell, TableRow, Paper } from "@mui/material";

const skills = [
  { tech: "Kotlin", level: "Expert" },
  { tech: "Jetpack Compose", level: "Advanced" },
  { tech: "Dagger / Hilt", level: "Advanced" },
  { tech: "Firebase", level: "Proficient" },
  { tech: "RESTful APIs", level: "Expert" },
];

const SkillTable: React.FC = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Android Tech Stack
        </Typography>
        <Paper elevation={2}>
          <Table>
            <TableBody>
              {skills.map((item) => (
                <TableRow key={item.tech}>
                  <TableCell>{item.tech}</TableCell>
                  <TableCell>{item.level}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </Box>
  );
};

export default SkillTable;