import React, { useEffect, useState } from 'react';
import { getComments, getPosts } from '../api/api';
import PostCard from './PostCard';

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
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

      allPosts.sort((a, b) => b.commentCount - a.commentCount);
      setTrendingPosts(allPosts.slice(0, 5)); // Display top 5 trending posts
    };

    fetchTrendingPosts();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Trending Posts</h2>
      {trendingPosts.map((post) => (
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

export default TrendingPosts;
