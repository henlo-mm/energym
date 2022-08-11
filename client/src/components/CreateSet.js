import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import '../styles/register.css';
import SetService from "../services/set.service";
import UserService from "../services/user.service";
import ExerciseService from "../services/exercise.service";
import { useState, useEffect } from 'react';

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

export default function CreateSet() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register, 
    handleSubmit,
    reset,
    formState,
   
  } = useForm({
      defaultValues: {
      id: null,
      numReps: "",
      weight: "", 
      name: "", 
      series: "", 
      user_id: "",
      instructor_id: "",
      exercise_id: "",
    }
  });
 
  const [submittedData, setSubmittedData] = React.useState({});
  const onSubmit = (data) => {

    setSubmittedData(data);
      var datas = {
        numReps: data.numReps,
        weight: data.weight, 
        name: data.name,
        series: data.series, 
        user_id: data.user_id,
        instructor_id: data.instructor_id,
        exercise_id: data.exercise_id,
      };

     
      SetService.createSet(datas)
        .then(response => {
          handleSubmit({
            id: response.data.id,
            numReps: response.data.numReps,
            weight: response.data.weight, 
            name: response.data.name, 
            series: response.data.series, 
            user_id: response.data.user_id,
            instructor_id: response.data.instructor_id,
            exercise_id: response.data.exercise_id,
          
          });
        
        })
        .catch(e => {
          console.log(e);
      });
   }
   React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({   
        numReps: "",
        weight: "", 
        name: "", 
        series: "", 
        user_id: "",
        instructor_id: "",
        exercise_id: "",
      });
    }
  }, [formState, submittedData, reset]);

  const [data, setData] = useState([]);

  useEffect(() => {
      userData();
  }, []);
  
  const userData = async () => {
  
      await UserService.getAllClient()
          .then(response => {
          
          
          setData(response.data)
          
          })
          .catch(e => {
              console.log(e);
          });
  };
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
      instructorData();
  }, []);
  
  const instructorData = async () => {
  
      await UserService.getAllInstructor()
          .then(response => {
              setInstructor(response.data)
          
          })
          .catch(e => {
              console.log(e);
          });
  };
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
      ExerciseData();
  }, []);
  
  const ExerciseData = async () => {
  
      await ExerciseService.getAllExercise()
          .then(response => {
              setExercise(response.data)
          
          })
          .catch(e => {
              console.log(e);
          });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Crear rutina</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box 
            sx={style}
            onSubmit={handleSubmit(onSubmit)}
            component="form"  
            >
            <Grid className="input-r">
                <TextField
                    label="Número de repeticiones"
                    fullWidth
                    size="small"
                    type="number"
                    {...register("numReps")}
                    name="numReps"
                />
                
                <TextField
                    fullWidth
                    label="Peso"
                    size="small"
                    {...register("weight", { required: 'Este campo es requerido'})}
                    name="weight"
                />
            
            </Grid>
            <Grid className="input-r">
           
                <TextField
                    fullWidth
                    label="Nombre"
                    size="small"
                    {...register("name", { required: 'Este campo es requerido'})}
                    name="name"
                />
            
            </Grid>
    
            <Grid className="input-r">
                <TextField
                    name="series"
                    label="Series"
                    size="small"
                    fullWidth
                    {...register("series", { required: 'Este campo es requerido'})}
                    
                />
            
                <TextField
                    label="Usuario"
                    select
                    size="small"
                    fullWidth
                    {...register("user_id", { required: 'Este campo es requerido'})}
                    name="user_id"
                >
                
                {data.map((option) => (
                    <MenuItem key={option.value} value={option.id}>
                    {option.first_name + ' ' + option.last_name}
                    </MenuItem>
                ))}
              
                
                </TextField>
            
            
            </Grid>
            
            <Grid className="input-r">
        
                <TextField
                    label="Instructor"
                    select
                    size="small"
                    fullWidth
                    name="instructor_id"
                    {...register("instructor_id", { required: 'Este campo es requerido'})}
                >
                {instructor.map((option) => (
                    <MenuItem key={option.value} value={option.id}>
                    {option.first_name + ' ' + option.last_name}
                    </MenuItem>
                ))}
               
                
                </TextField>
            
            </Grid>
            <Grid className="input-r">  
                <TextField 
                    select  
                    size="small" 
                    label="Ejercicio"                 
                    {...register("exercise_id")} 
                    fullWidth 
                >
                {exercise.map((option) => (
                    <MenuItem key={option.value} value={option.id}>
                    {option.name}
                    </MenuItem>
                ))}
                
                </TextField>
                
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
