import React, { CSSProperties } from 'react';
import CartProvider from '../contexts/CartContext';
import Header from './Header'
import Main from './Main'

function Layout() {
    return (
        <div style={ layoutStyle }>
            <CartProvider>
                <Header />
                <Main />
            </CartProvider>
        </div>
    )
}

const layoutStyle: CSSProperties = {
    height: '100%',
}

export default Layout;