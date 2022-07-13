import React from 'react'
import { useForm} from "react-hook-form";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import '../styles/register.css';
import UserDataService from "../services/user.service";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ErrorMessage } from "@hookform/error-message";


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
    getValues
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
      birth_date: new Date()
    }
  });
 
  const [submittedData, setSubmittedData] = React.useState({});

  const [birth_date, setStartDate] = React.useState(null);

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
     
      UserDataService.create(datas)
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


return (
      <Container fixed>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container item xs={12} spacing={2}>
                  <Grid item xs={5}>
                      <Paper className="paper2">
                          <Box
                              component="img"
                              className="img"
                              alt="The house from the offer."
                              src={require('../resources/images/register.png')}
                          />
                      </Paper>
                  </Grid>
                  <Grid item xs={6}  style={{  paddingLeft: "0px" }}>
                      <Paper className="paper">
                          <div>
                              <h1>Crear cuenta</h1>
                          </div>
                          <Box 
                              component="form"
                              onSubmit={handleSubmit(onSubmit)}
                              sx={{
                                  '& .MuiTextField-root': { m: 1, width: '30ch', marginLeft: 1}, 
                              }}
  
                          >
                              <Grid container>
                                  <Grid item xs={6}>
                                      <TextField
                                          className="inputRounded"
                                          label="Primer nombre"
                                          size="small"
                                          {...register("first_name", { required:'Este campo es requerido', maxLength: 30 })}
                                          name="first_name"
                                      />
                                       <ErrorMessage
                                        errors={errors}
                                        name="first_name"
                                        render={({ message }) => <p>{message}</p>}
                                      />
                                  
                                  </Grid>
  
                                  <Grid item xs={6}>
                                      <TextField
                                          className="inputRounded"
                                          label="Segundo nombre"
                                          size="small"
                                          {...register("middle_name", { required: 'Este campo es requerido'})}
                                          name="middle_name"
                                      />
                                       <ErrorMessage
                                        errors={errors}
                                        name="middle_name"
                                        render={({ message }) => <p>{message}</p>}
                                      />
                                  </Grid>
                              </Grid>
                              <Grid container>
                                  <Grid item xs={6}>
                                      <TextField
                                          className="inputRounded"
                                          label="Primer apellido"
                                          size="small"
                                          {...register("last_name", { required: 'Este campo es requerido'})}
                                         
                                      />
                                       <ErrorMessage
                                        errors={errors}
                                        name="last_name"
                                        render={({ message }) => <p>{message}</p>}
                                      />
                                  
                                  </Grid>
                                  <Grid item xs={6}>
                                      <TextField
                                          className="inputRounded"
                                          label="Segundo apellido"
                                          size="small"
                                          {...register("second_last_name", { required: 'Este campo es requerido'})}
                                          name="second_last_name"
                                      />
                                       <ErrorMessage
                                        errors={errors}
                                        name="second_last_name"
                                        render={({ message }) => <p>{message}</p>}
                                      />
                                  </Grid>
                              </Grid>
                              <Grid container>
                                  <Grid item xs={6}>
                                      <TextField
                                          fullWidth
                                          select
                                          className="inputRounded"
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
                                  </Grid>
                                  <Grid item xs={6}>
                                      <TextField
                                          className="inputRounded"
                                          label="Número de documento"
                                          size="small"
                                          name="document_number"
                                          {...register("document_number", { required: 'Este campo es requerido'})}
                                         
                                      />
                                       <ErrorMessage
                                        errors={errors}
                                        name="document_number"
                                        render={({ message }) => <p>{message}</p>}
                                      />
                                  </Grid> 
                              </Grid>
                              <Grid container >
                                <Grid item>
                                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                                  
                                      <DatePicker
                                          disableFuture
                                          label="Fecha de nacimiento"
                                          openTo="year"
                                          views={['year', 'month', 'day']}
                                          selected={birth_date}
                                          onChange= {(newValue) => {
                                            setStartDate(newValue);
                                          }}       
                                          renderInput={(params) => <TextField fullWidth size="small"  className="inputRounded" {...params} />}
                                      />
                                  
                                  </LocalizationProvider>
                                </Grid>
                              
                              </Grid>
                              <Grid container>
                              
                                  <Grid item>
                                      <TextField
                                          className="inputRounded inputFull"
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
                                        <span>

                                          <ErrorMessage
                                            errors={errors}
                                            name="email"
                                            render={({ message }) => <p>{message}</p>}
                                          />

                                        </span>
                                     
                                      
      
                                                                        
                                  </Grid>                          
                              </Grid>
                              <Grid container>
                                
                                <Grid item>
                                    <TextField
                                        className="inputRounded"
                                        label="Contraseña"
                                        type="password"
                                        autoComplete="current-password"
                                        size="small"
                                        name="password"
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
                                        render={({ message }) => <p>{message}</p>}
                                      />
                                </Grid>
                              </Grid>
                              <Grid container>
                                <Grid item>
                                    <TextField
                                        className="inputRounded"
                                        label="Confirmar contraseña"
                                        type="password"
                                        autoComplete="current-password"
                                        size="small"
                                        name="confirm_password"
                                        {...register("confirm_password", {
                                          validate: value =>
                                            value === getValues('password') || "Las contraseñas no coinciden"
                                        })
                                      }
                                    />
                                    <ErrorMessage
                                        errors={errors}
                                        name="confirm_password"
                                        render={({ message }) => <p>{message}</p>}
                                    />
                                </Grid>                       
                              </Grid>
                              <Grid container>
                                  <Grid item sx={{ m: 1 }}>
                                        <Button
                                          className="button"
                                          variant="contained"
                                          type='submit'   
                                          
                                        > 
                                          REGISTRARSE 
                                        </Button>                         
                                  </Grid>
                              </Grid>
                          </Box>
                      </Paper>
                  </Grid>
              </Grid>
          </Box>
      </Container>
    )
}

