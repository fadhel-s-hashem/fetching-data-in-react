import { useParams } from "react-router"

const StudentDetails = (props) => {

    const {studentId} = useParams()
    const student = props.students.find((student) => {
        return student.id === Number(studentId)
    })

    return(
        <main>
            <h3>hello {student.name}</h3> 
            <p> favorite emoji:  {student.favoriteEmoji}</p>
                <p> favorite food: {student.favoriteFood}</p>

        </main>

    )

}

export default StudentDetails