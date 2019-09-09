import React from 'react';
import Main from './main';
import Nav from './nav';
import '../sass/index.scss';

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