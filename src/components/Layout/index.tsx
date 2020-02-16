import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Divider,
  Drawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CloseIcon from '@material-ui/icons/Close';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    menuButton: {
      marginRight: "20px",
    },
    title: {
      flexGrow: 1,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontSize: '14px',
    },
    toolBar: {
      color: '#fff',
      backgroundColor: '#666666',
      minHeight: '48px',
      maxHeight: '48px'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(6),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7.5),
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(0, 1),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    footer: {
      display: 'flex',
      height: '100%',
      justifyContent: 'flex-end',
      flexDirection: 'column',
    },
    overflow: {
      overflow: 'hidden'
    },
    children: {
      marginLeft: theme.spacing(7.5),
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(6),
      },
      width: `calc(100% - ${theme.spacing(6)}px)`,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${theme.spacing(7.5)}px)`,
      },
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    childrenShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
  }),
);

interface LayoutProps {
  title: string
  children: any,
}

export const Layout: FC<LayoutProps> = ({ title, children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="sticky"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar classes={{ root: classes.toolBar }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.overflow, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawer}>
            {open ? <CloseIcon/> : <MenuIcon/>}
          </IconButton>
        </div>
        <Divider/>
        <List>
          {['Home', 'Schedule', 'News', 'Home Works'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
        <List className={classes.footer}>
          <ListItem button>
            <ListItemIcon>
              <AccountBoxIcon/>
            </ListItemIcon>
            <ListItemText primary="Info"/>
          </ListItem>
        </List>
      </Drawer>
      <div className={clsx(classes.children, { [classes.childrenShift]: open })}>
        {children}
      </div>
    </div>
  );
};