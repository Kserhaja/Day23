import React, { Component } from 'react';

class Plant extends Component {
    constructor(props) {
    super(props);
    this.state = { type: "Flowering plant" }

    }
    render() {
        return (
            <div>
                <h2>This is a Plant Component!</h2>
            </div>
        );
    }
}
export default Plant;
