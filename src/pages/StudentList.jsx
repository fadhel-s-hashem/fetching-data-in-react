import { Link } from "react-router"

const StudentList = ({ students }) => {
    return (
        <main>

        {students.map(student => (
            <>
            <h3>
                <Link to={`/students/${student.id}`}>
                {student.name}
                </Link>
            </h3>
                <p> emoji:{student.favoriteEmoji}</p>
                <p> food:{student.favoriteFood}</p>
                <br />
            </>
        ))}
        </main>


    )


}

export default StudentList