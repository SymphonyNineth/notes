import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import "./app.css";
import Header from "../header";
import { getDate } from "../../utils/date";

const { Provider: NoteProvider, Consumer: NoteConsumer } = createContext([]);

class App extends React.Component {
    state = {
        isAdding: false,
        notes: [
            {
                title: "Shop List",
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, asperiores blanditiis culpa
        distinctio eveniet fuga fugiat, ipsam ipsum maxime mollitia nemo nesciunt odio odit omnis sequi sit vitae
        voluptatibus.`,
                date: getDate(),
                id: 1,
            },
            {
                title: "Car repair",
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, asperiores blanditiis culpa
        distinctio eveniet fuga fugiat, ipsam ipsum maxime mollitia nemo nesciunt odio odit omnis sequi sit vitae
        voluptatibus.`,
                date: getDate(),
                id: 2,
            },
            {
                title: "Friends Name",
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, asperiores blanditiis culpa
        distinctio eveniet fuga fugiat, ipsam ipsum maxime mollitia nemo nesciunt odio odit omnis sequi sit vitae
        voluptatibus.`,
                date: getDate(),
                id: 3,
            },
            {
                title: "Fav Colors",
                text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto, asperiores blanditiis culpa
        distinctio eveniet fuga fugiat, ipsam ipsum maxime mollitia nemo nesciunt odio odit omnis sequi sit vitae
        voluptatibus.`,
                date: getDate(),
                id: 4,
            },
        ],
    };

    render() {
        return (
            <div className="app">
                <div className="container">
                    <Header />
                    <NoteProvider value={this.state.notes}>
                        <Outlet />
                    </NoteProvider>
                </div>
            </div>
        );
    }
}

export default App;
export { NoteConsumer };
