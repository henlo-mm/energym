import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../styles/home.css';
import Button from '@mui/material/Button';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
   
   
  return (
    <Grid container>
        <Container maxWidth="xl" className="container-home" > 
            <Grid container direction={'column'} >
                <Grid item>         
                    <Grid container>
                        <Grid item xs={ 6 }> 
                            <Paper className="paper3s">
                                <div className="main-text-2" align="left">
                                    <h4>DESCUBRE TU POTENCIAL</h4>
                                    <p className="secondary-text-inicio">Estás a un solo clic de empezar
                                    a trabajar en la mejor versión de ti mismo.
                                    Las excusas no queman calorías.</p>
                                  
                                    <Button variant="contained" className="button-2" >EMPIEZA YA</Button>
                                    
                                </div>
                               
                            </Paper>
                        </Grid>
                        <Grid item xs={ 6 } >
                            <Paper className="paper4s"> 
                            
                                {/* <div className="main-text">
                                    <h2>¡Inicia sesión!</h2>
                                    
                                </div> */}
                                
                                    
                                <Box
                                    component="img"
                                    className="img_inicio"
                                    alt="The house from the offer."
                                    src={require('../resources/images/gym-inicio.png')}
                                /> 
                                   
                               
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    
    </Grid>
  )
}

