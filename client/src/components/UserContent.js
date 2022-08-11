import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../styles/user_board.css';
import { Grid } from '@mui/material';


const UserContent = () => {

  return (
      <Grid container>
        <Container maxWidth="xl" className="container-login" > 
          <Grid container>
              <Grid 
                item 
                align="center" 
                xs={ 12 }
              > 
                <Box
                  component="img"
                  className="img-user"
                  alt="The house from the offer."
                  src={require('../resources/images/user_dash.png')}
                /> 
              </Grid>        
          </Grid>
        </Container>
      </Grid>
    
  );
};
export default UserContent;
