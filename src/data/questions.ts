type Answer = {
  text: string;
};

export type QuestionData = {
  id: number;
  text: string;
  answers: Answer[];
  correctAnswerIndex: number;
  points: number;
};
