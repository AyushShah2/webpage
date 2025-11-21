import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { WhaleActivityPrompt, SocialMediaHypePrompt } from "./Prompts";
import LandingPage from "./LandingPage";
import "./App.css";

function App() {
  return (
    <div className="app-bg">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/whale-activity" element={<WhaleActivityPrompt />} />
          <Route path="/social-media-hype" element={<SocialMediaHypePrompt />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
