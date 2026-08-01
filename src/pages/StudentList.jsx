import { Link } from "react-router"

const StudentList = ({ students }) => {
    return (
        <main>
            <br />
            <p>there are {students.length} student</p>

        {students.map(student => (
            <>
            <h3>
                <Link to={`/students/${student.id}`}>
                {student.name}
                </Link>
            </h3>
                
            </>
        ))}
        </main>


    )


}

export default StudentList