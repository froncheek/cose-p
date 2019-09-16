import React from 'react';
import Main from './Main';
import Nav from './Navigation';
import {CssBaseline} from '@material-ui/core';

class App extends React.Component{
    render() {
        return(
        <React.Fragment>
            <CssBaseline/>
            <Nav />
            <Main />
        </React.Fragment>
        )
    }
}

export default App;