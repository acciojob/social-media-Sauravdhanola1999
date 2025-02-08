import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUpdated } from "../features/postsSlice";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPostForm() {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.find((post) => post.id === id));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSave = () => {
    dispatch(postUpdated({ id, title, content }));
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <input id="postTitle" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea id="postContent" value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
