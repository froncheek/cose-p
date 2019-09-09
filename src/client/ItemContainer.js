import React from 'react';

class ItemContainer extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section className="item-container">
                <h4 className="categories-title">ITEMS</h4>
                <div>
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default ItemContainer;