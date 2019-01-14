// About.js
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {addItem, empty} from '../product/state/actions';

// React.Component == Component

export default class About extends Component {

    // store is passed by Provider (index.js) as context
    static contextTypes = {
        store: PropTypes.object
    }


    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        const action = addItem(item)
        // context is keyword
        this.context.store.dispatch(action)
    }

    empty = () => {
        const action = empty(); // calls action creator create empty action
        this.context.store.dispatch(action)
        console.log('Done Dispatch ');
    }

    componentDidMount() {
        this.unsubscribeFn = this.context.store.subscribe ( () => {
            console.log('About Susbcribe ');
            this.forceUpdate();
        })
    }

    componentWillUnmount() {
        this.unsubscribeFn(); // remove subscription of this component
    }

    render() {

        const state = this.context.store.getState()
        const length = state.items.length;

        return (
            <div>
                <h2>About - {length} </h2>

                <button onClick={this.addItem}>
                    Add Item
                </button>


                <button onClick={this.empty}>
                    Empty
                </button>
            </div>
        )
    }
}

