import axios from 'axios';

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
  // Requisição type GET
  getAllPosts: async () => {
    let response = await http.get('/posts')
    return response.data;
  },
  // Requisição type Post
  addNewPost: async (title: string, body: string, userId: number) => {
    let response = await http.post('/posts', {title, body, userId})
    return response.data;
  }
}