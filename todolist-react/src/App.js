import './App.css';
//import TodoTotal from './components/TodoTotal';
import {useState} from 'react';
import HeaderInput from './components/HeaderInput';
//import './components/TodoTotal.css';

function App() {
  const [todoState, setTodoState] = useState({
    todoLists: [
      {id: 1, text: "할일1"},
      {id: 2, text: "할일2"}
    ],
    inputText: ""
  });
  const onChange = (e) => {
    setTodoState({
      ...todoState,
      inputText: e.target.value
    });
    
}
const onAddTodo = () => {
  const newTodoLists = [
      ...todoState.todoLists,
      {id: todoState.todoLists.length+1, text: todoState.inputText}
  ]
  setTodoState({
    todoLists:newTodoLists,
    inputText: ""
  })
  console.log(todoState.todoLists)
}
  return (
    <div className="App">
      <HeaderInput inputText={todoState.inputText} onChange={onChange} 
      onAddTodo={onAddTodo}/>
    </div>
  );
}

export default App;
