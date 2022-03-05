import React from "react";
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    //Northern Hemisphere
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        //Southern Hemisphere
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season]; // returns object {text, iconName}

    return (
        //className should be named same as our component
        <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;