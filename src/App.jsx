import { useState, useEffect } from 'react'
import * as studentService from './services/students'
import './App.css'
import Count from './pages/Count'
import StudentList from './pages/StudentList'
import NavBar from './components/NavBar'
import StudentDetails from './pages/StudentDetails'
import StudentForm from './pages/StudentForm'
import { Route, Routes } from 'react-router'
import { Button, Card, Spin } from 'antd'




const App = () => {
  // use useEffect + our student service to get all the students
  // save all of the student to some state (students)
  // use the state and map through the students
  
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(true) //this to solve some errors

  useEffect(() => {

    const fetchAllStudents = async () => {
      try{const studentsData= await studentService.index()
       console.log(studentsData) // to see the API array in browser console
        setStudents(studentsData)

      } catch(error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
       
    }

    fetchAllStudents()
  
  }, [])

  const addStudent = async (formData) => {
    const newStudent = await studentService.create(formData)
    setStudents([...students, newStudent])
  }
  // to create students to list :☝️

  return (
  <div>

  <h1>Student directory </h1>

  <NavBar/>
  <Button type="primary">Ant Design is working</Button>


  <Routes>
    <Route path='/' element={<h2> Welcome to the Students Directory</h2>}/>
    <Route path='/students' element={<StudentList students={students}/>}/>
    <Route path='/students/:studentId' element={<StudentDetails students={students} isLoading={isLoading}/>}/>
    <Route
          path="/students/new"
          element={<StudentForm addStudent={addStudent} />}
        />
    <Route path='*' element={<h2>page not found</h2>}/>

  </Routes>


  


    </div>
  )
}

export default App
