import { Component } from "react"
import Score from "./Score"

export default class Student extends Component {
  render() {
    const scores = this.props.scores.map((score, index) => {
      return <Score 
        date={score.date}
        score={score.score}
        key={index}
      />
    })
    return (
      <div>
        <h2>{this.props.name}</h2>

        <p>{this.props.bio}</p>
       
        {scores}
      </div>
    )
  }
}