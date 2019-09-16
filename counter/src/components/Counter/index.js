import React, { Component } from "react";
import CounterOutput from "../CounterOutput";
import CounterButton from "../CounterButton";
import { styles } from "./styles";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div style={styles.container}>
        <CounterOutput result={this.props.res} />
        <div style={styles.buttonsContainer}>
          <CounterButton title="Increase 1" onClick={this.props.incrementUn} />
          <CounterButton title="Decrease 1" onClick={this.props.decreaseUn} />
          <CounterButton title="Increase 3" onClick={() => this.props.add(3)} />
          <CounterButton
            title="Decrease 3"
            onClick={() => this.props.substract(3)}
          />
        </div>
        <div>Je suis l'historique</div>
        <div>
          {this.props.historique.map(element => {
            return <p>{element}</p>;
          })}
        </div>
        <div
          style={{ border: "3px solid blue", height: "300px", width: "300px" }}
        >
          {this.props.userLoading ? (
            "... Loading ..."
          ) : this.props.userError ? (
            "Réesayez"
          ) : this.props.userSuccess ? (
            <div>
              <img
                src={this.props.userSuccess.avatar}
                style={{ width: "50%" }}
              />
              <div>Prénom: {this.props.userSuccess.name}</div>
            </div>
          ) : (
            "Récupérer utilisateur"
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    res: state.result,
    historique: state.historique,
    userLoading: state.userLoading,
    userSuccess: state.userSuccess,
    userError: state.userError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementUn: () =>
      dispatch({
        type: "INCREMENT_UN"
      }),
    decreaseUn: () =>
      dispatch({
        type: "DECREASE_UN"
      }),
    add: valeur =>
      dispatch({
        type: "ADD",
        val: valeur
      }),
    substract: valeur =>
      dispatch({
        type: "SUBSTRACT",
        val: valeur
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
