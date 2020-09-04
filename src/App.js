import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
