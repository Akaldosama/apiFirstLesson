import React from "react";
import Posts from "./1Posts";
import Comments from "./2Comments";
import Albums from "./3Albums";
import Photos from "./4Photos";
import Todos from "./5Todos";
import Users from "./6Users";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div>
      <aside>
        <ul>
          <Link to="/" className="post">Posts</Link>
          <Link to="/Comments" className="post">Comments</Link>
          <Link to="/Albums" className="post">Albums</Link>
          <Link to="/Photos" className="post">Photos</Link>
          <Link to="/Todos" className="post">Todos</Link>
          <Link to="/Users" className="post">Users</Link>
        </ul>
      </aside>
      <section>
        <div className="parent">
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="Comments" element={<Comments />} />
            <Route path="Albums" element={<Albums />} />
            <Route path="Photos" element={<Photos />} />
            <Route path="Todos" element={<Todos />} />
            <Route path="Users" element={<Users />} />
          </Routes>
        </div>
      </section>
    </div>
  );
}
