// Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {id: 1, name: 'P1', price: 100, qty: 5}
            ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true
        }
    }

    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        // shallow copy: clone existing items into new array
        const items = [...this.state.items, item];
        this.setState({
            items
        })

        this.recalculate(items);

    }

    // this function to be called by CartItem
    removeItem = (id) => {
        //TODO
        console.log('Cart removeItem ', id)

        // return all items except the one to be removed, new array
        const items = this.state
            .items.filter(item => item.id != id);

        this.setState({
            items // items: items
        })
        this.recalculate(items);
    }

    updateItem = (id, qty) => {
        //TODO

        // two level immutable
        // for items array level, item object level
        // create a new array
        let items = this.state.items.map (item => {
            if (item.id == id) {
                // create new object, update qty
                return {...item, qty}
            }
            return item;
        })

        this.setState({
            items
        })

        this.recalculate(items)

    }

    empty = () => {
        //TODO
        this.setState({
            items: []
        })

        this.recalculate([]);
    }

    //dummy
    refresh = () => {
        this.setState({
            flag: true
        })
    }

    // derived data from state
    recalculate(items) {
        let count = 0,
            amount = 0;

        for (let item of items) {
            amount += item.price * item.qty;
            count += item.qty;
        }

        this.setState({
            amount,
            count
        })
    }

    //creation life cycle:
    //componentWillMount
    // called after constructor, before first render
    // called only once per object life
    componentWillMount() {
        console.log('Cart componentWillMount')
        this.recalculate(this.state.items);

        // calling setState on same callstack
        // doesn't call render multiple times
        this.setState({flag: true});
        this.setState({flag: false});

    }

    componentDidMount() {
        fetch('https://mdiutav06k.execute-api.us-west-2.amazonaws.com/prod')
            .then (response => response.json())
            .then (movies => {
                console.log('Movies ', movies)
            })
    }


    render() {
        console.log("Cart render")
        return (
            <div>
                <h2>Cart</h2>

                <button onClick={this.addItem}>
                    Add Item
                </button>


                <button onClick={this.empty}>
                    Empty
                </button>

                <button onClick={this.refresh}>
                    Refresh
                </button>


                <CartList  items={this.state.items}
                           removeItem={this.removeItem}
                           updateItem={this.updateItem}
                />

                <CartSummary amount={this.state.amount}
                             count = {this.state.count}
                />

            </div>
        )
    }
}


Cart.defaultProps = {

}

Cart.propTypes = {

}