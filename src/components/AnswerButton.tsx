import React from 'react';

type AnswerButtonProps = {
  text: string;
  selected: boolean;
  correct: boolean;
  handleClick: () => void;
  word: string;
};

function AnswerButton({ word, text, selected, correct, handleClick }: AnswerButtonProps) {
  const [status, setStatus] = React.useState<'none' | 'selected' | 'correct' | 'error'>('none');

  React.useEffect(() => {
    if (selected) {
      setStatus('selected');
      setTimeout(() => {
        setStatus(correct ? 'correct' : 'error');
      }, 2000);
    } else {
      setStatus('none');
    }
  }, [selected, correct]);

  const buttonClass = `body-game__button answer-button ${status} ${selected ? 'selected' : ''}`;

  return (
    <button className={buttonClass} onClick={handleClick}>
      <span>{word}</span>
      <h2>{text}</h2>
      <svg viewBox="0 0 390 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M33.0722 0.5H356.928C360.541 0.5 363.945 2.19863 366.118 5.08639L389.374 36L366.118 66.9136C363.945 69.8014 360.541 71.5 356.928 71.5H33.0722C29.4585 71.5 26.055 69.8014 23.8825 66.9136L0.625694 36L23.8825 5.08639C26.055 2.19863 29.4585 0.5 33.0722 0.5Z"
          fill="white"
          stroke="#D0D0D8"
        />
      </svg>
    </button>
  );
}

export default AnswerButton;
