import React, { useState, useEffect } from 'react';
import './QuoteGenerator.css';
import axios from 'axios';

const QuoteGenerator = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    // http://api.quotable.io/random
  
    useEffect(() => {
      fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
          (quote) => {
            setQuote(quote.content);  
            setAuthor(quote.author);
          }
        )
    },[]);
  
    let fetchNewQuote = () => {
      fetch("http://api.quotable.io/random")
        .then(res => res.json())
        .then(
          (quote) => {
            setQuote(quote.content);  
            setAuthor(quote.author);
          }
        )
    }
    return (
      <div className="App">
           <div className="quote">
              <h2>{quote}</h2>
              <small>-{author}-</small>
           </div><br />
           <button className="btn" onClick={fetchNewQuote}>Generate New Quote</button>
      </div>
    );
  }

export default QuoteGenerator;
