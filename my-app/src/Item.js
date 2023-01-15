import React from 'react';

class Item extends React.Component {

    clickMe() {
        alert("Hello from " + this.props.name);
    }

    render() { 
        return (
            <h1 onClick={() => this.clickMe()}>
                Hello from {this.props.name}
            </h1>
        );
    }
}

export default Item;