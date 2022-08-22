import React from "react";
import {Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import Button, { ButtonProps } from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MailIcon from '@mui/icons-material/Mail';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';



function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export const Sidebar = () => {
  const [windowSize, setWindowSize] = React.useState(getWindowSize())
  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    // color: theme.palette.getContrastText(red[500]),
    // backgroundColor: red[500],
    width: windowSize.innerWidth > 1200 ? 160 : 30,
    '&:hover': {
      backgroundColor: red[700],
    },
  }));
  React.useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  console.log(windowSize)
  return (
    <Box
      component="main"
      sx={{
        height: '100vh',
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
        >
          <Grid
            item
            xl={2}
            lg={2}
            sm={2}
            xs={2}
            sx={{
              height: '100vh',
              background: '#212121',
              minWidth: 192,
            }}
          >
            <Grid
              id={'header'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '20vh'
              }}
            >
              <Grid
                sx={{
                  width: 30, height: 5, background: 'red', display: 'flex', position: 'absolute', marginRight: 12, marginTop: 7
                }}
              ></Grid>
              <Grid
                sx={{
                  width: 30, height: 5, background: 'red', display: 'flex', position: 'absolute', marginRight: 15.1, marginTop: 3.9, transform: 'rotate(90deg)'
                }}
              ></Grid>
              <Typography color={'red'}>
                Selfie
              </Typography>
              <Grid
                sx={{
                  width: 30, height: 5, background: 'red', display: 'flex', position: 'absolute', marginLeft: 14.1, marginBottom: 7
                }}
              ></Grid>
              <Grid
                sx={{
                  width: 30, height: 5, background: 'red', display: 'flex', position: 'absolute', marginLeft: 17.3, marginBottom: 3.8, transform: 'rotate(90deg)'
                }}
              ></Grid>

            </Grid>
            <Grid
              item
              id={'content'}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <List dense={false}>
                {[
                  {name: 'one', icon: <HomeIcon sx={{color: 'red'}}/>},
                  {name: 'two', icon: <PersonIcon sx={{color: 'red'}}/>},
                  {name: 'three', icon: <ListIcon sx={{color: 'red'}}/>},
                  {name: 'four', icon: <BusinessCenterIcon sx={{color: 'red'}}/>},
                  {name: 'five', icon: <MailIcon sx={{color: 'red'}}/>}
                ].map((item: any) => (
                  <ListItem key={item.name} sx={{display: 'flex', justifyContent: 'center',}}>
                    <ColorButton>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    {windowSize.innerWidth > 1200 && <ListItemText
                      primary={item.name}
                      secondary={false ? 'Secondary text' : null}
                      sx={{color: 'white'}}
                    />}
                    </ColorButton>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>


    // <Box sx={{height: '100vh'}}>
    //   <Grid sx={{height: '100%'}}>
    //     <Grid xs={2} sx={{background: 'red'}}>
    //
    //     </Grid>
    //
    //   </Grid>
    // </Box>
  )
}
