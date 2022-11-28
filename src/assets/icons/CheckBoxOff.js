import React from "react";

function CheckBoxOff(width, height, color) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            style={{fill: `${color}`}}
            viewBox="0 -3 24 32"
        >
            <rect opacity="0.2" x="2" y="2" width={width} height={height} rx="3" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export default CheckBoxOff;
