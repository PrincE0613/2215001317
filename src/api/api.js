const BASE_URL = 'http://20.244.56.144/evaluation-service';

export const fetchUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
};

export const fetchPostsByUser = async (userId) => {
  const res = await fetch(`${BASE_URL}/users/${userId}/posts`);
  return res.json();
};

export const fetchCommentsByPost = async (postId) => {
  const res = await fetch(`${BASE_URL}/posts/${postId}/comments`);
  return res.json();
};
