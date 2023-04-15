import {useEffect} from 'react'
import {useDispatch} from 'react-redux'

import { TodoList } from './components/TodoList';
import { UserList } from './components/UserList';
import { NewTodo } from './components/NewTodo';

import {loadUsers} from './store/users/user-actions'
import { loadTodos } from './store/todos/todo-action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadTodos())
  }, []);

  return (
    <div className="App">
      <h1>Hello Redux Thunk</h1>
      <NewTodo/>
      <UserList />
      <TodoList />
    </div>
  );
}

export default App;
