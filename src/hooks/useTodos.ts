import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../api/todoApi';

export const useTodos = () => {
  return useQuery({ queryKey: ['todos'], queryFn: getTodos });
};
