import React, { Fragment } from "react";
import NoteList from "../note-list";
import AddButton from "../add-button";
import "./main-content.css";
import AddWindow from "../add-window";

class MainContent extends React.Component {
    state = {
        isAdding: false,
    };
    addNote = () => {
        this.closeForm();
    };
    onAddClick = e => {
        this.setState({ isAdding: true });
    };

    closeForm = e => {
        this.setState({ isAdding: false });
    };

    render() {
        return (
            <Fragment>
                {this.state.isAdding ? (
                    <AddWindow
                        addNote={this.addNote}
                        onFormClose={this.closeForm}
                    />
                ) : null}

                <AddButton onAddClick={this.onAddClick} />
                <NoteList />
            </Fragment>
        );
    }
}

export default MainContent;
