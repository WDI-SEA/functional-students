import Score from './Score'

export default function Student(props) {
    // render the array of scores
    const scores = props.student.scores.map((element, i) => {
        return (
            <Score 
                key={`score${i}`}
                score={element.score}
                date={element.date}
            />
        )
    })
    // return the student jsx we would like to see
    return (
        <div>
            <h2>{props.student.name}</h2>

            <p>{props.student.bio}</p>

            {scores}
        </div>
    )
}