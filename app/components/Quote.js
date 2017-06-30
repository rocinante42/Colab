import React from 'react';

class Quote extends React.Component {
  render() {
    const quotes = [
      {},
    ]
    return (
      <div style={{ margin: '0 auto' }}>
        <blockquote className="blockquote-reverse">
          <p><h1>Hace tiempo que queria hacer esto</h1></p>
          <footer>Someone that I used to know</footer>
        </blockquote>
      </div>
    );
  }
}

export default Quote;
