import React, { Component } from "react";
import "./add-button.css";

class AddButton extends Component {
    render() {
        return (
            <button
                type="button"
                onClick={this.props.onAddClick}
                id="add-button"
                className="btn btn-primary add-button"
            >
                Add a note
            </button>
        );
    }
}

export default AddButton;
