import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// PARTIE 1
// function App() {
//   const DATE = new Date();
//   return (
//     <>
//       <h1>Ma To-Do List Jeux Vidéo</h1>
//       <h2>{DATE.toLocaleString()}</h2>
//       <ToDo />
//     </>
//   )
// }


// function ToDo() {
//   return (
//     <ul>
//       <li>Baldur's Gate 3</li>
//       <li>Diablo IV</li>
//       <li>Enshrouded</li>
//     </ul>
//   )
// }

// PARTIE 2
function ToDo({todo, date}) {
return <li>{todo}- {date}</li>
}

function App() {
  return (
    <>
      <h1>Ma To-Do List Jeux Vidéo</h1>
      <ul>
        <ToDo todo={"Baldur's Gate 3"} date={"01/05/2026"}/>
        <ToDo todo={"Diablo IV"} date={"03/05/2026"}/>
        <ToDo todo={"Enshrouded"} date={"10/05/2026"}/>
      </ul>
    </>
  );
}

export default App