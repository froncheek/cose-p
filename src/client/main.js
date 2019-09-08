import React from 'react';
import ItemContainer from './ItemContainer';
import Item from './Item';

class Main extends React.Component{
    render() {
        return(
            <main className="centered">
                <article>
                    <section className="banner centered"><h1>Banner</h1></section>
                    <ItemContainer>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </ItemContainer>
                    <ItemContainer>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </ItemContainer>
                </article>
            </main>
        )
    }
}

export default Main;