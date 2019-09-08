import React from 'react';

class Nav extends React.Component{
    render() {
        return(
            <nav className='nav-bar centered'>
                <div >
                    <div className='nav-logo'></div>
                    <div className='nav-search-bar'>
                    <div className='nav-seach-input'>What are you trying to find?</div>
                    <div className='nav-seach-button'></div>
                    </div>
                    <div className='nav-icons'></div>
                </div>
            </nav>
        )
    }
}

export default Nav;