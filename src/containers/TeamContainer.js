import { React, Component } from "react";
import { connect } from "react-redux";
import { getTeams } from "../services/backend";
import TeamCard from "../components/TeamCard";

class TeamContainer extends Component {
  componentDidMount() {
    getTeams().then(data => data.map(team => <TeamCard team={team}/>));
    // console.log(this.state)
  }

  render() {
    return <div>
        <TeamCard/>
    </div>;
  }
}

const mapStateToProps = state => {
  return { ui: state.teams };
};

export default connect(mapStateToProps)(TeamContainer);
