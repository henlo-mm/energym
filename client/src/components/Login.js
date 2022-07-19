import React from 'react'
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../styles/login.css';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import { FaLock } from "react-icons/fa";


import AuthUser from "../services/auth.service";

export default function Login() {

    const { register, handleSubmit } = useForm({
          defaultValues: {
          email: "",
          password: "",
        }
    });

    const navigate = useNavigate();

    function onSubmit(data) {

        var datas = {
            email: data.email,
            password: data.password,
        };
        console.log(data)

        return AuthUser.login(datas)
            .then(response => {
            
                handleSubmit({
                    email: response.data.email,
                    password: response.data.password,
                
                });
                console.log(response)
            })
            .catch(e => {
                console.log(e)
            });
    }
  return (
    <Container className="container"> 
        <Grid container direction={ 'column' } >
            <Grid item>         
                <Grid container>
                    <Grid item xs={ 6 } className="half"> 
                        <Paper className="paper2s">
                            <Box
                                component="img"
                                className="imgs"
                                alt="The house from the offer."
                                src={require('../resources/images/login.png')}
                            /> 
                        </Paper>
                    </Grid>
                    <Grid item xs={ 6 } style={{ width: '100%' }}>
                        <Paper className="papers">
                            <Card className="card">
                                <CardHeader
                                    className="title"
                                    title="¡Bienvenido a EnergymPoint!"
                                >
                                </CardHeader>
                                <CardContent>
                                    <Box
                                        onSubmit={handleSubmit(onSubmit)}
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1}, 
                                        }}
                                    >
                                        <Grid>
                                            <TextField        
                                                label="Correo"
                                                size="small"
                                                name="email"
                                                fullWidth
                                                {...register("email")}
                                            />
                                        </Grid>
                                        <Grid>
                                            <TextField
                                                fullWidth                                    
                                                label="Contraseña"
                                                size="small"                                   
                                                name="password"
                                                {...register("password")}
                                            />
                                            <p className="text2"> 
                                            <FaLock />
                                           
                                            Recuperar contraseña
                                            </p>
                                        </Grid>
                                        <Grid>
                                            <Button
                                                className="button2"
                                                variant="contained"
                                                type='submit'
                                                fullWidth
                                            > 
                                                INICIAR SESIÓN 
                                            </Button> 
                                            <p className="txt">¿No tienes una cuenta? <span className="tx">Registrarse</span></p>     
                                        </Grid>
                                    </Box>
                                </CardContent>   
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Container>
  )
}

