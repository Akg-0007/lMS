import React from 'react'
import './CircularBar.css'

export default function CircularBar() {
    var progress = 0;
var interval = setInterval(function () {
  progress++;
  if (progress > 100) {
    clearInterval(interval);
  } else {
    document.querySelector(".progress-bar-foreground").style.strokeDasharray =
      progress * 2.512 + ", 251.2";
    document.querySelector(".progress-bar-label").innerHTML = progress + "%";
  }
}, 20);

  return (
   <>

<div className="upload_form_content">
<div class="progress-bar">
  <svg>
    <circle class="progress-bar-background" cx="50%" cy="50%" r="40%" />
    <circle class="progress-bar-foreground" cx="50%" cy="50%" r="40%" />
  </svg>
  <span class="progress-bar-label">0%</span>
</div>
</div>

   </>
  )
}
