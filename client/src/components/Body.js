import React from "react";
import About from "./pages/About";
import Login from "./pages/Login";
import Workout from "./pages/Workout";
import Error from "./pages/Error";

function Body(props) {
    if (this.state.currentPage === "Home") {
        return <About />;
    } else if (this.state.currentPage === "Login") {
        return <Login />;
    } else if (this.state.currentPage === "Workout") {
        return <Workout />;
    } else {
        return <Error />;
    }
}

export default Body;