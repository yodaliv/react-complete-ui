import React from 'react';
import './App.css';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import { createTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126'
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526'
    }
  }
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header/>
      </div>
      <CssBaseline />
    </ThemeProvider>
    
  );
}

export default App;
