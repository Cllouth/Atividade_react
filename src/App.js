import logo from './logo.svg';
import './App.css';
import TodolistComponente from './componentes/Todolist';
function App() {
  const Todolist = [
    {id: 1, Text: "Aprender React"},
    {id: 2, Text: "Construir um projeto simples"},
    {id: 3, Text: "Entender Props e State"}
  ];
  return (
      <TodolistComponente tarefas={Todolist}/>
  );
}

export default App;
