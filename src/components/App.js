import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./PostList";
import AddPostForm from "./AddPostForm";
import EditPostForm from "./EditPostForm";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/create" element={<AddPostForm />} />
        <Route path="/edit/:id" element={<EditPostForm />} />
      </Routes>
    </Router>
  );
}
