import React, { useEffect, useState } from 'react';
import { getComments, getPosts } from '../api/api';
import PostCard from './PostCard';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const usersResponse = await getUsers();
      const users = usersResponse.data.users;
      let allPosts = [];

      for (const userId in users) {
        const postsResponse = await getPosts(userId);
        const posts = postsResponse.data.posts;
        for (const post of posts) {
          const commentsResponse = await getComments(post.id);
          const commentCount = commentsResponse.data.comments.length;
          allPosts.push({ ...post, commentCount });
        }
      }

      // Sort by newest first
      allPosts.sort((a, b) => b.id - a.id);
      setPosts(allPosts);
    };

    fetchFeed();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Feed</h2>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          content={post.content}
          commentsCount={post.commentCount}
          randomImage={`https://picsum.photos/200?random=${post.id}`} // Random image for each post
        />
      ))}
    </div>
  );
};

export default Feed;
