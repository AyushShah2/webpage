import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./Prompts.css";

function PromptPage({ promptFile, title, aiLink }) {
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [aiLinkCopied, setAiLinkCopied] = useState(false);

  useEffect(() => {
    fetch(`/webpage/prompts/${promptFile}`)
      .then((res) => res.text())
      .then((text) => setMessage(text))
      .catch((err) => console.error("Error loading prompt:", err));
  }, [promptFile]);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyAiLink = () => {
    navigator.clipboard.writeText(aiLink);
    setAiLinkCopied(true);
    setTimeout(() => setAiLinkCopied(false), 2000);
  };

  return (
    <div className="centered-content">
      <h2>{title}</h2>

      {/* Prompt Display */}
      <div className="message-block">
        <div className="markdown-block">
          <ReactMarkdown>{message}</ReactMarkdown>
        </div>
        <button onClick={handleCopyPrompt} className="copy-button">
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* AI Link Section - Moved Below */}
      <div className="ai-link-section">
        <p className="ai-link-label">📤 Sharing with your AI Assistant?</p>
        <div className="ai-link-container">
          <input
            type="text"
            value={aiLink}
            readOnly
            className="ai-link-input"
          />
          <button onClick={handleCopyAiLink} className="copy-button-link">
            {aiLinkCopied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      </div>
    </div>
  );
}

export function WhaleActivityPrompt() {
  return (
    <PromptPage
      promptFile="whale-activity.txt"
      title="Institutional & Whale Activity Stock Analysis Prompt"
      aiLink="https://ayushshah2.github.io/webpage/prompts/whale-activity.txt"
    />
  );
}

export function SocialMediaHypePrompt() {
  return (
    <PromptPage
      promptFile="social-media-hype.txt"
      title="Social Media Stock Hype Tracker Prompt"
      aiLink="https://ayushshah2.github.io/webpage/prompts/social-media-hype.txt"
    />
  );
}
