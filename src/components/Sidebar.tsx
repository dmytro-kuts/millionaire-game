import { QuestionData } from '../data/questions';

type SidebarProps = {
  questions: QuestionData[];
  currentQuestion: number;
};

function Sidebar({ questions, currentQuestion }: SidebarProps) {
  return (
    <aside className="game__price ">
      <ul>
        {questions
          .map((question, index) => {
            const isCurrentQuestion = currentQuestion === index;
            const isPreviousQuestion = currentQuestion > index;

            const className = isCurrentQuestion
              ? 'active'
              : isPreviousQuestion
              ? 'disabled'
              : undefined;

            return (
              <li key={question.id} className={className}>
                <span>
                  {question.points.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                  })}
                </span>
                <svg viewBox="0 0 240 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.4526 4.63788C15.6376 2.01596 18.8742 0.5 22.2872 0.5H217.713C221.126 0.5 224.362 2.01597 226.547 4.63788L239.349 20L226.547 35.3621C224.362 37.984 221.126 39.5 217.713 39.5H22.2872C18.8742 39.5 15.6376 37.984 13.4526 35.3621L0.650853 20L13.4526 4.63788Z"
                    fill="white"
                    stroke="#D0D0D8"
                  />
                </svg>
              </li>
            );
          })
          .reverse()}
      </ul>
    </aside>
  );
}

export default Sidebar;
