import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function PostList() {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="posts-list">
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <Link to={`/edit/${post.id}`} className="button">Edit</Link>
        </div>
      ))}
    </div>
  );
}
