import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import '../styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Avatar from '@mui/material/Avatar';

export default function Footer() {
  return (
    <div>
        <Grid container className="footer">
            <Grid item >
                <List style={{ marginTop: `auto` }} >
                        <ListItem>
                            <ListItemButton>Nombre del Programa </ListItemButton>
                            
                        </ListItem>
                        <ListItem>
                            <ListItemButton className="logo">
                                <img
                                    className="icon"
                                    src={require('../resources/images/riendo.png')} 
                                />
                        </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton>
                                <FontAwesomeIcon icon={faTwitter} />
                            </ListItemButton>
                            <ListItemButton>
                                <FontAwesomeIcon icon={faFacebook} />
                            </ListItemButton>
                            <ListItemButton>
                                <FontAwesomeIcon icon={faInstagram} />
                            </ListItemButton>
                            <ListItemButton>
                                <FontAwesomeIcon icon={faYoutube} />
                            </ListItemButton>
                        </ListItem>
                </List>

            </Grid>
            <Grid item >
                <List style={{ marginTop: `auto`, marginBottom: '4'}} >
                        <ListItem>
                            <ListItemButton>Footer</ListItemButton>
                            
                        </ListItem>
                        <ListItem>
                            <ListItemButton>Footer</ListItemButton>
                        
                        </ListItem>
                        <ListItem>
                            <ListItemButton>Footer</ListItemButton>
                            
                        </ListItem>
                </List>

            </Grid>
            <Grid item >
                <List style={{ marginTop: `auto` }} >
                        <ListItem>
                            <ListItemButton>Footer</ListItemButton>
                            
                        </ListItem>
                        <ListItem>
                            <ListItemButton>Footer</ListItemButton>
                        
                        </ListItem>
                        <ListItem>
                            <ListItemButton>Footer</ListItemButton>
                            
                        </ListItem>
                </List>

            </Grid>
            <Grid item >
                <List style={{ marginTop: `auto` }} >
                        <ListItem>
                            <ListItemButton>Footer</ListItemButton>
                            
                        </ListItem>
                        <ListItem>
                            <ListItemButton>Footer</ListItemButton>
                        
                        </ListItem>
                        <ListItem>
                            <ListItemButton>Footer</ListItemButton>
                            
                        </ListItem>
                </List>

            </Grid>
            <Grid item >
                <List style={{ marginTop: 'auto', marginLeft: 'auto' }} >
                        <ListItem>
                            <ListItemButton>Footer</ListItemButton>
                            
                        </ListItem>
                        <ListItem>
                            <ListItemButton>Footer</ListItemButton>
                        
                        </ListItem>
                        <ListItem>
                            <ListItemButton>Footer</ListItemButton>
                            
                        </ListItem>
                </List>

            </Grid>
            <Grid item className="copyrigth">
                <p  className="copyrigth-txt">© 2022, EnergymPoint</p>
            </Grid>
        </Grid>
    </div>
  )
}
