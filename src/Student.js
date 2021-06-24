import React from "react"
import Score from "./Score"

const Student = (props) => { 

    const scores = props.scores.map((score, index) => {
      return <Score 
        date={score.date}
        score={score.score}
        key={index}
      />
    })
    return (
      <div>
        <h2>{props.name}</h2>

        <h3 class="bio">{props.bio}</h3>
       
        {scores}
        <hr />
      </div>
    )
  }


export default Student