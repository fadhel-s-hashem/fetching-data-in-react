import { useParams } from "react-router"

const StudentDetails = (props) => {

    const {studentId} = useParams()
    const student = props.students.find((student) => {
        return student.id === Number(studentId)
    })

    if (props.isLoading){
        return <p> loadinf student...</p>
    }

     if (!student) {
        return <h2> student not found...</h2>
     }


    return(
        <main>
            <br />
            <h2>hello {student.name}</h2> 
            <p> favorite emoji:  {student.favoriteEmoji}</p>
                <p> favorite food: {student.favoriteFood}</p>

        </main>

    )

}

export default StudentDetails