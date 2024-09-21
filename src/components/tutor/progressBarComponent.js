import React from "react";
import './progressBar.css';  

class ProgressBar extends React.Component {
  
  clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
  }

  render() {
    const { progressValue, backgroundClassName, barClassName, sidePadding } = this.props;
    
    const clampedProgress = this.clamp(progressValue, 0, 1);
    
    const rightOffsetString = `calc(${(1 - clampedProgress) * 100}% + ${sidePadding})`;

    return (
      <div className={backgroundClassName}>
        <div className={barClassName} style={{ left: sidePadding, right: rightOffsetString }}></div>
      </div>
    );
  }
}

export default ProgressBar;
