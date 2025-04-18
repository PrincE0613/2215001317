import React, { useEffect, useState } from 'react';
import { getComments, getPosts, getUsers } from '../api/api';

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const fetchTopUsers = async () => {
      const usersResponse = await getUsers();
      const users = usersResponse.data.users;
      const userPosts = await Promise.all(
        Object.keys(users).map(async (userId) => {
          const postsResponse = await getPosts(userId);
          const posts = postsResponse.data.posts;
          let commentCount = 0;
          for (const post of posts) {
            const commentsResponse = await getComments(post.id);
            commentCount += commentsResponse.data.comments.length;
          }
          return { userId, userName: users[userId], commentCount };
        })
      );
      userPosts.sort((a, b) => b.commentCount - a.commentCount);
      setTopUsers(userPosts.slice(0, 5)); // Get top 5 users
    };

    fetchTopUsers();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Top Users</h2>
      <ul>
        {topUsers.map((user) => (
          <li key={user.userId} className="mb-4">
            {user.userName} - Comments: {user.commentCount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
