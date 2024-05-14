import './App.css'; 
import Counter from './counter/Counter';
import Title from './layout/Title';
import TodoList from './todo/TodoList';
import TodoList2 from './todo2/TodoList2';


function App() {
  return (
    <>
      <Title title="에스티컴"/>
      <Counter />
      {/* <TodoList /> */}
      <TodoList2 />
    </>
  );
}

export default App;
