import React from 'react';
import { QuestionData } from '../data/questions';
import { Question, Sidebar } from '../components';

type GameProps = {
  questions: QuestionData[];
  currentQuestion: number;
  handleAnswerSelect: (index: number) => void;
  selectedAnswer: number | null;
};

function Game({ questions, currentQuestion, handleAnswerSelect, selectedAnswer }: GameProps) {
  const question = questions[currentQuestion];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={`page__game game ${isMenuOpen ? 'menu-open' : ''} `}>
      <button type="button" className="game__icon icon-menu" onClick={handleMenuToggle}>
        <span></span>
      </button>
      <div className={`game__block `}>
        <Question
          question={question}
          handleAnswerSelect={handleAnswerSelect}
          selectedAnswer={selectedAnswer}
          letters={''}
        />
        <Sidebar questions={questions} currentQuestion={currentQuestion} />
      </div>
    </section>
  );
}

export default Game;
