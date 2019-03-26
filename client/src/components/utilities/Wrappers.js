import React, { Component } from 'react'

export class Toggle extends Component {
  state = {
      on: this.props.default ? this.props.default : false
  }
    toggle = () => this.setState(prevState => { return {...prevState, on: !prevState.on}});
    set = (value) => this.setState(prevState => { return {...prevState, on: value}});
    setDefault = value => () => this.setState(prevState => { return {...prevState, on: value}});
  render() {
    const { render, children } = this.props;
    return render ? render({on: this.state.on, toggle: this.toggle, set: this.set, setDefault: this.setDefault}) : children({on: this.state.on, toggle: this.toggle, set: this.set, setDefault: this.setDefault});
  }
}
