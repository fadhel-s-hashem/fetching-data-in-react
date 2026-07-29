import { useState, useEffect } from 'react'
import './App.css'
import Count from './components/Count'
import * as studentService from './services/students'


const App = () => {
  // use useEffect + our student service to get all the students
  // save all of the student to some state
  // use the state and map through the students

  useEffect(() => {
    const fetchAllStudents = async () => {
       const studentsData= studentService.index()
       console.log(studentsData) // to see the API array in browser console
    }

    fetchAllStudents()
  
  }, [])

  return (
  <div>
  <h1>Fetching Data in React</h1>

    <Count/>
    </div>
  )
}

export default App
