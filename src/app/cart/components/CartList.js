// CartList.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

//TODO: PureComponent

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }

    //TODO: shouldComponentUpdate

    shouldComponentUpdate(nextProps, nextState) {
        console.log('cart list should update');
        console.log('nextProps', nextProps);
        console.log('current props', this.props)

        if (nextProps.items != this.props.items) {
            return true; // calls render
        }

        return false; // doesn't call render
    }

    render() {
        console.log("CartList Render");

        let {items} = this.props;

        return (
            <div>
                <h2>Cart List</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* TODO props items map with CartItem */ }
                    {/* key is react keyword property
                     helps react to tract object existance
                     */}
                    {
                        items.map (item => (
                            <CartItem item={item}
                                      key={item.id}

                                      removeItem={this.props.removeItem}
                                      updateItem={this.props.updateItem}

                            />
                        ))
                    }

                    </tbody>
                </table>
            </div>
        )
    }
}

CartList.defaultProps = {

}

CartList.propTypes = {
    items: PropTypes.array.isRequired, //mandatory
    removeItem: PropTypes.func.isRequired,
    updateItem: PropTypes.func.isRequired
}