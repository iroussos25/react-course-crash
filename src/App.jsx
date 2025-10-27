import './App.css';
import Todo from './Components/Todo.jsx';
import Title from './Components/Title.jsx';


function App() {
  return (
    <div>
    <Title />
       <div className="todo__wrapper">
       
     <Todo></Todo>
     <Todo />
     <Todo />
     
       </div>
   
     </div>
  );
}

export default App;
