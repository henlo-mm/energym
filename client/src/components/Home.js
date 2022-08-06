import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../styles/home.css';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import { FaLock, FaUserCircle  } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import Link from '@mui/material/Link';

export default function Home() {
   
   
  return (
    <Grid container>
        <Container maxWidth="xl" className="container-login" > 
            <Grid container direction={'column'} >
                <Grid item>         
                    <Grid container>
                        <Grid item xs={ 6 }> 
                            <Paper className="paper3s">
                                <div className="main-text">
                                    <h4>DESCUBRE TU POTENCIAL</h4>
                                    <p className="secondary-text-inicio">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Nam sequi ad voluptatibus, 
                                    voluptatem possimus impedit.</p> 
                                </div>
                               {/*  <Box
                                    component="img"
                                    className="imgs"
                                    alt="The house from the offer."
                                    src={require('../resources/images/gym-inicio.png')}
                                />   */}
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

