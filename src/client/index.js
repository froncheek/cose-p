import React from 'react';
import Main from './main';
import Nav from './nav';

class App extends React.Component{
    render() {
        return(
            <div id="root">
                <Nav />
                <Main />
            </div>
        )
    }
}

export default App;