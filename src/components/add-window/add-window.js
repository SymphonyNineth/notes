import React, { Component } from "react";
import "./add-window.css";

class AddWindow extends Component {
    // state = {
    //     isOpen: false,
    // };

    state = {
        title: "",
        text: "",
    };

    handleTitleChange = e => {
        this.setState({ title: e.target.value });
    };

    handleTextChange = e => {
        this.setState({ text: e.target.value });
    };

    ref = React.createRef();

    // handleClosing = () => {
    //     this.setState(state => {
    //         return { isOpen: !state.isOpen };
    //     });
    //     this.props.closeForm();
    // };

    onNoteSubmit = e => {
        const { title, text } = this.state;
        e.preventDefault();
        this.props.addNote(title, text);
    };

    render() {
        // const { isOpen } = this.state;
        // window.addEventListener("click", e => {
        //     if (isOpen && !this.ref.current?.contains(e.target)) {
        //         this.handleClosing();
        //     }
        // });
        return (
            <form
                onSubmit={this.onNoteSubmit}
                ref={this.ref}
                className="add-window gradient"
            >
                <button
                    className="btn-close"
                    onClick={this.props.onFormClose}
                />
                <legend className="form-legend">Add a note</legend>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Note Title
                    </label>
                    <input
                        onChange={this.handleTitleChange}
                        type="text"
                        className="form-control"
                        id="title"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="note-body">
                        Note
                    </label>
                    <textarea
                        onChange={this.handleTextChange}
                        className="form-control"
                        id="note-body"
                        rows="3"
                    />
                </div>
                <div className="d-flex justify-content-center">
                    {" "}
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}

export default AddWindow;
