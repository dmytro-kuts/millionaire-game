import { QuestionData } from '../data/questions';
import AnswerButton from './AnswerButton';

type QuestionProps = {
  question: QuestionData;
  handleAnswerSelect: (index: number) => void;
  selectedAnswer: number | null;
  letters: string;
};

function Question({ question, handleAnswerSelect, selectedAnswer }: QuestionProps) {
  const letters = ['a', 'b', 'c', 'd'];
  return (
    <div className="game__body body-game">
      <h1 className="body-game__title">{question?.text}</h1>
      <div className="body-game__actions">
        {question.answers.map((answer, index) => (
          <AnswerButton
            key={index}
            word={letters[index]}
            text={answer.text}
            selected={selectedAnswer !== undefined && selectedAnswer === index}
            correct={question.correctAnswerIndex === index}
            handleClick={() => handleAnswerSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
