import React, { Component } from "react";

class LifecyleB extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "James",
        };

        console.log("LifecyleB constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifecyleB getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifecycleB componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("LifecycleB shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("LifecycleB getSnapshotBeforeUpdate");
    }

    componentDidUpdate() {
        console.log("LifecycleB componentDidUpdate");
    }

    render() {
        console.log("LifecycleB render");
        return <div>Lifecycle B</div>;
    }
}

export default LifecyleB;
