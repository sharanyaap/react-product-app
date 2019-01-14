// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class CartItem extends PureComponent {
    constructor(props) {
        super(props);

        //TODO: assing from props
        this.state = {
            qty: this.props.item.qty
        }
    }

    // called after first render, create life cycle
    // called only once during object life time
    componentDidMount() {
        console.log('CartItem componentDidMount')

        // refs are resolved
        this.inputElem.focus(); // set the cursor in input box
    }

    // destruction life cycle
    // called just before removing component from view
    componentWillUnmount() {
        console.log('CartItem componentWillUnmount')
    }

    //TODO: Ref
    //TODO: componentWillMount
    //TODO: state from props, qty

    onQtyChange = (event) => {
        // target is input element, real dom
        const {value} = event.target;
        console.log('on qty change ', value)
        this.setState({
            qty: value
        })
    }

    render() {
        let {item} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <input
                        value={this.state.qty}
                        type="number"
                        onChange={this.onQtyChange}
                        ref = { elem => this.inputElem = elem }
                    />
                </td>
                <td>{item.price * item.qty}</td>
                <td>
                    <button onClick={() => this.props.updateItem(item.id, parseInt(this.state.qty) ) }>
                        Update
                    </button>
                    <button onClick={() => this.props.removeItem(item.id)  }>
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
}


CartItem.defaultProps = {

}

CartItem.propTypes = {

}