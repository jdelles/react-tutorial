import React from "react";

const Hello = () => {
    // return (
    //     <div className="dummyClass">
    //         <h1>Hello James</h1>
    //     </div>
    // );
    return React.createElement(
        "div",
        { id: "hello" },
        React.createElement("h1", { className: "dummyClass" }, "Hello James")
    );
};

export default Hello;
