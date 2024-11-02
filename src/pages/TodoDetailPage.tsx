import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTodo } from '../hooks/useTodo';

const TodoDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: todo, isLoading, error } = useTodo(id!);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading todo</p>;

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
      <button><Link to={`/`}>Goto List page</Link></button>
    </div>
  );
};

export default TodoDetailPage;
