import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthUser from "../services/auth.service";
import Link from '@mui/material/Link';

export default function Login() {
   

    const { register, handleSubmit } = useForm({
          defaultValues: {
          email: "",
          password: "",
        }
    });

    const navigate = useNavigate();
    

    function onSubmit(data) {

        const user = {
            email: data.email,
            password: data.password,
        };

        AuthUser.login(user)
            .then(response => {
            
                handleSubmit({
                    user
                });
            
                let role = response.roles;
                //let token = response.token;
                if (role.toString() === "ROLE_USER") {

                    /* toast.success("login Successfully", {
                        position: toast.POSITION.TOP_CENTER
                    }); */
                   // localStorage.setItem('token', token);
                  
                    navigate("/user");
                    
                }else if(role.toString() === "ROLE_ADMIN"){

                }else{
                    console.log(":(")
                   
            }     
    
        }).catch(e => {
                console.log(e)
                toast.error("Ha ocurrido un error.", {
                    position: toast.POSITION.TOP_CENTER
                });
            });
    }
   
  return (
    <Grid container>
        <Container maxWidth="xl" className="container-login" > 
            <Grid container direction={'column'} >
                <Grid item>         
                    <Grid container>
                        <Grid item xs={ 6 }> 
                            <Paper className="paper2s">
                                <div className="main-text">
                                    <h4>LOREM IPSUM DOLOR SIT</h4>
                                    {/* <p className="secondary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sequi ad voluptatibus, voluptatem possimus impedit.</p> */}
                                </div>
                                <Box
                                    component="img"
                                    className="imgs"
                                    alt="The house from the offer."
                                    src={require('../resources/images/login.png')}
                                /> 
                            </Paper>
                        </Grid>
                        <Grid item xs={ 6 } >
                            <Paper className="papers"> 
                            
                                {/* <div className="main-text">
                                    <h2>¡Inicia sesión!</h2>
                                    
                                </div> */}
                                <Card className="card-content">
                                    
                                        <Box
                                            onSubmit={handleSubmit(onSubmit)}
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1 }, padding: "18px" 
                                            }}
                                        
                                        >
                                        
                                            <Grid  className="input">
                                                <TextField
                                                     
                                                    type="email"     
                                                    label="Correo"
                                                   
                                                    name="email"
                                                    fullWidth
                                                    {...register("email")}
                                                />
                                            </Grid>
                                            <Grid  className="input">
                                                <TextField
                                                    fullWidth                    
                                                    label="Contraseña" 
                                                    type="password" 
                                                    name="password"
                                                    {...register("password")}
                                                />
                                                {/* <p className="text2"> 
                                                <FaLock />
                                            
                                                Recuperar contraseña
                                                </p> */}
                                            </Grid>
                                            <Grid className="button-p">
                                                <p className="txt">
                                                    ¿No tienes una cuenta?
                                                    <Link className="tx" href="/sign-up">
                                                        ¡Regístrate!
                                                    </Link>
                                                </p> 
                                                <Button
                                                    className="button2"
                                                    variant="contained"
                                                    type='submit'
                                                    fullWidth
                                                    size="large"
                                                > 
                                                    INICIAR SESIÓN 
                                                </Button> 
                                                   
                                            </Grid>
                                        </Box>
                                   
                                </Card>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    
    </Grid>
  )
}

