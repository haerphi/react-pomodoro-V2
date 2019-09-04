import React from "react";

function Time(props) {
    //transformation des secondes en minute:seconde
    let minute = Math.floor(props.second / 60);
    let second = props.second % 60;
    //rajout du 0 s'il y a moins de 2 chiffres
    minute = `${minute}`.padStart(2, 0);
    second = `${second}`.padStart(2, 0);
    //format the time here
    return <h1 className={"timer"}>{`${minute}:${second}`}</h1>;
}

export default Time;
