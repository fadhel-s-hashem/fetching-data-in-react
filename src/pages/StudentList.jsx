const StudentList = ({ students }) => {
    return (
        <main>

        {students.map(student => (
            <>
                <p>{student.name}: {student.favoriteEmoji}</p>
                <br />
            </>
        ))}
        </main>


    )


}

export default StudentList