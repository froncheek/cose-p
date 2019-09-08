import React from 'react';
import Supplies from './Supplies';

class Main extends React.Component{
    render() {
        return(
            <main className="centered">
                <article>
                    <Supplies />
                </article>
            </main>
        )
    }
}

export default Main;