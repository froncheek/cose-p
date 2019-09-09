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
                        <table>
                            <tr>
                                    <td><i className="fas fa-plug fa-8x"></i><div>ENERGY</div></td>
                                    <td><i className="fas fa-tractor fa-8x"></i><div>AGRICULTURE</div></td>
                                    <td><i className="fas fa-gavel fa-8x"></i><div>METAL</div></td>
                                    <td><i className="fas fa-chart-line fa-8x "></i><div>OTHERS</div></td>
                            </tr>
                        </table>
                        {/*<section><i className="fas fa-plug fa-8x"></i><div>ENERGY</div></section>
                        <section><i className="fas fa-tractor fa-8x"></i><div>AGRICULTURE</div></section>
                        <section><i className="fas fa-gavel fa-8x"></i><div>METAL</div></section>
        <section><i className="fas fa-chart-line fa-8x "></i><div>OTHERS</div></section>*/}
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