import React from 'react'
import { useForm, Controller } from "react-hook-form";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import '../styles/register.css';
import AuthUser from "../services/auth.service";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ErrorMessage } from "@hookform/error-message";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';


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
];
  
export default function Register() {

  const {
    register, 
    handleSubmit,
    reset,
    formState,
    formState: { errors },
    getValues,
    control
  } = useForm({
      defaultValues: {
      id: null,
      first_name: "",
      middle_name: "", 
      last_name: "", 
      second_last_name: "", 
      document_type: "",
      document_number: "",
      email: "",
      password: "",
      confirm_password: "",
      birth_date: ""
    }
  });
 
  const [submittedData, setSubmittedData] = React.useState({});


  const onSubmit = (data) => {

    setSubmittedData(data);
      var datas = {
        first_name: data.first_name,
        middle_name: data.middle_name, 
        last_name: data.last_name,
        second_last_name: data.second_last_name, 
        document_type: data.document_type,
        document_number: data.document_number,
        birth_date: data.birth_date,
        email: data.email,
        password: data.password,
      };
     
      AuthUser.create(datas)
        .then(response => {
          handleSubmit({
            id: response.data.id,
            first_name: response.data.first_name,
            middle_name: response.data.middle_name, 
            last_name: response.data.last_name, 
            second_last_name: response.data.second_last_name, 
            document_type: response.data.document_type,
            document_number: response.data.document_number,
            birth_date: response.data.birth_date,
            email: response.data.email,
            password: response.data.password,
          
          });
        
        })
        .catch(e => {
          console.log(e);
      });
   }

   console.log(getValues())
   React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({   
        first_name: "",
        middle_name: "", 
        last_name: "", 
        second_last_name: "", 
        document_type: "",
        document_number: "",
        birth_date: "",
        email: "",
        password: "",
        confirm_password: ""
      });
    }
  }, [formState, submittedData, reset]);
  console.log(getValues())


return (
  <Container className='container'> 
      <Grid container direction={ 'column' }>
        <Grid item>         
            <Grid container>
              <Grid item xs={6}>
                <Paper className="paper2">
                  <Box
                      component="img"
                      className="img"
                      alt="The house from the offer."
                      src={require('../resources/images/register.png')}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}  style={{ width: '100%' }}>
                <Paper className="paper">
                  <Card className="cards">
                    <CardHeader
                      className="title2"
                      title="Crear Cuenta"
                    >
                    </CardHeader>
                    <CardContent>
                      <Box 
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{
                            '& .MuiTextField-root': { m: 1}, 
                        }}
                      >
                        <Grid>
                          <TextField
                            className="inputRounded"
                            label="Primer nombre"
                            fullWidth
                            size="small"
                            {...register("first_name", { required:'Este campo es requerido', maxLength: 30 })}
                            name="first_name"
                          />
                          <ErrorMessage
                            errors={errors}
                            name="first_name"
                            render={({ message }) => <p className="danger">{message}</p>}
                          />
                          <TextField
                            fullWidth
                            className="inputRounded"
                            label="Segundo nombre"
                            size="small"
                            {...register("middle_name", { required: 'Este campo es requerido'})}
                            name="middle_name"
                          />
                          <ErrorMessage
                            errors={errors}
                            name="middle_name"
                            render={({ message }) => <p className="danger">{message}</p>}
                          />
                        </Grid>
                     
                        <Grid>
                          <TextField
                            className="inputRounded"
                            label="Primer apellido"
                            size="small"
                            fullWidth
                            {...register("last_name", { required: 'Este campo es requerido'})}
                              
                          />
                          <ErrorMessage
                            errors={errors}
                            name="last_name"
                            render={({ message }) => <p className="danger">{message}</p>}
                          />
                          <TextField
                            className="inputRounded"
                            label="Segundo apellido"
                            size="small"
                            fullWidth
                            {...register("second_last_name", { required: 'Este campo es requerido'})}
                            name="second_last_name"
                          />
                          <ErrorMessage
                            errors={errors}
                            name="second_last_name"
                            render={({ message }) => <p className="danger">{message}</p>}
                          />
                        
                        </Grid>
                        
                        <Grid>
                          <TextField
                              select
                              fullWidth
                              defaultValue=""
                              
                              label="Tipo de documento"
                              size="small"
                              name="document_type"
                              {...register("document_type", { required: 'Este campo es requerido'})}
                          >
                            {currencies.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                              {option.label}
                              </MenuItem>
                          ))}
                          
                          </TextField>
                          <TextField
                            label="Número de documento"
                            size="small"
                            fullWidth
                            name="document_number"
                            {...register("document_number", { required: 'Este campo es requerido'})}
                          />
                          <ErrorMessage
                            errors={errors}
                            name="document_number"
                            render={({ message }) => <p className="danger">{message}</p>}
                          />
                        </Grid>
                        <Grid>    
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <Controller
                              name="birth_date"
                              control={control}
                              defaultValue={new Date()}
                              render={({ field: { ref, ...rest } }) => (
                                  <DatePicker
                                    disableFuture
                                    label="Fecha de nacimiento"
                                    openTo="year"
                                    views={['year', 'month', 'day']}
                                    {...register("birth_date")}
                                    renderInput={(params) => <TextField fullWidth size="small"  {...params}
                                  />}
                                  {...rest} 
                              />
                              )}
                            />
                            
                          </LocalizationProvider>
                        </Grid>            
                        <Grid>
                          <TextField
                            label="Correo electrónico"
                            fullWidth
                            size="small"
                            name="email"
                            {...register("email",  { required: 'Este campo es requerido',  pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: "El valor introducido no coincide con el formato del correo"
                            }})}
                          >
                          </TextField>
                          
                            <ErrorMessage
                              errors={errors}
                              name="email"
                              render={({ message }) => <p className="danger">{message}</p>}
                            />
                                                     
                        </Grid>                          
                        <Grid>
                          <TextField
                            className="inputRounded"
                            label="Contraseña"
                            type="password"
                            autoComplete="current-password"
                            size="small"
                            name="password"
                            fullWidth
                            {...register("password", {
                              required: 'Este campo es requerido',
                              minLength: {
                                value: 8,
                              message: "Debe tener al menos 8 caracteres"
                            },
                              maxLength: 50,
                            //   pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/
                            })}
                          />

                          <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({ message }) => <p className="danger">{message}</p>}
                          />

                          <TextField
                            label="Confirmar contraseña"
                            type="password"
                            autoComplete="current-password"
                            size="small"
                            fullWidth
                            name="confirm_password"
                            {...register("confirm_password", { 
                                required: 'Este campo es requerido',
                                validate: value =>
                                  value === getValues('password') || "Las contraseñas no coinciden"
                              })
                            }
                          />

                          <ErrorMessage
                              errors={errors}
                              name="confirm_password"
                              render={({ message }) => <p className="danger">{message}</p>}
                          />

                        </Grid>                      
                        <Grid>
                          <Button
                            className="button"
                            variant="contained"
                            type='submit'
                            fullWidth   
                          > 
                            REGISTRARSE 
                          </Button>                         
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

