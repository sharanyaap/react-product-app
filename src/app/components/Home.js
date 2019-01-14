// Home.js
import React, {Component} from 'react';
import PropTypes from 'prop-types';


// React.Component == Component

export default class Home extends Component {
    //ES.next using state field inside class
    //keyword
    static propTypes = {
        startValue: PropTypes.number
    }

    //keyword
    static defaultProps = {
        // used when parent doesn't pass props to child
        startValue: 0
    }

    constructor(props) {
        super(props); // MUST
        console.log('Home cons ', this.props)

        // react keyword
        // owned by component
        // state can be mutable
        // constructor to initialize state
        this.state = {
            // initialize state with props
            counter: this.props.startValue,
            show: true
        }

        // ES5, using bind
        // bind is for binding object with function for callback
        //bind will create new function wrapping object
        this.incrementBind = this.increment.bind(this);
    }

    increment(event) {
        console.log('increment ', event)

        console.log("this ", this);
        // BAD
        // BAD 1: mutating state directly
        // BAD 2: mutating counter value *
        this.state.counter++;

        console.log('Counter ', this.state.counter)
        // BAD 3
        // keyword
        // trigger react to call the render function for this component
        this.forceUpdate();
    }

    // ES.next
    // created only once per component instance
    incrementESNext = (event) => {
        console.log('increment ', event)

        console.log("this ", this);
        // BAD
        // BAD 1: mutating state directly
        // BAD 2: mutating counter value *
        this.state.counter++;

        console.log('Counter ', this.state.counter)
        // BAD 3
        // keyword
        // trigger react to call the render function for this component
        this.forceUpdate();
    }

    // ES.next
    decrement = (event) => {
        console.log('decrement ', event);

        console.log('Counter before ', this.state.counter)

        //GOOD
        //keyword
        // setState takes next state as argument
        // setState does batch update
        // setState is async
        // setState calls render function after state merge
        this.setState({
            counter: this.state.counter - 1
        })

        console.log('Counter after ', this.state.counter)
    }

    toggle = () => {
        this.setState({
            show: !this.state.show
        })
    }

    // life cycle method
    // whenever parent render called on update cycle
    // to know if any diff in props
    // whenever this.setState is called
    // NOT CALLED ON forceUpdate
    shouldComponentUpdate(nextProps, nextState) {
        console.log('should update current state ', this.state);
        console.log('next state', nextState);

        if (nextState.counter % 2 == 0)
            return true;

        return false;
        // return true;  // shall call render function
        // return false // shall not call render function
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log('Timer running on home page')
            this.setState({
                counter: this.state.counter + 1
            })
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }


    render() {
        console.log('Home render ', this.props)

        return (
            <div>
                <h2>Home</h2>
                <span>Counter </span>
                <span>{this.state.counter}</span>

                {/*
                 JSX Comment
                 passing increment function to click event
                 */}
                <button onClick={this.incrementBind}>
                    +1 ES5
                </button>


                {/*
                 ES6 way of solving this in context
                 */}
                <button onClick={(event) => this.increment(event)}>
                    +1 ES6
                </button>

                <button onClick={this.incrementESNext}>
                    +1 ES Next
                </button>

                <button onClick={this.decrement}>
                    -1
                </button>

                <button onClick={this.toggle}>
                    Show/Hide
                </button>

                {/* if part only */}
                {
                    this.state.show &&
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                    </ul>
                }

                {/* if .. else  using ternary? */}
                {
                    this.state.show ? <p>Show is true now</p>
                        : <p>Show is off now </p>
                }


            </div>
        )
    }
}