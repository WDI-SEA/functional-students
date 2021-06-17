import { Component } from "react"

export default class Score extends Component {
  render() {
    return (
      <div>
        <h4>Score: {this.props.score}</h4>

        <h6>Date: {this.props.date}</h6>
      </div>
    )
  }
}