import { React, Component } from "react";
import { connect } from "react-redux";
import { getTeams } from "../services/backend";
import TeamCard from "../components/TeamCard";

class TeamContainer extends Component {
    constructor(){
        super()
        this.state = {
            teams: [],
            team: {}
        }
    }
  componentDidMount() {
    getTeams().then(data => {
      this.setState({ teams: data });
      this.props.dispatch({ type: "GET_TEAMS", data });
      data.map(team => <TeamCard key={team.id} team={team} />);
    });
  }

  render() {
    return (
      <div>
        <TeamCard team={this.state.team}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ui: state.teams };
};

export default connect(mapStateToProps)(TeamContainer);
