import React, {Component} from "react";
import PropTypes from 'prop-types';

class ButtonsHandlerComponent extends Component {
    render() {
        return(
            <div>
                <span className="label">{this.props.textSize}</span>
                <div className="btn-group">
                    <button type="button" className="btn btn-default" onClick={this.props.onIncrease}>Decrease</button>
                    <button type="button" className="btn btn-default" onClick={this.props.onDecrease}>Increase</button>
                    <button type="reset" className="btn btn-default" onClick={this.props.onReset}>Reset</button>
                </div>
            </div>
        )
    }
}

ButtonsHandlerComponent.propTypes = {
    textSize: PropTypes.string,
    onIncrease: PropTypes.func,
    onDecrease: PropTypes.func,
    onReset: PropTypes.func

}
export default ButtonsHandlerComponent;