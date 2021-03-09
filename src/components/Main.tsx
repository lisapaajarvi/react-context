import React from 'react';
import { Route } from 'react-router-dom';
import DetailView from './DetailView';
import MasterView from './MasterView';
import ProductList from './ProductList';

function Main() {
    return(
        <div>
            <Route exact path="/">
                <ProductList/>
            </Route>


            <Route path="/detalj" component={DetailView}/>
            <Route path="/produkter" component={MasterView}/>
        </div>
    );
}

export default Main;