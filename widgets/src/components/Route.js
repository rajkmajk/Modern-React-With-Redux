//we only need to import React when we write JSX
// import React from "react";
import { useEffect } from "react";

const Route = ({ path, children }) => {
    useEffect(() => {
        
        const onLocationChange = () => {
            console.log('aaa');
        };


        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);


    return window.location.pathname === path
    ? children
    : null;
};

export default Route;