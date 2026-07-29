const BASE_URL = 'https://student-names-api.onrender.com/students'

const index = async () => {
    const res = await fetch(BASE_URL)
const data = await res.json()

if(!res.ok) {
    throw new Error(`${res.status}: ${data.message}`)
}// this is error handling

console.log(data);
// in terminal add the path (node src/services/students.js)
}

// index()

let newStudent ={
    name: 'Fadhel',
    favoriteFood: 'Not added yet',
    favoriteEmoji: '👾'
}

const create = async (newStudent)=>{
    const res = await fetch(BASE_URL, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStudent)
    })

    const data = await res.json()
    console.log(data)
}


// create()

const deleteStudent = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        
    }) 
    const data = await res.json()
    console.log(data)
}

// deleteStudent(9) // the id of what you want to delete

let formData = { favoriteEmoji: "👋"}

const UpdateStudent = async (id, updatedStudent) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedStudent),
    }
)
const data = await res.json()
console.log(data)

}

// UpdateStudent(7, formData)

export {
  index,
  create,
  deleteStudent,
  UpdateStudent,
}






