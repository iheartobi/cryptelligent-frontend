import React, { Component } from "react";

class ToolTip extends Component {
  render() {
    // let { state } = this;

    return (
      <div id="tooltip" className="on bottom">
        <div className="tooltip-arrow"></div>
        <div className="tooltip-inner">Edit Profile</div>
      </div>
    );
  }
}

export default ToolTip;
