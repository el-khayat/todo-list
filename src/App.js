import './App.css';
import TodoList from './pages/todo-list'; 
import Header from "./components/header/Header.component"


function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;