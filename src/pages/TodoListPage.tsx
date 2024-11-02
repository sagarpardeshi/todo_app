import React from 'react';
import { useTodos } from '../hooks/useTodos';
import TodoItem from '../components/TodoItem';

const TodoListPage: React.FC = () => {
  const { data: todos, isLoading, error } = useTodos();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading todos</p>;

  return (
    <div>
      <h1>Todo List</h1>
      {todos?.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoListPage;
