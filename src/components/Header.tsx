import React, { CSSProperties } from 'react';


function Header() {
    return (
        <div style={ headerStyle }>
            <h1 style={headerItem}>Blad och baljor webshop</h1>
        </div>
    )
}

const headerStyle: CSSProperties = {
    background: 'linear-gradient(180deg, #616161, #000000)', 
    height: '5rem',
    display: 'flex',
    padding: '0 1rem',
    alignItems: 'center',
    justifyContent: 'center'
}

const headerItem: CSSProperties = {
    fontSize: '2rem',    
    margin: '0',
    padding: '0',
    display: 'flex',
    color: 'white'
}

export default Header;