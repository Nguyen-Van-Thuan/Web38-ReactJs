import CallApi from './component/CallApi';
import Counter from './component/Counter';
import DomEffect from './component/DomEffect';
import TodoList from './component/TodoList';

const App = () => {

  return (
    <>
      <Counter/>
      <TodoList/>
      <CallApi/>
      <DomEffect/>
    </>
  )
}

export default App