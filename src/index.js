import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: "rgb(35,31,32)",
  },
});

const MuiThemedApp = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(<MuiThemedApp />, document.getElementById('root'));
