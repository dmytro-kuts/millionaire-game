import { createSlice } from '@reduxjs/toolkit';
import { QuestionData } from '../../data/questions';
import questionsData from '../../data/questions.json';

interface GameState {
  score: number;
  currentQuestion: number;
  selectedAnswer: number | null;
}

const initialState: GameState = {
  score: 0,
  currentQuestion: 0,
  selectedAnswer: null,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    setSelectedAnswer: (state, action) => {
      state.selectedAnswer = action.payload;
    },
  },
});

export const { setScore, setCurrentQuestion, setSelectedAnswer } = gameSlice.actions;

export const selectScore = (state: { game: GameState }) => state.game.score;
export const selectCurrentQuestion = (state: { game: GameState }) => state.game.currentQuestion;
export const selectSelectedAnswer = (state: { game: GameState }) => state.game.selectedAnswer;

export const questions = questionsData as QuestionData[];

export default gameSlice.reducer;

//========================================================================================================================================================
