import React from 'react'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import './App.css'

function App() {
 

  return (
    <div style={{padding: "20px",maxWidth: "900px",margin:"auto"}}>
      <h1>Student Management System</h1>
      <StudentForm />
      <hr/>
      <StudentList />
    </div>
  )
}

export default App
