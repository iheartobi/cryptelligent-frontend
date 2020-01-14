import React, { Component } from "react";
import EditUser from './EditUser'

class ToolTip extends Component {
 
  render() {
    

    return (
      <div onClick={this.props.handleEditUser} id="tooltip" className="on bottom">
        <div className="tooltip-arrow"></div>
        <div className="tooltip-inner">Edit Profile</div>
        <EditUser/>
      </div>
    );
  }
}

export default ToolTip;
