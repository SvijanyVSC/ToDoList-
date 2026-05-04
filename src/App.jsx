import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const DATE = new Date();
  return (
    <>
      <h1>Ma To-Do List Jeux Vidéo</h1>
      <h2>{DATE.toLocaleString()}</h2>
      <ToDo />
    </>
  )
}

function ToDo() {
  return (
    <ul>
      <li>Baldur's Gate 3</li>
      <li>Diablo IV</li>
      <li>Enshrouded</li>
    </ul>
  )
}

export default App