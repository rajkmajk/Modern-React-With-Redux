import React from "react";

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

//providing default properties to the component
Spinner.defaultProps = {
    //this is if we don't pass in the props.message
    message: 'Loading...'
};

export default Spinner;