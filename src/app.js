//react imports
import React from "react";
import ReactDOM from "react-dom";
//css file
import "./style.css";

import Time from "./components/time";
import Button from "./components/button";

class App extends React.Component {
    constructor(props) {
        super(props);
        //states
        this.state = {
            minute: 0,
            second: 0,
            play: false,
        };
        //interval
        this.intervalID = null;
        //other variables
        //binding functions
        this.increment = this.handleIncrement.bind(this);
        this.decrement = this.handleDecrement.bind(this);
        this.reset = this.handleReset.bind(this);
        this.start = this.handleStart.bind(this);
    }

    handleIncrement() {
        this.setState(prefstats => ({
            minute: ++prefstats.minute,
        }));
    }

    handleDecrement() {
        this.setState(prefstats => ({
            minute: --prefstats.minute,
        }));
    }

    handleReset() {
        console.log("RESET");
    }

    handleStart() {
        console.log("START");
    }

    render() {
        return (
            <div className={"container"}>
                <div className={"container-timer"}>
                    <Time
                        minute={this.state.minute}
                        second={this.state.second}
                    />
                    <div className={"buttonsList"}>
                        <Button value={"+"} handleFunc={this.increment} />
                        <Button value={"-"} handleFunc={this.decrement} />
                        <Button value={"RESET"} handleFunc={this.decrement} />
                        <Button value={"PLAY"} handleFunc={this.decrement} />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App hello={"hello world"} />, document.querySelector("#root"));
