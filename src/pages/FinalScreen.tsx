import React from 'react';
import { Link } from 'react-router-dom';

type FinalScreenProps = {
  score: number;
};
function FinalScreen({ score }: FinalScreenProps) {
  return (
    <section className="page__game-end game-end">
      <div className="game-end__container">
        <div className="game-end__body">
          <h1>
            Total score:
            <span>
              {score.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
              })}
              earned
            </span>
          </h1>
          <Link to="/" className="game-end__button button">
            Try again
          </Link>
        </div>
        <img className="game-end__image" src="../assets/cool.png" alt="Cool" />
      </div>
    </section>
  );
}

export default FinalScreen;
