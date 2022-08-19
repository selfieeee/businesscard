import React from "react";
import { styled, Theme, CSSObject, ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Grid} from "@mui/material";

const drawerWidth = '20%';
const drawerMinWidth = 150

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  minWidth: drawerMinWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    minWidth: drawerMinWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          marginLeft: '5%',
          backgroundColor: "#212121",
          color: "red",
          boxSizing: "border-box",
          width: drawerWidth,
          minWidth: drawerMinWidth
        }
      }
    }
  }
});

export const Sidebar = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex'}}>
        <Drawer variant="permanent" open={open}>
          {/*<DrawerHeader>*/}
          {/*  {open && <IconButton onClick={handleDrawerClose}>*/}
          {/*    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}*/}
          {/*  </IconButton>}*/}
          {/*  {!open && <IconButton*/}
          {/*    color="inherit"*/}
          {/*    aria-label="open drawer"*/}
          {/*    onClick={handleDrawerOpen}*/}
          {/*    edge="start"*/}
          {/*    sx={{*/}
          {/*      marginRight: 0.5,*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <MenuIcon />*/}
          {/*  </IconButton>}*/}
          {/*</DrawerHeader>*/}
          <Grid sx={{display: 'flex', justifyContent: 'center', minWidth: 150}} id={'myDiv'}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          </Grid>
        </Drawer>
      </Box>
    </ThemeProvider>
    // <Box sx={{ width: 300, height: 400, background: '#fff', marginLeft: 20}}>
    //
    // </Box>
  )
}
