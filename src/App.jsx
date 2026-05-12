import './App.css'
import { useState } from "react";

const TODOS = [
  { nom: "Baldur's Gate 3", date: "01-05-2026", heure: 10, categorie: "CRPG", checked: true },
  { nom: "Diablo IV", date: "03-05-2026", heure: 16, categorie: "Hack 'n' slash", checked: true },
  { nom: "Enshrouded", date: "10-05-2026", heure: 0, categorie: "Survie", checked: false }
]

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
        <input type='checkbox'/>{todo.nom} - {todo.date} : {heure}
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
  const [crpg, setCrpg] = useState( true ) 
  const [hackSlash, setHackSlash] = useState( true ) 
  const [survie, setSurvie] = useState( true ) 
  const TODOLIST = TODOS.filter(element => { 
         if (element.categorie == "CRPG" && !crpg == true) { 
      return false 
    } 
      if (element.categorie == "Hack 'n' slash" && !hackSlash == true) { 
      return false 
    } 
      if (element.categorie == "Survie" && !survie == true) { 
      return false 
    } 
    return true
  })

 
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
        {TODOLIST.map((todo, index) => (
          <ToDo todo={todo} key={index} heureRestante={todo.heure} />
        ))}
      </ul>
      <section>
        <label htmlFor="name">CRPG :</label>
        <input type="checkbox" checked={crpg} onChange = {() => setCrpg( !crpg )} />
        <label htmlFor="name">Hack 'n' slash :</label>
        <input type="checkbox" checked={hackSlash} onChange = {() => setHackSlash( !hackSlash)} />
        <label htmlFor="name" > Survie :</label>
        <input type="checkbox" checked={survie} onChange = {() => setSurvie( !survie)} />
      </section>
      <Form onSubmit={event=> handleSubmit(event)} />
    </>
    
  )
}

export default App
