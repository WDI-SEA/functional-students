import Score from "./Score"

export default function Student(props) {
    // map scores
    const scores = props.scores.map((score, i) => {
        return (
            <Score 
                date={score.date}
                score={score.score}
                key={`${props.name} score ${i}`}
            />
        )
    })
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
            {/* scores can go down here */}
            {scores}
        </div>
    )
}