import React from 'react';

class CategoryContainer extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <section className="category-container">
                <div className='category-wrap'>
                    {this.props.children}
                </div>
            </section>
        )
    }
}

export default CategoryContainer;