import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import SetService from "../services/set.service";
import { Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CreateSet from './CreateSet';
import ExerciseService from '../services/exercise.service';
import UserService from '../services/user.service';


export default function Set() {

 

    const [data, setData] = useState([]);

    useEffect(() => {
        setsData();

    }, []);
    
    const setsData = async () => {
    
        await SetService.getAllSet()
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

    const [user, setUser] = useState([]);

    useEffect(() => {
        clientData();
    }, []);

    const clientData = async () => {

        await UserService.getAllClient()
            .then(response => {
            
            
            setUser(response.data)
            
            })
            .catch(e => {
                console.log(e);
            });
    };


    const columns = [
        { label: "id", id: "id", hidden: true },
        { label: "Repeticiones",  id: 'numReps'},
        { label: "Peso",  id: 'weight' },
        { label: "Nombre", id: "name" },
        { label: "Series", id: "series" },
        { label: "Usuario", id: "user_id", format: (value) => {
            if (typeof value == 'number' ) {
    
                let fullName = "";
    
                user.map((option) => (
                   fullName =  option.first_name + ' ' + option.last_name
                ))
                
                return fullName;
            }
        } },
        { label: "Instructor", id: "instructor_id", format: (value) => {
            if (typeof value == 'number' ) {
    
                let fullName = "";
    
                instructor.map((option) => (
                   fullName =  option.first_name + ' ' + option.last_name
                ))
                
                return fullName;
            }
        } },
        { label: "Ejercicio", id: "exercise_id", format: (val) => {
            if (typeof val == 'number' ) {
    
                let name = "";
                
                exercise.map((option) => (
                  name =  option.name
                ))
                
                return name;
            }
        } }
    ];


    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleRowDelete = (oldData) => {
        
        SetService.deleteSet(oldData.id)
            .then(res => {
                const del = data.filter(dat => oldData.id !== dat.id);
                setData(del);
            
            })
            .catch(error => {
            
            })
    }

  return (
    <Grid container>
      <Container maxWidth="xl" className="container-login" > 
        <Grid container direction={'column'} >

          <Grid item xs={2} align="right" sx={{ marginTop: '100px' }}>
          
                <CreateSet />
          </Grid>

            <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '50px' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                            <TableCell>
                                Actions 
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((dat) => {
                            return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={dat.id}>
                                {columns.map((column) => {
                                const value = dat[column.id];
            
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number'
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                );
                                })}

                                <TableCell>
                                    <Button aria-label="delete" onClick={ () => handleRowDelete(dat)}>
                                        <DeleteIcon />
                                    </Button>
                                    <Button aria-label="edit" >
                                        <EditIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                            
                            );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                </Paper>
            </Grid>
        </Container>
    </Grid>
  );
}
