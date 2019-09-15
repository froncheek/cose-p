import React from 'react';
import Main from './main';
import Nav from './nav';

class App extends React.Component{
    render() {
        return(
        <React.Fragment>
            <Nav />
            <Main />
        </React.Fragment>
        )
    }
}

export default App;