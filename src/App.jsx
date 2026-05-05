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
// function ToDo({todo, date}) {
// return <li>{todo}- {date}</li>
// }

// function App() {
//   return (
//     <>
//       <h1>Ma To-Do List Jeux Vidéo</h1>
//       <ul>
//         <ToDo todo={"Baldur's Gate 3"} date={"01/05/2026"}/>
//         <ToDo todo={"Diablo IV"} date={"03/05/2026"}/>
//         <ToDo todo={"Enshrouded"} date={"10/05/2026"}/>
//       </ul>
//     </>
//   );
// }

// PARTIE 3
const TODOS = ["Baldur's Gate 3", "Diablo IV", "Enshrouded"]

function ToDo({todo}){
  return <li>{todo}</li>
}

function App() {
  const LIST_TODO = []

TODOS.forEach(todo => {
  LIST_TODO.push(<ToDo key={TODOS.indexOf(todo)} todo={todo} />)
})

return (
  <ul>
    {LIST_TODO}
  </ul>
);
}
    export default App

// Exercice 1 : ToDo List partie 3
// 1) Au début du fichier App.jsx, créer une constante TODOS qui est un tableau contenant
// plusieurs objets. Chaque objet possède une attribut todo et un attribut date (choisir les
// valeurs des attributs pour chacun des objets)

// 2) Au sein du Composant App, retourner, grâce une boucle, l’affichage de chaque ToDo sous
// forme de composant ToDo (ainsi, chaque ToDo ne sera plus affichée de manière individuelle).
// Ne pas oublier d’inclure une key à chaque ToDo.

// 3) Une fois fini, pusher sur le dépôt github et envoyer un MP pour m'avertir