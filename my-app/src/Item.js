import React from 'react';

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            totalRemaining: 20
        };
    }



    clickMe() {
        this.setState({
            clicks: this.state.clicks + 1,
            totalRemaining: this.state.totalRemaining - 1
        });
        if (this.state.totalRemaining === 0) {
            alert("You spent all your clicks!");
            this.setState({
                clicks: 20,
                totalRemaining: 0
            });
        }
        
    }

    render() { 
        return (

            <div>
                <h1 onClick={() => this.clickMe()}>
                    Hello from {this.props.name}
                </h1>
                <span>
                    {this.props.name} was clicked {this.state.clicks} times
                </span>
                <br />
                <span>
                    You have {this.state.totalRemaining} clicks left
                </span>
            </div>
        );
    }
}

export default Item;