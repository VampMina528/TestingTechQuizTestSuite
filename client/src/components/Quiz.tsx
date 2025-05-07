import { useState } from 'react';
import type { Question } from '../models/Question.js';
import { getQuestions } from '../services/questionApi.js';

const Quiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questionsReady, setQuestionsReady] = useState(false);

  const getRandomQuestions = async () => {
    try {
      const localMock = localStorage.getItem('quizQuestions');
      const data = localMock
        ? JSON.parse(localMock)
        : await getQuestions();

      const mappedQuestions: Question[] = data.map((q: any, index: number) => ({
        _id: q._id || `${index}`,
        question: q.question || q.questionText,
        answers:
          q.answers ||
          q.answerOptions.map((opt: any) => ({
            text: opt.text || opt.answerText,
            isCorrect: opt.isCorrect,
          })),
      }));

      setQuestions(mappedQuestions);
      setQuestionsReady(true);
    } catch (err) {
      console.error('Failed to load quiz questions:', err);
    }
  };

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleStartQuiz = async () => {
    setQuestionsReady(false);
    await getRandomQuestions();
    setQuizStarted(true);
    setQuizCompleted(false);
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  if (!quizStarted) {
    return (
      <div className="p-4 text-center">
        <button
          className="btn btn-primary d-inline-block mx-auto"
          data-testid="start-button"
          onClick={handleStartQuiz}
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="card p-4 text-center">
        <h2>Quiz Completed</h2>
        <div className="alert alert-success" data-testid="score-text">
          Your score: {score}/{questions.length}
        </div>
        <button
          className="btn btn-primary d-inline-block mx-auto"
          data-testid="start-button"
          onClick={handleStartQuiz}
        >
          Take New Quiz
        </button>
      </div>
    );
  }

  if (!questionsReady) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="card p-4">
      <h2 data-testid="question-text">{currentQuestion.question}</h2>
      <div className="mt-3">
        {currentQuestion.answers.map((answer, index) => (
          <div key={index} className="d-flex align-items-center mb-2">
            <button
              className="btn btn-primary"
              data-testid="answer-button"
              onClick={() => handleAnswerClick(answer.isCorrect)}
            >
              {index + 1}
            </button>
            <div className="alert alert-secondary mb-0 ms-2 flex-grow-1">
              {answer.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
