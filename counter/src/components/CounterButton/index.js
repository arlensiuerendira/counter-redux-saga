import React, { Component } from 'react';
import { styles } from "./styles"


class CounterButton extends Component {
  render() {
    return (
      <button style={styles.button} onClick={this.props.onClick}>{this.props.title}</button>
    );
  }
}

export default CounterButton;