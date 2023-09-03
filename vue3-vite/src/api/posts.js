// axios
import { posts } from '.';

export function getPosts(params) {
  return posts.get('/', { params });
}

export function getPostById(id) {
  return posts.get(`/${id}`);
}

export function createPost(data) {
  return posts.post('', data);
}

// export function updatePost(id, data) {
//   return posts.put(`/${id}`, data);
// }

// put의 용도는 데이터 전체를 수정하는 메서드
// 일부를 수정할때 사용하는 메서드(patch)로 변경해준다.
export function updatePost(id, data) {
  return posts.patch(`/${id}`, data);
}

export function deletePost(id) {
  return posts.delete(`/${id}`);
}
