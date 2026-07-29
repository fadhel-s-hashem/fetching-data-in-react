const res = await fetch('https://student-names-api.onrender.com/students')
const data = await res.json()

console.log(data);
// in terminal add the path (node src/services/students.js)


