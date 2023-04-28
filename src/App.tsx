import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home, Game, FinalScreen } from './components';

import {
  setCurrentQuestion,
  setScore,
  setSelectedAnswer,
  questions,
  selectScore,
  selectCurrentQuestion,
  selectSelectedAnswer,
} from './redux/slices/gameSlice';

type Answer = {
  text: string;
  correct: boolean;
};

export type QuestionData = {
  id: number;
  text: string;
  points: number;
  answers: Answer[];
  correctAnswerIndex: number;
};

function App() {
  const dispatch = useDispatch();
  const score = useSelector(selectScore);
  const currentQuestion = useSelector(selectCurrentQuestion);
  const selectedAnswer = useSelector(selectSelectedAnswer);
  const navigate = useNavigate();

  const handleAnswerSelect = (index: number) => {
    dispatch(setSelectedAnswer(index));

    setTimeout(() => {
      if (questions[currentQuestion].correctAnswerIndex === index) {
        dispatch(setCurrentQuestion(currentQuestion + 1));
        dispatch(setScore(questions[currentQuestion].points));
        dispatch(setSelectedAnswer(null));

        if (currentQuestion === questions.length - 1) {
          navigate('/final');
        }
      } else {
        navigate('/final');
      }
    }, 3000);
  };

  return (
    <div className="wrapper">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/game"
            element={
              <Game
                questions={questions}
                currentQuestion={currentQuestion}
                selectedAnswer={selectedAnswer}
                handleAnswerSelect={handleAnswerSelect}
              />
            }
          />
          <Route
            path="/game/:id"
            element={
              <Game
                questions={questions}
                currentQuestion={parseInt(':id')}
                selectedAnswer={selectedAnswer}
                handleAnswerSelect={handleAnswerSelect}
              />
            }
          />
          <Route path="/final" element={<FinalScreen score={score} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
