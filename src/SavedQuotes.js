
import React from 'react';
import './SavedQuotes.css';

const SavedQuotes = ({ quotes, onDelete }) => {
  return (
    <div className="saved-quotes">
      <h2>Saved Quotes</h2>
      {quotes.length === 0 ? (
        <p>No saved quotes yet.</p>
      ) : (
        quotes.map((quote, index) => (
          <div key={index} className="saved-quote-card">
            <p className="saved-quote-text">"{quote}"</p>
            <button onClick={() => onDelete(index)} className="delete-button">Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedQuotes;