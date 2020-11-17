import './App.css';
import React,{Component} from "react";
import ColorPickerComponent from "./components/ColorPickerComponent";
import ButtonsHandlerComponent from "./components/ButtonsHandlerComponent";
import DisplayComponent from "./components/DisplayComponent";

class App extends Component {
    onIncrease = () => {
        console.log("increase");
    }

    onDecrease = () => {
        console.log("decrease");
    }

    onReset = () => {
        console.log("reset");
    }

    onChangeColor = (e) => {
        console.log(e.currentTarget.innerText);
    }

    render() {
    return (
        <div className={"margin-50"}>
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    Color picker
                    <ColorPickerComponent
                        onChangeColor={this.onChangeColor}
                    />
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    Button Handler
                    <ButtonsHandlerComponent
                        onIncrease={this.onIncrease}
                        onDecrease={this.onDecrease}
                        onReset={this.onReset}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <DisplayComponent
                        textColor={"red"}
                        textSize={"15px"}
                    />
                </div>
            </div>
        </div>
    )
    }
}

export default App;
