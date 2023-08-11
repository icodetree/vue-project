// axios
import axios from 'axios';

const posts = [
  { id: 1, title: '제목1', content: '내용1', createdAt: '2021-01-02' },
  { id: 2, title: '제목2', content: '내용2', createdAt: '2021-02-02' },
  { id: 3, title: '제목3', content: '내용3', createdAt: '2021-03-02' },
  { id: 4, title: '제목4', content: '내용4', createdAt: '2021-04-02' },
  { id: 5, title: '제목5', content: '내용5', createdAt: '2021-05-02' },
];

export function getPosts(params) {
  return axios.get('http://localhost:3002/posts', { params });
}

export function getPostById(id) {
  return axios.get(`http://localhost:3002/posts/${id}`);
}

export function createPost(data) {
  return axios.post('http://localhost:3002/posts', data);
}

export function updatePost(id, data) {
  return axios.put(`http://localhost:3002/posts/${id}`, data);
}

export function deletePost(id) {
  return axios.delete(`http://localhost:3002/posts/${id}`);
}
