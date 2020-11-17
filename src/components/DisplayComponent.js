import React, {Component} from "react";
import PropTypes from 'prop-types';

class DisplayComponent extends Component {
    render() {
        return(
            <div className="display-component">
                <div>
                    <span className="label label-info">Color: {this.props.textColor}</span>
                    <span className="label label-info">Fontsize: {this.props.textSize}</span>
                </div>
                <input type="text" name="textBox"/>
            </div>
        )
    }
}

DisplayComponent.propTypes = {
    textBoxValue: PropTypes.string,
    textColor: PropTypes.string,
    textSize: PropTypes.string
}
export default DisplayComponent;