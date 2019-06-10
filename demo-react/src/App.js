import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import NavBar from './navbar';


class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="h5"
              color="inherit"
            >
              My header
           </TypoGraphy>
            <TypoGraphy variant="h5"
              color="inherit"
            >
              <NavBar></NavBar>
            </TypoGraphy>
          </Toolbar>
        </AppBar>

      </div>
    );
  }
}
export default App;