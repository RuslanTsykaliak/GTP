import React from "react";

export default function Translation({ doStuff, setInput, result }) {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div>
      <textarea
        className="text-area"
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="action-btn" onClick={doStuff}>
        DO YOU STUFF!
      </button>

      <button className="action-btn" onClick={handleReload}>
        Return to Home
      </button>

      <h3 className="result-text">{result.length > 0 ? result : ""}</h3>
    </div>
  );
}
