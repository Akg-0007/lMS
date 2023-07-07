import React from "react";
import "./Hourglass.css";

function HourglassIcon(props) {
  return (
    <div className="hr-animation">
 <svg width="73px" height="88px" viewBox="0 0 73 88" {...props}>
      <g id="hourglass">
        <path
          d="M63.8761664,86 C63.9491436,84.74063 64,83.4707791 64,82.1818182 C64,65.2090455 57.5148507,50.6237818 48.20041,44 C57.5148507,37.3762182 64,22.7909545 64,5.81818182 C64,4.52922091 63.9491436,3.25937 63.8761664,2 L10.1238336,2 C10.0508564,3.25937 10,4.52922091 10,5.81818182 C10,22.7909545 16.4851493,37.3762182 25.79959,44 C16.4851493,50.6237818 10,65.2090455 10,82.1818182 C10,83.4707791 10.0508564,84.74063 10.1238336,86 L63.8761664,86 Z"
          id="glass"
          fill="#ECF1F6"
        />
        <rect
          id="top-plate"
          fill="#5B36C6"
          x="0"
          y="0"
          width="74"
          height="8"
          rx="2"
        />
        <rect
          id="bottom-plate"
          fill="#5B36C6"
          x="0"
          y="80"
          width="74"
          height="8"
          rx="2"
        />

        <g id="top-sand" transform="translate(18, 21)">
          <clipPath id="top-clip-path" fill="white">
            <rect x="0" y="0" width="38" height="21" />
          </clipPath>

          <path
            fill="#CCBBFF"
            clipPath="url(#top-clip-path)"
            d="M38,0 C36.218769,7.51704545 24.818769,21 19,21 C13.418769,21 1.9,7.63636364 0,0 L38,0 Z"
          />
        </g>

        <g id="bottom-sand" transform="translate(18, 55)">
          <clipPath id="bottom-clip-path" fill="white">
            <rect x="0" y="0" width="38" height="21" />
          </clipPath>

          <g clipPath="url(#bottom-clip-path)">
            <path
              fill="#CCBBFF"
              d="M0,21 L38,21 C36.1,13.3636364 24.581231,0 19,0 C13.181231,0 1.781231,13.4829545 0,21 Z"
            />
          </g>
        </g>
      </g>
    </svg>
    </div>
   
  );
}

export default HourglassIcon;
