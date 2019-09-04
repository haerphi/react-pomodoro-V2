import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";

function Modal(props) {
    if (props.show) {
        return ReactDOM.createPortal(
            <div id={"modal"}>
                {props.children}
                <div className={"buttonList"}>
                    <Button value={"Close"} handleFunc={props.btnCloseFunc} />
                    <Button
                        value={"Restart"}
                        handleFunc={props.btnRestartFunc}
                    />
                </div>
            </div>,
            document.body,
        );
    }
    return null;
}

export default Modal;
