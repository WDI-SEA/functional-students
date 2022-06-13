import Score from "./Score"

const Student = ({ name, bio, scores }) => {
	const renderedScores = scores.map((score, i) => {
		return (
			<Score 
				date={score.date}
				score={score.score}
				key={`score${i}`}
			/>
		)
	})
	return (
		<div>
			<h2>{name}</h2>

			<p>{bio}</p>

			<h3>Scores</h3>

			{renderedScores}
		</div>
	)
}

export default Student