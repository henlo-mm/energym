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
import UserService from "../services/user.service";
import { Button, Grid } from '@mui/material';
import { Container } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CreateUser from './CreateUser';


export default function UserList() {

    const columns = [
        { label: "id", id: "id", hidden: true },
        { label: "Name",  id: 'first_name'},
        { label: "Last name",  id: 'last_name' },
        { label: "Document Type", id: "document_type" },
        { label: "Document Number", id: "document_number" },
        { label: "Birthdate", id: "birth_date" },
        { label: "Role", id: "role_id", format: (value) => {
            if (value === 1 ) {
            return "Cliente"
            }else if (value === 2){
            return  "Instructor"
            }else if (value === 3) {
            return "Administrador"
            }
        } },
        { label: "email", id: "email" }
    ];

    const [data, setData] = useState([]);

    useEffect(() => {
        userData();

    }, []);
    
    const userData = async () => {
    
        await UserService.getAllUser()
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

    const handleRowDelete = (oldData) => {
        
        UserService.deleteUser(oldData.id)
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
          
                <CreateUser />
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
