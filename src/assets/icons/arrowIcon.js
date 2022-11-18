import React from "react";

function ArrowIcon(width, height, color){
    return(
        <svg 
            width={width}
            height={height}
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M7.30078 3.38662L11.6474 7.99995L7.30078 12.6133" 
                stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            />
        </svg>
    )
}

export default ArrowIcon;