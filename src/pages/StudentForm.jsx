// src/pages/StudentForm.jsx

import { useState } from 'react'
import { useNavigate } from 'react-router'
// to redicet to a page directly


const initialState = {
  name: '',
  favoriteFood: '',
  favoriteEmoji: '',
}

const StudentForm = (props) => {
  const [formData, setFormData] = useState(initialState)
  // to activate navigate
  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // submit the form content to API ☝️


    try {
      await props.addStudent(formData)
      setFormData(initialState)
      // to create and get what wrote in input as new value ☝️
      // to use it 👇
      navigate('/students')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      <h2>Add a Student</h2>

      <form onSubmit={handleSubmit}>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        Favorite food:
        <input
          type="text"
          name="favoriteFood"
          value={formData.favoriteFood}
          onChange={handleChange}
        />

        Favorite emoji:
        <input
          type="text"
          name="favoriteEmoji"
          value={formData.favoriteEmoji}
          onChange={handleChange}
        />

        <button type="submit">Add Student</button>
      </form>
    </main>
  )
}

export default StudentForm
