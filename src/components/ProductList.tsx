import { Component, ContextType, CSSProperties } from 'react';
import { CartContext } from '../contexts/CartContext';

const products = [
    'Morötter',
    'Potatis',
    'Spenat',
    'Koriander',
    'Tomater'
];

class ProductList extends Component {
    context!: ContextType<typeof CartContext>
    static contextType = CartContext;

    render() {
        const { addToCart } = this.context;
        return (
            <div style={rootStyle}>
                {products.map((product, index) => (
                    <div key={ index } onClick={() => addToCart(product)}>
                        {product}
                    </div>
                ), )}
            </div>
        );
    }
}

const rootStyle: CSSProperties = {
    padding: '1rem',
    cursor: 'pointer'
}

export default ProductList;