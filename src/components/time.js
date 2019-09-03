import React from "react";

function Time(props) {
    return <h1 className={"timer"}>{`${props.minute}:${props.second}`}</h1>;
}

export default Time;
