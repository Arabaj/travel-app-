// src/App.js
import React, { useState, useEffect } from 'react';
import Card from './component/card';
import './App.css';

const defaultCards = [
  { id: 1, title: 'India', description: 'The Country of Tradition.',price:'$120000',image:'https://wallpaperaccess.com/full/2346185.jpg'},
  { id: 2, title: 'Tokyo', description: 'Tokyo was originally known as Edo (江戸)',price:'$123000',image:'https://tse1.mm.bing.net/th?id=OIP.oJwIIsJXLC0tGHXsBZUObgHaEK&pid=Api&P=0&h=180'},
  { id: 4, title: 'Paris', description: 'The city that never sleeps.',price:'$142000', image:'https://tse2.mm.bing.net/th?id=OIP.X-mRHSLlbtnaQcOKx9DNnAHaEK&pid=Api&P=0&h=180'},
  { id: 5, title: 'Dubai', description: 'Populous city in the United Arab Emirates .',price:'$102000',image:'https://wallpaperaccess.com/full/1735114.jpg'},
];

const App = () => {
  const [cards, setCards] = useState(defaultCards);

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem('cards'));
    if (savedCards) {
      setCards(savedCards);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const refreshCards = () => {
    setCards(defaultCards);
    localStorage.removeItem('cards');
  };

  return (
    <div className="App">
      <h1>Travel App</h1>
      <div className="card-container">
        {cards.map(card => (
          <Card key={card.id} {...card} onDelete={deleteCard} />
        ))}
      </div>
      {cards.length === 0 && <button onClick={refreshCards}>Refresh</button>}
      
    </div>
  );
  
};

export default App;
