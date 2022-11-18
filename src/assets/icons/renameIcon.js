import React from "react";

function RenameIcon(width, height, color){
    return (
        <svg 
            width={width}
            height={height}
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M3.37772 12.6076C3.11939 12.8826 2.86939 13.4242 2.81939 13.7992L2.51106 16.4992C2.40272 17.4742 3.10272 18.1409 4.06939 17.9742L6.75272 17.5159C7.12772 17.4492 7.65272 17.1742 7.91106 16.8909L16.4194 7.98257C17.6027 6.73257 18.1361 5.30757 16.2944 3.5659C14.4611 1.8409 13.0694 2.44924 11.8861 3.69924L3.37772 12.6076Z" 
                stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            />
            <path 
                d="M9.91016 5.74097C10.2685 8.04097 12.1352 9.7993 14.4518 10.0326" 
                stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            />
        </svg>
    )
}

export default RenameIcon;