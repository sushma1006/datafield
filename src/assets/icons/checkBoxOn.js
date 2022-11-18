import React from "react";

function CheckBoxOn(width, height, color) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            style={{fill: `${color}`}}
            viewBox="0 -3 24 32"
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5ZM18.0303 9.03032C18.3232 8.73743 18.3232 8.26256 18.0303 7.96966C17.7374 7.67677 17.2626 7.67677 16.9697 7.96966L10.3535 14.5858L7.88388 12.1161C7.59098 11.8232 7.11611 11.8232 6.82322 12.1161C6.53032 12.409 6.53032 12.8839 6.82322 13.1768L9.82322 16.1768C10.1161 16.4697 10.591 16.4697 10.8839 16.1768L18.0303 9.03032Z"/>
        </svg>
    );
}

export default CheckBoxOn;