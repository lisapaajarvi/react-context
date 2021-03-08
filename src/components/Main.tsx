import React from 'react';
import DetailView from './DetailView';
import MasterView from './MasterView';
import ProductList from './ProductList';

function Main() {
    return(
        <div>
            <ProductList/>
            <MasterView/>
            <DetailView/>
        </div>
    );
}

export default Main;