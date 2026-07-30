import { useState, useEffect } from 'react'
import './App.css'
import Count from './pages/Count'
import StudentList from './pages/StudentList'
import NavBar from './components/NavBar'
import * as studentService from './services/students'


const App = () => {
  // use useEffect + our student service to get all the students
  // save all of the student to some state (students)
  // use the state and map through the students
  
  const [students, setStudents] = useState([])

  useEffect(() => {

    const fetchAllStudents = async () => {
      try{const studentsData= await studentService.index()
       console.log(studentsData) // to see the API array in browser console
        setStudents(studentsData)

      } catch(error) {
        console.log(error)
      }
       
    }

    fetchAllStudents()
  
  }, [])

  return (
  <div>

  <h1>Student directory </h1>

  <NavBar/>
  <StudentList students={students}/>


    </div>
  )
}

export default App
