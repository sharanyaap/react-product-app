// Header.js
import React from 'react';

import {NavLink} from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

// functional component
// presentation component
// react calls this function, get virtual dom
// create virtual whenever it got called
function Header(props) {
    return (
        <div>
                <h2>{props.appTitle}</h2>

                <NavLink to="/" className="button"
                         activeClassName="success"
                         exact
                > Home
                </NavLink>

                <NavLink to="/products" className="button"
                         activeClassName="success"
                > Products
                </NavLink>

                <NavLink to="/cart" className="button"
                         activeClassName="success"
                > Cart
                </NavLink>


                <NavLink to="/redux" className="button"
                         activeClassName="success"
                > Redux Cart
                </NavLink>


                <NavLink to="/about" className="button"
                         activeClassName="success"
                > About
                </NavLink>

                <NavLink to="/contact" className="button"
                         activeClassName="success"
                > Contact
                </NavLink>



            {/* FIXME
             <button onClick={props.auth.login}>
             Login
             </button>
             */}



                <button  onClick={props.auth.logout}>
                        Logout
                </button>







                <hr />
        </div>
    )
}

export default withAuth(Header)