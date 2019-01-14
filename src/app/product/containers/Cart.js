// containers/Cart.js

// help to create container
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

// action creators
import * as actions from '../state/actions';

// React Component
import Cart from '../components/Cart';

// mapper, take data from redux state, pass as props
// state = store.getState() {items: []}
// return set of properties,
// those props shall be passed to Cart component
// who calls this? container shall call, pass state object
// when it is called?
//  1. first time when component created
//  2. subscribe (after dispatch)
function mapStateToProps(state) {
    return {
        cartLength: state.items.length
    }
}

// return set of functions as props
// dispatch = store.dispatch
// container calls this function
// when? when component instance created, NOT FOR SUBSCRIPTION
function mapDispatchToProps(dispatch) {
    return {
        addItem: function() {
            let id = Math.ceil(Math.random() * 10000);
            let item = {
                id,
                name: `Product ${id}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }

            const action = actions.addItem(item)

            dispatch(action)
        },

        // empty : function () {
        //     const action = actions.empty()
        //     dispatch(action)
        // },

        // auto create empty function, automatically dispatch
        empty : bindActionCreators(actions.empty, dispatch)


    }
}

// store? store is obtained through context
// container are pure component
// Cart render shall be called only if cartLength is different
const ContainerComponent = connect(mapStateToProps,
    mapDispatchToProps) (Cart)

export default ContainerComponent;