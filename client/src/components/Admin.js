import { Box, Container, Grid } from '@mui/material'
import React from 'react'

function Admin() {
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
                  src={require('../resources/images/coaches.png')}
                /> 
              </Grid>        
          </Grid>
        </Container>
      </Grid>
  )
}

export default Admin