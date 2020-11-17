import React, {Component} from "react";
import PropTypes from "prop-types";

class ColorPickerComponent extends Component {
    render() {
        return(
            <div className={"color-picker"}>ColorPickerComponent
                <div className="btn-group">
                    <button type="button" className="btn btn-default black" onClick={this.props.onChangeColor}>black</button>
                    <button type="button" className="btn btn-default green" onClick={this.props.onChangeColor}>green</button>
                    <button type="button" className="btn btn-default red" onClick={this.props.onChangeColor}>red</button>
                    <button type="button" className="btn btn-default blue" onClick={this.props.onChangeColor}>blue</button>
                    <button type="button" className="btn btn-default yellow" onClick={this.props.onChangeColor}>yellow</button>
                </div>
            </div>
        )
    }
}

ColorPickerComponent.propTypes = {
    onChangeColor: PropTypes.func
}

export default ColorPickerComponent;