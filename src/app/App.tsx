import React from 'react';
import '../css/app.css';
import { Button, Typography, Box, Stack, Container } from '@mui/material';

function App() {
  return <Container maxWidth="sm">
        <Stack flexDirection={"column"}>
          <Box sx={{ my:4 }}>
          <Typography variant="h4" component={"h4"}>
            Create react app on Typescript with REDUX
          </Typography>
          </Box>
          <Button variant="contained">Contained</Button>
        </Stack>
      </Container>;
}

export default App;
