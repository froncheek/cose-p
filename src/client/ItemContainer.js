import React from 'react';

class ItemContainer extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section className="item-container">
                <h3>Items</h3>
                <div>
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default ItemContainer;