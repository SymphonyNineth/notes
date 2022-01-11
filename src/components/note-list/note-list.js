import React, { Component } from "react";
import "./note-list.css";
import Note from "../note";
import { NoteConsumer } from "../app/app";

class NoteList extends Component {
    render() {
        return (
            <NoteConsumer>
                {notes => {
                    return (
                        <div className="note-list">
                            {notes.map(({ title, text, date, id }) => (
                                <Note
                                    id={id}
                                    key={id}
                                    title={title}
                                    text={text}
                                    date={date}
                                />
                            ))}
                        </div>
                    );
                }}
            </NoteConsumer>
        );
    }
}

export default NoteList;
