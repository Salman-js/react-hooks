import React, { useState } from 'react';
import { mainPosts } from '../data/data';

function UpdateOneValue() {
  const [posts, setPosts] = useState(mainPosts);
  function addLike(id) {
    let updatedPosts = [...posts];
    const index = updatedPosts.findIndex((post) => post.id === id);
    if (index !== -1) {
      updatedPosts[index] = {
        ...updatedPosts[index],
        likes: [
          ...updatedPosts[index].likes,
          {
            id: 2,
            name: 'Sal',
          },
        ],
      };
      setPosts(updatedPosts);
    }
  }
  return (
    <div>
      {posts.map((post, index) => (
        <div>
          <div key={index}>{post.title}</div>
          <div>
            {post.likes.length}{' '}
            <button onClick={() => addLike(post.id)}>like</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpdateOneValue;
