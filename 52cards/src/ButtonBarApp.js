import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './ButtonBarApp.css'
import { Switch, Route, Link } from 'react-router-dom'
import MoreIcon from '@material-ui/icons/MoreVert';
import LongMenu from './LongMenu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar><Link to="/">
          <IconButton>
            <img src="/poker.png" alt=""/>
          </IconButton>
        </Link>
          <Typography variant="h6" className={classes.title}>
           52 Cards
          </Typography>
          <LongMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}