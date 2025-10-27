import './App.css';
import Todo from './Components/Todo.jsx';
import Title from './Components/Title.jsx';
import Modal from './Components/modal.jsx';


function App() {
  return (
    <div>
    <Title />
       <div className="todo__wrapper">
       
     <Todo title= "Finish Frontend Simplified"/>
     <Todo title = "Finish Interview Section"/>
     <Todo title = "Land a $100k Job"/>
       </div>
    {/* <Modal /> */}
   
     </div>
  );
}

export default App;
