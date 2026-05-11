import './App.css'

const TODOS = [
  { nom: "Baldur's Gate 3", date: "01-05-2026", checked: true },
  { nom: "Diablo IV", date: "03-05-2026", checked: true },
  { nom: "Enshrouded", date: "10-05-2026", checked: false }
]

function ToDo({ todo }) {
  function handleClick(nom) {
    alert(nom)
  }

  if (todo.checked) {
    return <li onClick={() => handleClick(todo.nom)} className='green'><input type='checkbox' defaultChecked />{todo.nom} - {todo.date}</li>
  }
  return <li onClick={() => handleClick(todo.nom)} className='orange'>{todo.nom} - {todo.date}</li>
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

function App() {
  const DATE = new Date()

  function handleSubmit(event){
    event.preventDefault();
    const INPUTS = document.querySelectorAll('input[type="text"]');
    const TAB = ["toto", "tata"]
    INPUTS.forEach((input) => {console.log(input.value)});
  
  }

  return (
    <>
      <h1>My Todo List</h1>
      <h2>{DATE.toLocaleString()}</h2>
      <ul>
        {TODOS.map((todo, index) => (
          <ToDo todo={todo} key={index} />
        ))}
      </ul>
      <Form onSubmit={event=> handleSubmit(event)} />
    </>
    
  )
}

export default App

// 9) Dans le composant App(), créer une fonction handleSubmit() qui prendra un event en
// paramètre. Cette fonction fait d’abord un preventDefault() sur event. Puis elle récupère tous
// les inputs de type text avec un querySelectorAll, et les stockent dans une constante INPUTS.
// Enfin, elle parcourt le tableau INPUTS avec une boucle pour afficher la value de chaque
// élément
// 10) Enfin, concernant le Composant Form() importé dans App(), passer à sa Props onSubmit une
// fonction fléchée qui prend un event en paramètre, et appelle la fonction handleSubmit() en
// lui passant l’event