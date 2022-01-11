import React from "react";
import "./note-page.css";
import { Link, useParams } from "react-router-dom";
import { NoteConsumer } from "../app/app";

function NotePage() {
    const { noteId } = useParams();
    return (
        <NoteConsumer>
            {notes => {
                const note = notes.find(note => note.id === parseInt(noteId));

                const { title, text, date } = note;
                return (
                    <div className="note mt-5">
                        <div className="card">
                            <div className="card-body">
                                <div className="date text-muted">{date}</div>
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{text}</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-3">
                            <Link to="/" className="btn btn-info">
                                Back
                            </Link>
                        </div>
                    </div>
                );
            }}
        </NoteConsumer>
    );
}

export default NotePage;
