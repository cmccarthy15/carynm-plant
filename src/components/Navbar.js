import React from 'react';

const Navbar = props => {
    const { view, changeView } = props;
    return (
        <div className="simple-flex-row top">
            <div onClick={() => changeView('home')}> Plant 🌱 Match </div>
            <div className={view === 'login' ? 'btn active' : 'btn inactive'} onClick={() => changeView('login')}>Login</div>
        </div>
    )
}

export default Navbar;