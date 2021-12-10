import React, { Component } from "react";
import LifecyleB from "./LifecycleB";

class LifecyleA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "James",
        };

        console.log("LifecyleA constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecyleA getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifecycleA componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("LifecycleA getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate");
    }

    changeState = () => {
        this.setState({
            name: "Rino",
        });
    };

    render() {
        console.log("LifecycleA render");
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecyleB />
            </div>
        );
    }
}

export default LifecyleA;
