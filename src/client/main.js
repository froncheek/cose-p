import React from 'react';
import ItemContainer from './ItemContainer';
import Item from './Item';
import CategoryContainer from './CategoryContainer';
import Category from './Category';


class Main extends React.Component{
    render() {
        return(
            <main className="centered">
                <article>
                    <section className="banner">
                        <div className="categories-title">CATEGORIES</div>
                        <CategoryContainer>
                            <Category>Cat 1</Category>
                            <Category>Cat 1</Category>
                            <Category>Cat 1</Category>
                            <Category>Cat 1</Category>
                        </CategoryContainer>
                    </section>
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