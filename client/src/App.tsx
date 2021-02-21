import React from 'react';
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme";
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
