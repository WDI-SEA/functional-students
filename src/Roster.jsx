import Student from "./Student"

export default function Roster({ students }) {
    console.log('students:', students)

    // map the array of students
    const studentComponents = students.map((student, i) => {
        return (
            <Student 
                key={`student${i}`}
                student={student}
            />
        )
    })
    // return the students to render them
    return (
        <div>
            {studentComponents}
        </div>
    )
}