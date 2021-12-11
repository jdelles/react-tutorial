import React from "react";

function MemoComp({ name }) {
    console.log("****** RENDERING MEMO COMPONENT *******");
    return <div>{name}</div>;
}

export default React.memo(MemoComp);
