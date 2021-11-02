import React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import '../App.css' 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const theme = createTheme();

function MyAdmin(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        let type = document.getElementById('grouped-select');
        console.log({
          Description: data.get('email'),
          ProductName: data.get('password'),
          ProductID : data.get('lastName'),
          Type : type.childNodes[0].data
        });
      };
    return(
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Add Product Here
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  type="text"
                  id="password"
                  label="Product Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Product ID"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                aria-label="minimum height"
                minRows={7}
                placeholder="Descripton"
                style={{ width: 400 }}
                />
                
              </Grid>
              
             
            </Grid>
            <Grid>
            
            <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel htmlFor="grouped-select">Type</InputLabel>
          <Select defaultValue="" id="grouped-select" label="Grouping">
            <MenuItem value={1}>Jiu Jitsu</MenuItem>
            <MenuItem value={2}>Judo</MenuItem>
            <MenuItem value={3}>Karate</MenuItem>
            <MenuItem value={5}>Taekwondo</MenuItem>
            <MenuItem value={6}>Boxing</MenuItem>
            <MenuItem value={7}>MMA</MenuItem>
            <MenuItem value={8}>Sports wear</MenuItem>
            <MenuItem value={9}>Apparel</MenuItem>
            <MenuItem value={10}>Sports Gloves</MenuItem>
            <MenuItem value={11}>Accessoroes</MenuItem>
          </Select>
        </FormControl>
      </div>


          </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Product
            </Button>
         
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    )
}

export default MyAdmin;