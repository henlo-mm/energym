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
import UserService from "../services/user.service";
import ExerciseService from "../services/exercise.service";
import { Grid } from '@mui/material';
import { Container } from '@mui/system';

export default function SetUser() {

   

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
    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
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

    const columns = [
        { label: "Repeticiones",  id: 'numReps'},
        { label: "Peso",  id: 'weight' },
        { label: "Nombre", id: "name" },
        { label: "Series", id: "series" },
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

  return (
    <Grid container>
      <Container maxWidth="xl" className="container-login" > 
        <Grid container direction={'column'}>
            <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '200px' }}>
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
