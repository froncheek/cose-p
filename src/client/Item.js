import React from 'react';

class Item extends React.Component{
    render() {
        return(
            <div className="item">
                <div className="item-image"></div>
                <div className="item-details">Details</div>
            </div>
        )
    }
}

export default Item;