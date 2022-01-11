import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./components/app";
import ProfilePage from "./components/profile-page";
import AboutPage from "./components/about-page";
import NotePage from "./components/note-page";
import MainContent from "./components/main-content";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<MainContent />} />
                    <Route path=":noteId" element={<NotePage />} />

                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="*" element={<p>Nothing here</p>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
