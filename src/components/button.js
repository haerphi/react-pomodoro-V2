import React from "react";

function Button(prop) {
    return (
        <div>
            <button type={"button"} onClick={prop.handleFunc}>
                {prop.value}
            </button>
        </div>
    );
}

export default Button;
