import React from "react";
import { Link } from "react-router-dom";
import "./note.css";

function Note(props) {
    const { title, text, date, id } = props;
    return (
        <div className="note">
            <div className="card">
                <div className="card-body">
                    <div className="date text-muted">{date}</div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <Link to={`${id}`} className="btn btn-info">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Note;
