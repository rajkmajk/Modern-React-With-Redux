//we only need to import React when we write JSX
// import React from "react";

const Route = ({ path, children }) => {
    return window.location.pathname === path
    ? children
    : null;
};

export default Route;