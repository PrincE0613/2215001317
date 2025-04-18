import React from 'react';

const PostCard = ({ content, commentsCount, randomImage }) => {
  return (
    <div className="border p-4 mb-4 rounded-md shadow-md">
      <img src={randomImage} alt="Post" className="w-full h-32 object-cover rounded-md mb-4" />
      <p className="text-xl font-bold">{content}</p>
      <p className="text-sm text-gray-600">Comments: {commentsCount}</p>
    </div>
  );
};

export default PostCard;
