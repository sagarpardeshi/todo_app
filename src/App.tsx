import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoListPage from './pages/TodoListPage';
import TodoDetailPage from './pages/TodoDetailPage';
import TodoEditPage from './pages/TodoEditPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TodoListPage />} />
          <Route path="/todos/:id" element={<TodoDetailPage />} />
          <Route path="/todos/edit/:id" element={<TodoEditPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
