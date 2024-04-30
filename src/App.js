import './App.css'; 
import Counter from './counter/Counter';
import Title from './layout/Title';
import TodoList from './todo/TodoList';


function App() {
  return (
    <>
      <Title title="에스티컴"/>
      <Counter />
      <TodoList />
    </>
  );
}

export default App;
