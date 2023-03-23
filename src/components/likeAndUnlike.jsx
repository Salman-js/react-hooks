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
  function removeLike(id) {
    let updatedPosts = [...posts];
    const index = updatedPosts.findIndex((post) => post.id === id);
    if (index !== -1) {
      updatedPosts[index] = {
        ...updatedPosts[index],
        likes: updatedPosts[index].likes.filter((object) => {
          return object.id !== 2;
        }),
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
            {posts[index].likes.findIndex((like) => like.id === 2) !== -1 ? (
              <button onClick={() => removeLike(post.id)}>
                Unlike {post.likes.length}
              </button>
            ) : (
              <button onClick={() => addLike(post.id)}>
                Like {post.likes.length}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpdateOneValue;
