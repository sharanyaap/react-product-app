// App.js
// whenever jsx used, import "React"
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Loadable from 'react-loadable';


// import CustomImplicit from './components/CustomImplicit';

// import Cart from './cart/components/Cart';

import {Route, Switch} from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import ReduxCart from '../app/product/containers/Cart'


// functional component
// shown as place holder when dynamic code is downloading
function Loading() {
    return (
        <div>
            <h2>Loading....</h2>
        </div>
    )
}

const LoadableCart = Loadable({
    // import is a special function, part of browser specifications
    loader: () => import('./cart/components/Cart'),
    loading: Loading,
});

export default class App extends React.Component {

    // keyword
    // create virtual dom and return virtual dom view
    // react framework shall call render function
    // when render called, we create v.dom
    // react shall diff the v.doms
    render() {
        // JSX, v.dom
        return (
            <div>
                <Header appTitle="Product App" />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <SecureRoute path="/cart" component={LoadableCart} />

                    <Route path="/cart" component={LoadableCart} />

                    <Route path="/redux" component={ReduxCart} />

                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/implicit/callback" component={ImplicitCallback} />
                    {/* <Route path="/implicit/callback" component={CustomImplicit} /> */}
                    <Route path='*' component={NotFound} />
                </Switch>


                <Footer appTitle="Product app"
                        year={2018}
                        address = { {city: 'Bangalore', state: 'KA'}  }

                />
            </div>
        )
    }
}