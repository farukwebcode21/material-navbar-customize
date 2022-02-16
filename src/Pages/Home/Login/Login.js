import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';

const Login = () => {
  return (
    <Container>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography>1111111111</Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography>Welcome</Typography>
        </Grid>
      </Grid>
    </Box>
    </Container>
  )
}

export default Login