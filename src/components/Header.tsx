import React, { Component, CSSProperties } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartContext } from '../contexts/CartContext';

class Header extends Component {

    render() {
        return (
            <CartContext.Consumer>
                {({ cart }) => {
                    return (
                        <header style={headerStyle}>
                            <h1 style={headerItem}>Blad och baljor</h1>
                            <div style={headerItem}>
                                <div>
                                  <ShoppingCartIcon style={{color: 'white'}}/>  
                                </div>
                                <h2>{cart.length}</h2>
                            </div>
                        </header>
                    )
                }}
            </CartContext.Consumer>
            );
        }
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