import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const createTodo = async (todo: {
  title: string;
  description: string;
}) => {
  const response = await api.post('/todos', todo);
  console.log(response.data)
  return response.data;
};

export const getTodos = async () => {
    console.log(process.env.REACT_APP_API_URL)
  const response = await api.get('/todos');
  return response.data;
};

export const getTodo = async (id: string) => {
  const response = await api.get(`/todos/${id}`);
  return response.data;
};

export const updateTodo = async (
  id: string,
  todo: { title: string; description: string; completed: boolean }
) => {
  const response = await api.put(`/todos/${id}`, todo);
  return response.data;
};
