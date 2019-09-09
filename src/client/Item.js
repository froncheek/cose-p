import React from 'react';

class Item extends React.Component{
    render() {
        return(
            <div className="item">
                <div className="item-image"></div>
                <div className="item-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            </div>
        )
    }
}

export default Item;