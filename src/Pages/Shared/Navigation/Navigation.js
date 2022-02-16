import { AppBar, Button, Container, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';



export const Navigation = () => {
  return (
    <Container fixed>
        <Box
        sx={{ bgcolor: '#cfe8fc'}} >
            <AppBar position='relative'>
                <Toolbar>
                   <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    // sx={{ mr: 2 }}
                   >
                       <MenuIcon/>
                   </IconButton>
                   <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>Bangladesh National Portal</Typography>
                   <Typography>
                    <SearchIcon>
                      <TextField></TextField>
                    </SearchIcon>
                   </Typography>
                   <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            
        </Box>
    </Container>
  )
}
