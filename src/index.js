import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import ListStudentAdded from "./page/ListStudentAdded";
import { Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/list-student-added" element={<ListStudentAdded />} />
        </Routes>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement
);
