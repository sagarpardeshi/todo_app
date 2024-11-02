import React from 'react';
import { Link } from 'react-router-dom';

interface TodoItemProps {
  todo: { id: string; title: string; description: string; completed: boolean };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => (
  <div>
    <h2>{todo.title}</h2>
    <p>{todo.description}</p>
    <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
    <button style={{'marginRight': '8px'}}><Link to={`/todos/${todo.id}`}>View Details</Link></button>
    <button><Link to={`/todos/edit/${todo.id}`}>Edit</Link></button>
  </div>
);

export default TodoItem;
