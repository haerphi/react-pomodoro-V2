//react imports
import React from "react";
import ReactDOM from "react-dom";
//css file
import "./style.css";

import Time from "./components/time";
import Button from "./components/button";
import Modal from "./components/modal";

class App extends React.Component {
    constructor(props) {
        super(props);
        //interval
        this.intervalID = null;
        //other variables
        this.defaultTimer = 1 * 60;
        //binding functions
        this.increment = this.handleIncrement.bind(this);
        this.decrement = this.handleDecrement.bind(this);
        this.reset = this.handleReset.bind(this);
        this.start = this.handleStart.bind(this);
        this.hideModal = this.hideModalFunc.bind(this);
        this.restart = this.restartFunc.bind(this);
        //states
        this.state = {
            second: this.defaultTimer,
            play: false,
            modal: false,
        };
    }

    showModalFunc() {
        this.setState({modal: true});
    }

    hideModalFunc() {
        this.setState({modal: false});
    }

    //bouton +
    handleIncrement() {
        if (this.state.play) {
            this.setState(prefstats => ({
                second: prefstats.second + 60,
            }));
        } else {
            this.defaultTimer += 60;
            this.setState(() => ({
                second: this.defaultTimer,
            }));
        }
    }

    //bouton -
    handleDecrement() {
        //réduction du timer pendant le décompte
        if (this.state.play) {
            this.setState(prefstats => ({
                second: prefstats.second - 60,
            }));
            if (this.state.second <= 0) {
                this.setState(() => ({
                    second: 0,
                }));
            }
        } else {
            //réduction du timer par défaut
            this.defaultTimer -= 60;
            this.setState(() => ({
                second: this.defaultTimer,
            }));
        }
    }

    decrease() {
        this.setState(prefstats => ({
            second: --prefstats.second,
        }));
        if (this.state.second <= 0) {
            clearInterval(this.intervalID);
            this.setState(() => ({
                second: 0,
                play: false,
            }));
            //active alert
            this.showModalFunc();
        }
    }

    handleReset() {
        if (this.intervalID != null) {
            clearInterval(this.intervalID);
        }
        this.setState(() => ({
            second: this.defaultTimer,
            play: false,
        }));
        //disable aler
    }

    handleStart() {
        if (!this.state.play) {
            if (this.state.second === 0) {
                this.setState({second: this.defaultTimer});
            }
            this.setState(() => ({
                play: true,
            }));
            this.intervalID = setInterval(() => {
                this.decrease();
            }, 1000);
        } else {
            clearInterval(this.intervalID);
            this.setState(() => ({
                play: false,
            }));
        }
    }
    restartFunc() {
        this.hideModalFunc();
        this.handleReset();
        this.handleStart();
    }

    render() {
        let playButtonValue = "Play";
        if (this.state.play) {
            playButtonValue = "Stop";
        }
        return (
            <div className={"container"}>
                <Modal
                    show={this.state.modal}
                    btnCloseFunc={this.hideModal}
                    btnRestartFunc={this.restart}>
                    <p>{"PAAAAAAAUSE !"}</p>
                </Modal>
                <div className={"container-timer"}>
                    <Time second={this.state.second} />
                    <div className={"buttonsList"}>
                        <Button value={"+"} handleFunc={this.increment} />
                        <Button value={"-"} handleFunc={this.decrement} />
                        <Button value={"RESET"} handleFunc={this.reset} />
                        <Button
                            value={playButtonValue}
                            handleFunc={this.start}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App hello={"hello world"} />, document.querySelector("#root"));
