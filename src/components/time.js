import React from "react";

function Time(props) {
    const minute = Math.floor(props.second / 60);
    const second = props.second % 60;
    //format the time here
    return <h1 className={"timer"}>{`${minute}:${second}`}</h1>;
}

export default Time;
