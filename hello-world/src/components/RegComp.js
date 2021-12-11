import React, { Component } from "react";

export class RegComp extends Component {
    render() {
        console.log("********* REGULAR COMP RENDER ***********");
        return <div>Regular Component {this.props.name}</div>;
    }
}

export default RegComp;
