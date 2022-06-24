import React from 'react'
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import '../styles/login.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
            backgroundColor: '#50007F', 
            marginLeft: '27px', 
           
            '&:hover': {
              backgroundColor: '#8812CE' 
            },
          },
        },
      },
    },
  });
  
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    
    color: theme.palette.text.secondary,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    marginTop: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }));
const Item2 = styled(Paper)(({ }) => ({
    backgroundColor: '#50007F',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    marginTop: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
   
  }));


  const currencies = [
    {
      value: 'CC',
      label: 'Cédula de ciudadanía',
    },
    {
      value: 'TI',
      label: 'Tarjeta de identidad',
    },
    {
      value: 'P',
      label: 'Pasaporte',
    },
    {
      value: 'PEP',
      label: 'Permiso',
    },
  ];

function Login() {
    const [value, setValue] = React.useState(new Date());
  return (
    <Container fixed>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container xs={12} spacing={2}>
                <Grid item xs={5}>
                    <Item2>
                        <Box
                            component="img"
                            className="img"
                            alt="The house from the offer."
                            src={require('../resources/images/register.png')}
                        />
                    </Item2>
                </Grid>
                <Grid item xs={6}  style={{  paddingLeft: "0px" }}>
                    <Item>
                        <div>
                            <h1>Crear cuenta</h1>
                        </div>
                        <Box 
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '30ch', marginLeft: 4}, 
                            }}

                        >
                            <Grid container xs={12}>
                                <Grid item>
                                    <TextField
                                        className="inputRounded"
                                        label="Primer nombre"
                                        size="small"
                                    />
                                
                                </Grid>

                                <Grid item>
                                    <TextField
                                        className="inputRounded"
                                        label="Segundo nombre"
                                        size="small"
                                        
                                    />
                                </Grid>
                            </Grid>

                            <Grid container xs={12}>
                            
                                <Grid item>
                                
                                    <TextField
                                        className="inputRounded"
                                        label="Primer apellido"
                                        size="small"
                                    />
                                
                                </Grid>
                                <Grid item>
                                    <TextField
                                        className="inputRounded"
                                        label="Segundo apellido"
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                            <Grid container xs={12}>
                                <Grid item>
                                    <TextField
                                        select
                                        className="inputRounded"
                                        label="Tipo de documento"
                                        size="small"
                                    >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        className="inputRounded"
                                        label="Número de documento"
                                        size="small"
                                    />
                                </Grid> 
                            </Grid>
                            <Grid container xs={12}>
                            <Grid item>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                            
                                <DatePicker
                                    disableFuture
                                    label="Fecha de nacimiento"
                                    openTo="year"
                                    views={['year', 'month', 'day']}
                                    value={value}
                                    onChange={(newValue) => {
                                    setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField fullWidth={true} size="small"  className="inputRounded" {...params} />}
                                />
                            
                            </LocalizationProvider>
                            </Grid>
                            
                            </Grid>
                            <Grid container xs={12}>
                            
                                <Grid item>
                                    <TextField
                                        className="inputRounded"
                                        label="Correo electrónico"
                                        size="small"
                                    />
                                </Grid>                          
                            </Grid>
                            <Grid container xs={12}>
                            
                            <Grid item>
                                <TextField
                                    className="inputRounded"
                                    label="Confirmar contraseña"
                                    type="password"
                                    autoComplete="current-password"
                                    size="small"
                                
                                />
                            </Grid>
                            </Grid>
                            <Grid container xs={12}>
                            
                            <Grid item>
                                <TextField
                                    className="inputRounded"
                                    label="Contraseña"
                                    type="password"
                                    autoComplete="current-password"
                                    size="small"
                                />
                            </Grid>                       
                            </Grid>
                            <Grid container xs={12}>
                            
                                <Grid item sx={{ m: 1 }}>
                                    <ThemeProvider theme={theme}>
                                        <Button variant="contained">REGISTRARSE</Button>                         
                                    
                                    </ThemeProvider>
                                </Grid>
                            </Grid>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    </Container>
  )
}

export default Login