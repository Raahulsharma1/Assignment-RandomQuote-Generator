
import React, { useState, useEffect } from 'react';
import QuoteCard from './QuoteCard';
import SavedQuotes from './SavedQuotes';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState(null);
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      const data = await response.json();
      setQuote(data[0]);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const saveQuote = () => {
    if (quote) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  };

  const deleteQuote = (index) => {
    const updatedQuotes = savedQuotes.filter((_, i) => i !== index);
    setSavedQuotes(updatedQuotes);
  };

  return (
    <div className="app">
      <h1>Random Quote</h1>
      {quote && <QuoteCard quote={quote} onSave={saveQuote} />}
      <SavedQuotes quotes={savedQuotes} onDelete={deleteQuote} />
      <button onClick={fetchQuote} className="fetch-button">New Quotes </button>
    </div>
  );
};

export default App;