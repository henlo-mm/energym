import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import MaterialTable from "material-table";
import UserService from "../services/user.service";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';

export default function ListUser() {



  const handleRowUpdate = (newData, oldData, resolve) => {
    UserService.updateUser(newData.id, newData)
      .then(res => {
        const dataUpdate = [...data];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        setData([...dataUpdate]);
        resolve()
        
      })
      .catch(error => {
        
        resolve()
    })
   
  }

  const handleRowDelete = (oldData, resolve) => {
    UserService.deleteUser(oldData.id)
      .then(res => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        resolve()
      })
      .catch(error => {
       
        resolve()
      })
  }
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const defaultMaterialTheme = createTheme();


  const columns = [
    { title: "id", field: "id" },
    { title: "FullName", render: rowData => rowData.first_name + ' ' + rowData.middle_name },
    { title: "Last name",  render: rowData => rowData.last_name + ' ' + rowData.second_last_name },
    { title: "Document Type", field: "document_type" },
    { title: "Document Number", field: "document_number" },
    { title: "Birthdate", field: "birth_date" },
    { title: "Role", render: rowData => {
      if (rowData.role_id === 1 ) {
        return "Cliente"
      }else if (rowData.role_id === 2){
        return  "Instructor"
      }else if (rowData.role_id === 3) {
        return "Administrador"
      }
    } },
    { title: "Email", field: "email" }
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    userData();

  }, []);
  
  const userData = () => {
    
    UserService.getAllUser()
      .then(response => {
        console.log(response)
        setData(response.data)
      
      })
      .catch(e => {
        console.log(e);
    });
  };

  return (
    <Grid container>
      <Container maxWidth="xl" className="container-login" > 
        <Grid container direction={'column'} >
          <Grid item xs={2} align="right" sx={{ marginTop: '100px' }}>
            <Button variant="contained">Crear</Button>
          </Grid>
          <Paper sx={{ width: '100%', marginTop: '50px' }}>
          <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
              columns={columns}
              data={data}
              
              options={{
                search: false,
                paging: false,
                showTitle: false,
                sorting: false,
                toolbar: false,
              }}
              
              editable={{
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                    handleRowUpdate(newData, oldData, resolve);
              }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  handleRowDelete(oldData, resolve)
                }),
              }}
            />
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </ThemeProvider>
        
          </Paper>
        </Grid>
      </Container>
    </Grid>
  );
}
