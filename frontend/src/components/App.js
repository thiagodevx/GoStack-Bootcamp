import React, { useState, useEffect } from 'react'
import Header from './Header'
import api from '../services/api'
import './App.css'

export default _ => {
  const [projects, setProjects] = useState([
    'Desenvolvimento de app',
    'Front-end web'
  ])
  useEffect(() => {
    api.get('projects').then(response => setProjects(response.data))
  }, [])
  const addProject = () => {
    setProjects([...projects, 'Novo projeto'])
  }
  return (
    <>
      <Header title="ReactJS" />
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
      <button onClick={addProject}>Adicionar projeto</button>
    </>
  )
}
