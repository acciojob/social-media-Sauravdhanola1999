import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../features/postsSlice";

export default function AddPostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const handleSubmit = () => {
    if (title && content && author) {
      dispatch(postAdded({ title, content, author }));
      setTitle("");
      setContent("");
    }
  };

  return (
    <div>
      <h2>Add a Post</h2>
      <select id="postAuthor" onChange={(e) => setAuthor(e.target.value)}>
        <option value="">Select Author</option>
        {users.map((user) => (
          <option key={user.id} value={user.name}>{user.name}</option>
        ))}
      </select>
      <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSubmit}>Add Post</button>
    </div>
  );
}
