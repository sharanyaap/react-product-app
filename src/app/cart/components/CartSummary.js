// CartSummary.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

// PureComponent
// PureComponent is implementing shouldComponentUpdate
// it checks all the props including functions, then state items
// if any differences, it calls render
export default class CartSummary extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }

    //TODO: componentWillMount
    componentWillMount() {
        this.recalculate(this.props);
    }

    // update cycle methods
    //TODO: componentWillReceiveProps, recalculate
    // called when parent component render called on update cycle
    componentWillReceiveProps(nextProps) {
        console.log('summary receive props ', this.props)
        console.log('summary next props ', nextProps)

        if (this.props.amount != nextProps.amount ||
            this.props.count != nextProps.count) {
            this.recalculate(nextProps)
        }
    }

    //TODO: shouldComponentUpdate

    recalculate(props) {
        let discount = 0;

        if (props.count >= 10) {
            discount = 20;
        } else if (props.count >= 5) {
            discount = 10;
        }

        let grandTotal = props.amount - (props.amount * discount / 100);

        this.setState({
            discount,
            grandTotal
        })
    }




    render() {
        console.log("CartSummary Render");
        return (
            <div>
                <h2>Cart Summary</h2>
                <p> Amount : {this.props.amount} </p>
                <p> Count : {this.props.count} </p>

                <p> Discount: {this.state.discount} %</p>
                <p> Grand Total: {this.state.grandTotal} </p>
            </div>
        )
    }
}


CartSummary.defaultProps = {

}

CartSummary.propTypes = {

}