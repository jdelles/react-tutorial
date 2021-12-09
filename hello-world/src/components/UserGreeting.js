import React, { Component } from "react";

class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
        };
    }

    render() {
        return this.state.isLoggedIn && <div>Welcome James</div>;

        // return this.state.isLoggedIn ? (
        //     <div>Welcome James</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // );

        // let message;
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome James</div>;
        // } else {
        //     message = <div>Welcome Guest</div>;
        // }

        // return <div>{message}</div>;

        // if (this.state.isLoggedIn) {
        //     return <div>Welcome James</div>;
        // } else {
        //     return <div>Welcome Guest</div>;
        // }

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <div>Welcome James</div>
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div>
        //             <div>Welcome Guest</div>
        //         </div>
        //     );
        // }
    }
}

export default UserGreeting;
