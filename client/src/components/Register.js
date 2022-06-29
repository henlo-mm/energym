import React, { Component } from 'react'
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import '../styles/login.css';
import UserDataService from "../services/user.service";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
            backgroundColor: '#50007F', 
            marginLeft: '27px', 
           
            '&:hover': {
              backgroundColor: '#8812CE' 
            },
          },
        },
      },
    },
  });
  
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    
    color: theme.palette.text.secondary,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    marginTop: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }));
const Item2 = styled(Paper)(({ }) => ({
    backgroundColor: '#50007F',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    marginTop: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
   
  }));


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
  
  export default class Register extends Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeMiddleName = this.onChangeMiddleName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeSecondLastName = this.onChangeSecondLastName.bind(this);
        this.onChangeDocumentNumber = this.onChangeDocumentNumber.bind(this);
        this.onChangeDocumentType = this.onChangeDocumentType.bind(this);
        this.onChangeBirthDate = this.onChangeBirthDate.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.newUser = this.newUser.bind(this);
        this.state = {
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
          submitted: false,
          birth_date: new Date(),
        };
      }
      onChangeFirstName(e) {
        this.setState({
          first_name: e.target.value
        });
      }
      onChangeLastName(e) {
        this.setState({
          last_name: e.target.value
        });
      }
      onChangeMiddleName(e) {
        this.setState({
          middle_name: e.target.value
        });
      }
      onChangeSecondLastName(e) {
        this.setState({
          second_last_name: e.target.value
        });
      }
      onChangeDocumentType(e) {
        console.log("Document Type!!");
        this.setState({
          document_type: e.target.value
        });
      }
      onChangeDocumentNumber(e) {
        this.setState({
          document_number: e.target.value
        });
      }
      onChangeBirthDate(e) {
        this.setState({
          birth_date: e.target.value
        });
      }
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        });
      }
      onChangePassword(e) {
        this.setState({
          password: e.target.value
        });
      }
      saveUser() {
        var data = {
          first_name: this.state.first_name,
          middle_name: this.state.middle_name, 
          last_name: this.state.last_name,
          second_last_name: this.state.second_last_name, 
          document_type: this.state.document_type,
          document_number: this.state.document_number,
          birth_date: this.state.birth_date,
          email: this.state.email,
          password: this.state.password,
        };
        UserDataService.create(data)
          .then(response => {
            this.setState({
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
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }
      newUser() {
        this.setState({
          id: null,
          first_name: "",
          middle_name: "", 
          last_name: "", 
          second_last_name: "", 
          document_type: "",
          document_number: "",
          birth_date: "",
          email: "",
          password: "",
          confirm_password: "",
        
        });
      }

      setStartDate = (birth_date) => {
        this.setState({birth_date});
    }

render () {
    const {birth_date} = this.state;

    return (
      <Container fixed>
          <Box sx={{ flexGrow: 1 }}>
              <Grid container xs={12} spacing={2}>
                  <Grid item xs={5}>
                      <Item2>
                          <Box
                              component="img"
                              className="img"
                              alt="The house from the offer."
                              src={require('../resources/images/register.png')}
                          />
                      </Item2>
                  </Grid>
                  <Grid item xs={6}  style={{  paddingLeft: "0px" }}>
                      <Item>
                          <div>
                              <h1>Crear cuenta</h1>
                          </div>
                          <Box 
                              component="form"
                              sx={{
                                  '& .MuiTextField-root': { m: 1, width: '30ch', marginLeft: 4}, 
                              }}
  
                          >
                              <Grid container xs={12}>
                                  <Grid item>
                                      <TextField
                                          className="inputRounded"
                                          label="Primer nombre"
                                          size="small"
                                          value={this.state.first_name}
                                          onChange={this.onChangeFirstName}
                                          name="first_name"
                                      />
                                  
                                  </Grid>
  
                                  <Grid item>
                                      <TextField
                                          className="inputRounded"
                                          label="Segundo nombre"
                                          size="small"
                                          value={this.state.middle_name}
                                          onChange={this.onChangeMiddleName}
                                          name="middle_name"
                                          
                                      />
                                  </Grid>
                              </Grid>
  
                              <Grid container xs={12}>
                              
                                  <Grid item>
                                  
                                      <TextField
                                          className="inputRounded"
                                          label="Primer apellido"
                                          size="small"
                                          value={this.state.last_name}
                                          onChange={this.onChangeLastName}
                                      />
                                  
                                  </Grid>
                                  <Grid item>
                                      <TextField
                                          className="inputRounded"
                                          label="Segundo apellido"
                                          size="small"
                                          value={this.state.second_last_name}
                                          onChange={this.onChangeSecondLastName}
                                          name="second_last_name"
                                      />
                                  </Grid>
                              </Grid>
                              <Grid container xs={12}>
                                  <Grid item>
                                      <TextField
                                         select
                                          className="inputRounded"
                                          label="Tipo de documento"
                                          size="small"
                                          name="document_type"
                                          value={this.state.document_type}
                                          onChange={this.onChangeDocumentType}
                                      >
                                      {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                   
                                      </TextField>
                                  </Grid>
                                  <Grid item>
                                      <TextField
                                          className="inputRounded"
                                          label="Número de documento"
                                          size="small"
                                          name="document_number"
                                          value={this.state.document_name}
                                          onChange={this.onChangeDocumentNumber}
                                      />
                                  </Grid> 
                              </Grid>
                              <Grid container xs={12}>
                              <Grid item>
                              <LocalizationProvider dateAdapter={AdapterDateFns}>
                              
                                  <DatePicker
                                      disableFuture
                                      label="Fecha de nacimiento"
                                      openTo="year"
                                      views={['year', 'month', 'day']}
                                      selected={birth_date}
                                      onChange={this.setStartDate}
                                      renderInput={(params) => <TextField fullWidth={true} size="small"  className="inputRounded" {...params} />}
                                  />
                              
                              </LocalizationProvider>
                              </Grid>
                              
                              </Grid>
                              <Grid container xs={12}>
                              
                                  <Grid item>
                                      <TextField
                                          className="inputRounded"
                                          label="Correo electrónico"
                                          size="small"
                                          name="email"
                                          value={this.state.email}
                                          onChange={this.onChangeEmail}
                                      />
                                  </Grid>                          
                              </Grid>
                              <Grid container xs={12}>
                              
                              <Grid item>
                                  <TextField
                                      className="inputRounded"
                                      label="Contraseña"
                                      type="password"
                                      autoComplete="current-password"
                                      size="small"
                                      name="confirm_password"
                                      value={this.state.confirm_password}
                                      onKeyUp={handleValidation}
                                      onChange={this.onChangePassword}
                                  
                                  />
                              </Grid>
                              </Grid>
                              <Grid container xs={12}>
                              
                              <Grid item>
                                  <TextField
                                      className="inputRounded"
                                      label="Confirmar contraseña"
                                      type="password"
                                      autoComplete="current-password"
                                      size="small"
                                  />
                              </Grid>                       
                              </Grid>
                              <Grid container xs={12}>
                              
                                  <Grid item sx={{ m: 1 }}>
                                      <ThemeProvider theme={theme}>
                                          <Button variant="contained" onClick={this.saveUser}> REGISTRARSE </Button>                         
                                      </ThemeProvider>
                                  </Grid>
                              </Grid>
                          </Box>
                      </Item>
                  </Grid>
              </Grid>
          </Box>
      </Container>
    )
    }
}

