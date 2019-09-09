import React from 'react';
import ItemContainer from './ItemContainer';
import Item from './Item';
import '../sass/main.scss';
//import CategoryContainer from './CategoryContainer';
//import Category from './Category';

class Main extends React.Component{
    render() {
        return(
            <main className="centered">
                <article >
                    <section className="banner">
                        <h4 className="categories-title">CATEGORIES</h4>
                        <section className="category-container">
                            <div>
                                <i className="fas fa-plug fa-6x"></i><div>ENERGY</div>
                            </div>
                            <div>
                                <i className="fas fa-tractor fa-6x"></i><div>AGRICULTURE</div>
                            </div>
                            <div><i className="fas fa-gavel fa-6x"></i><div>METAL</div></div>
                            <div><i className="fas fa-chart-line fa-6x "></i><div>OTHERS</div></div>
                        </section>
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