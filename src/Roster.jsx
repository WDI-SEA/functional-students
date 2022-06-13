import Student from './Student'

export default function Roster(props) {
	const students = props.students.map((student, i) => {
		return (
			<Student 
				name={student.name}
				bio={student.bio}
				scores={student.scores}
				key={`student${i}`}
			/>
		)
	})
	return (
		<>
			{students}
		</>
	)
}