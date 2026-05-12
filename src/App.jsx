import './App.css'
import { useState } from "react";

const TODOS = [
  { nom: "Baldur's Gate 3", date: "01-05-2026", heure:10, categorie: "CRPG", checked: true },
  { nom: "Diablo IV", date: "03-05-2026", heure:16, categorie: "Hack 'n' slash", checked: true },
  { nom: "Enshrouded", date: "10-05-2026", heure: 0, categorie: "Survie", checked: false }
]
// Rajouter à chaque objet du tableau TODOS un attribut heure (à remplir avec un entier
// numérique) et un attribut categorie (à remplir avec une chaîne de caractère).
// 2) Dans le Composant ToDo(), rajouter, dans le <li>, un <button> - </button> et un <button> +
// <button> (un bouton moins et un bouton plus)
// 3) Donner au Composant ToDo() le nouveau Prop heureRestante. Puis définir un nouvel état
// local appelé heures qui sera initialisé par le Prop heureRestante :
// (const [heure, setHeure] = useState( heureRestante )
// 4) Dans le Composant ToDo(), définir une fonction handleClickMinus() (on l’appellera lors du
// clic sur le bouton - ), et une fonction handleClickPlus() (on l’appellera lors du clic sur le
// bouton + ).
// 5) La fonction handleClickPlus() va ajouter 1 à la valeur de l’état heures grâce à setHeures :
// ( setHeures(heures + 1) )
// 6) La fonction handleClickMinus() va vérifier si l’état heures est supérieur à 0, et si c’est le cas, il
// va soustraire 1 à la valeur de l’état heures
// 7) Sur chaque <button>, ajouter l’événement onClick et faite lui appeler la fonction handleClick
// appropriée

// 8) En utilisant l’état local heures, faire en sorte que le composant ToDo() affiche le nombre
// d’heure restante pour chaque tache

// 9) Lors de l’appel du composant ToDo() dans le composant App(), ne pas oublier de donner une
// valeur au Prop heureRestante

function ToDo({todo, heureRestante}) {
  // function handleClick(nom) {
  //   alert(nom)
  // }
  const [heure, setHeure] = useState(heureRestante)
  function handleClickMinus() {
    if (heureRestante > 0) {
      setHeure(heure - 1);
    }
    
  }
  function handleClickPlus(){
    setHeure(heure + 1);
  }
    if (todo.checked) {
      return <li onClick={() => handleClick(todo.nom)} className='green'>
          <button onClick={handleClickMinus}> - </button> 
          <button onClick={handleClickPlus}> + </button>
          <input type='checkbox' defaultChecked />{todo.nom} - {todo.date} : {heure}
        </li>
    }
      return <li onClick={() => handleClick(todo.nom)} className='orange'>
        <button onClick={handleClickMinus}> - </button> 
        <button onClick={handleClickPlus}> + </button>
        {todo.nom} - {todo.date} : {heure}
      </li>
}

function Form({onSubmit}) {
    function handleChange(event) {
    console.log(event.target.value)
  }

  return <form onSubmit={onSubmit} >
    <input type="text" placeholder='La ToDo' onChange={event=>handleChange(event)} />
    <input type="text" placeholder='La Date' onChange={event=>handleChange(event)} />
    <input type="submit" />
  </form>
}

function App({heureRestante}) {
  const DATE = new Date()
  function handleSubmit(event){
    event.preventDefault();
    const INPUTS = document.querySelectorAll('input[type="text"]');
    INPUTS.forEach((input) => {console.log(input.value)});
  }

  return (
    <>
      <h1>My Todo List</h1>
      <h2>{DATE.toLocaleString()}</h2>
      <ul>
        {TODOS.map((todo, index) => (
          <ToDo todo={todo} key={index} heureRestante={todo.heure} />
        ))}
      </ul>
      <Form onSubmit={event=> handleSubmit(event)} />
    </>
    
  )
}

export default App

