import React from "react";

const JayeshLogo: React.FC = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 310 100"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff3c3c" />
          <stop offset="100%" stopColor="#d21919" />
        </linearGradient>
      </defs>

      <style>
        {`
          .white {
            fill: white;
            font-family: 'Poppins', 'Arial', sans-serif;
            font-weight: bold;
          }
          .red {
            fill: url(#redGradient);
          }
        `}
      </style>

      <text x="10" y="70" fontSize="48" className="white">
        J
      </text>

      <text x="55" y="70" fontSize="48" className="white">
        A
      </text>
      <polygon points="72,72 78,72 75,78" className="red" />

      <text x="105" y="70" fontSize="48" className="white">
        Y
      </text>

      <rect x="150" y="35" width="28" height="5" className="red" rx="2" />
      <rect x="150" y="50" width="28" height="5" className="red" rx="2" />
      <rect x="150" y="65" width="28" height="5" className="red" rx="2" />

      <text x="195" y="70" fontSize="48" className="white">
        S
      </text>

      <text x="245" y="70" fontSize="48" className="white">
        H
      </text>
    </svg>
  );
};

export default JayeshLogo;
