import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import '../styles/register.css';
import UserService from "../services/user.service";


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
const roles = [
    {
      value: 1,
      label: 'Cliente',
    },
    {
      value: 2,
      label: 'Instructor',
    },
    {
      value: 3,
      label: 'Administrador',
    },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  
  boxShadow: 24,
  p: 4,
  '& .MuiTextField-root': { m: 1}, 
};

export default function CreateUser() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register, 
    handleSubmit,
    reset,
    formState,
    getValues,
   
  } = useForm({
      defaultValues: {
      id: null,
      role_id: "",
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
        role_id: data.role_id,
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
     
      UserService.createUser(datas)
        .then(response => {
          handleSubmit({
            id: response.data.id,
            role_id: response.data.role_id,
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
    <div>
      <Button variant="contained" onClick={handleOpen}>Crear usuario</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box 
          onSubmit={handleSubmit(onSubmit)}
          sx={style} 
          component="form"  
        >
            <Grid className="input-r">
              <TextField
                  select
                  label="Rol"
                  fullWidth
                  size="small"
                  name="role_id"
                  {...register("role_id",  { required: 'Este campo es requerido'})}
              >
              {roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
              </TextField>
              
              
                                      
            </Grid> 
            <Grid className="input-r">
                <TextField
                    label="Primer nombre"
                    fullWidth
                    size="small"
                    {...register("first_name", { required:'Este campo es requerido', maxLength: 30 })}
                    name="first_name"
                />
                
                <TextField
                    fullWidth
                    label="Segundo nombre"
                    size="small"
                    {...register("middle_name", { required: 'Este campo es requerido'})}
                    name="middle_name"
                />
            
            </Grid>
    
            <Grid className="input-r">
                <TextField
                    name="last_name"
                    label="Primer apellido"
                    size="small"
                    fullWidth
                    {...register("last_name", { required: 'Este campo es requerido'})}
                    
                />
            
                <TextField
                    label="Segundo apellido"
                    size="small"
                    fullWidth
                    {...register("second_last_name", { required: 'Este campo es requerido'})}
                    name="second_last_name"
                />
            
            
            </Grid>
            
            <Grid className="input-r">
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
            
            </Grid>
            <Grid className="input-r">  
                <TextField   
                    size="small" 
                    type="date" 
                    {...register("birth_date")} 
                    fullWidth 
                /> 
                
            </Grid>            
            <Grid className="input-r">
                <TextField
                    type="email"
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
                
                
                                        
            </Grid>                          
            <Grid className="input-r">
                <TextField
                    className="inputRounded"
                    label="Contraseña"
                    type="password"
                   
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

            

            </Grid>                      
            <Grid>
                <Button
                    className="button"
                    variant="contained"
                    type='submit'
                    fullWidth   
                > 
                    Guardar 
                </Button>      
                       
            </Grid>
          
        </Box>
      </Modal>
    </div>
  );
}
