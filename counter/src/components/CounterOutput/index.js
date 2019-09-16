import React, { Component } from "react";
import { styles } from "./styles";
import { connect } from "react-redux";

class CounterOutput extends Component {
  render() {
    return (
      <div style={styles.counterOutput}>
        Result : {this.props.result}
        <button
          onClick={this.props.augmenterHistorique}
          style={{ "margin-left": "30px" }}
        >
          Créer historique
        </button>
        <button
          onClick={() => this.props.getUserLaunched(this.props.result)}
          style={{ "margin-left": "30px" }}
        >
          Récuperer utilisateur
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    augmenterHistorique: () =>
      dispatch({
        type: "CREER_HISTORIQUE"
      }),
    getUserLaunched: userNb =>
      dispatch({ type: "USER_LAUNCHED", userNb: userNb })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CounterOutput);
