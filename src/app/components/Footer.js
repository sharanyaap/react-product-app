import React from 'react';

//ES6 function
export default (props) => {
    //props is read only, immutable
    //child should not modify props
    // throws error
    //props.appTitle = 'React';
    //decontruct
    const {appTitle, year, address} = props;

    //Bad practice, child must never modify parent data
    //address.city = 'Chennai'

    return (
        <div>
            <hr/>
            <p>Copyrights@{year},{appTitle}</p>
            <p>Address {address.city}, {address.state}</p>
        </div>
    )
}