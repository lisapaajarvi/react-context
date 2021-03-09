import { Component, ContextType, CSSProperties } from 'react';
import { CartContext } from '../contexts/CartContext';
import Grid from '@material-ui/core/Grid';

const products = [
    'Morötter',
    'Potatis',
    'Spenat',
    'Koriander',
    'Tomater',
    'Rödbetor',
    'Krusbär',
    'Vitlök',
    'Persilja'
];

class ProductList extends Component {
    

    context!: ContextType<typeof CartContext>
    static contextType = CartContext;


    render() {
        const { addToCart } = this.context;

        return (
            <div >
                <Grid container spacing={4} style={rootStyle}>
                    {products.map((product, index) => (
                    <Grid item xs={12} sm={6} md={3} style= {itemStyle} key={ index } onClick={() => addToCart(product)}>
                        <p>{product}</p>
                    </Grid>
                    ), )}
                </Grid>
            </div>
        );
    }
}

const rootStyle: CSSProperties = {
    padding: '1rem',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const itemStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    background: 'green',
    textAlign: 'center',
    border: '2px solid black',
    margin: '0.1rem'

}

export default ProductList;