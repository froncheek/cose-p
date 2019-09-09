import React from 'react';
import ItemContainer from './ItemContainer';
import Item from './Item';
import '../sass/nav.scss';

class Nav extends React.Component{
    render() {
        return(
            <nav className='nav-bar centered'>
                <section className='nav-logo'>
                </section>
                <section className='nav-search-bar-wrap'>
                    <div className="wrap">
                        <div className="search">
                            <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
                            <button type="submit" className="searchButton">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </section>
                <section className='nav-icons'>
                    <section>
                        <div className="cartButton">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                    </section>
                   
                    <section>
                        <div className="cartButton user">
                            <i className="fas fa-user"></i>
                        </div>
                    </section>
                </section>
            </nav>
        )
    }
}

export default Nav;