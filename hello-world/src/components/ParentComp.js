import React, { Component, PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

export class ParentComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "James",
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "James",
            });
        }, 2000);
    }

    render() {
        console.log("********* PARENT COMP RENDER ***********");
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                {/* <RegComp name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
            </div>
        );
    }
}

export default ParentComp;
