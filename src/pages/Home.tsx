import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentQuestion, setScore, setSelectedAnswer } from '../redux/slices/gameSlice';

function Home() {
  const dispatch = useDispatch();

  const handleStartClick = () => {
    dispatch(setCurrentQuestion(0));
    dispatch(setScore(0));
    dispatch(setSelectedAnswer(null));
  };

  return (
    <section className="page__game-start game-start">
      <div className="game-start__container">
        <div className="game-start__body">
          <h1>Who wants to be a millionaire?</h1>
          <Link to="/game" className="game-start__button button" onClick={handleStartClick}>
            Start
          </Link>
        </div>
        <img className="game-start__image" src="../assets/cool.png" alt="Cool" />
      </div>
    </section>
  );
}

export default Home;
