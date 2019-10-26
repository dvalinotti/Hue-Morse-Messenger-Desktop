import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Register from '.\\views\\Register'
import './App.css';
import { ThemeProvider } from 'emotion-theming';
import theme from './config/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <Route path="/" component={ Register } />

        </HashRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
