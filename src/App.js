import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const pages = [
  { path: "/page1", label: "Page 1", content: "Content for Page 1" },
  { path: "/page2", label: "Page 2", content: "Content for Page 2" },
  { path: "/page3", label: "Page 3", content: "Content for Page 3" }
];

function LandingPage() {
  return (
    <div>
      <h1>All Pages</h1>
      <ul>
        {pages.map((p) => (
          <li key={p.path}>
            <Link to={p.path}>{p.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Page({ content }) {
  return <div>{content}</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {pages.map((p) => (
          <Route
            path={p.path}
            element={<Page content={p.content} />}
            key={p.path}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
