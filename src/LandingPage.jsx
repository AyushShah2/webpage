import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <h1 className="landing-title">AI Trading Prompts Hub</h1>
      <p className="landing-desc">
        Power your trading research with advanced prompts for AI tools - stock/whale activity, social sentiment, and more.
      </p>
      <div className="prompt-sections">
        <div className="prompt-card">
          <h2>Whale & Institutional Activity Stock Prompt</h2>
          <p>Deep-dive into insider trades, institutional moves, and actionable analysis.</p>
          <Link className="prompt-link" to="/whale-activity">View Prompt</Link>
        </div>
        <div className="prompt-card">
          <h2>Social Media Hype Stock Prompt</h2>
          <p>Track organic and pumped stock hype across popular platforms.</p>
          <Link className="prompt-link" to="/social-media-hype">View Prompt</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
