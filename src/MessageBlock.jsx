import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function MessageBlock({ message, markdown = false }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="message-block">
      {markdown
        ? <div className="markdown-block"><ReactMarkdown>{message}</ReactMarkdown></div>
        : <pre className="message-pre">{message}</pre>
      }
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default MessageBlock;
