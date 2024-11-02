// src/hooks/useTodo.ts
import { useQuery } from '@tanstack/react-query';
import { getTodo } from '../api/todoApi';

export const useTodo = (id: string) => {
  return useQuery({ queryKey: ['todos', id], queryFn: () => getTodo(id) });
};
