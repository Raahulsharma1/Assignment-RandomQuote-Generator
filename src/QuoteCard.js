
import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className="quote-card">
      <p className="quote-text">"{quote}"</p>
      <button onClick={onSave} className="save-button">Save to List</button>
    </div>
  );
};

export default QuoteCard;