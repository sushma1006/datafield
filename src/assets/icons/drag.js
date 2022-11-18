import React from "react";

function Drag(width, height, color) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      style={{fill: `${color}`}}
    >
      <path d="M12.667 20.667a2 2 0 11.001 3.999 2 2 0 01-.001-3.999zm2-4.667a2 2 0 10-3.999-.001 2 2 0 003.999.001zm6.666 0a2 2 0 10-3.999-.001 2 2 0 003.999.001zm-8.666-8.667a2 2 0 11.001 3.999 2 2 0 01-.001-3.999zm8.666 2a2 2 0 10-3.999-.001 2 2 0 003.999.001zm0 13.334a2 2 0 10-3.999-.001 2 2 0 003.999.001z"></path>
    </svg>
  );
}

export default Drag;
