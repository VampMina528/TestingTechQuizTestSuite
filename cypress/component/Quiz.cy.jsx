import React, { useEffect } from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

const mockQuestions = [
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    answers: [
      { text: "<a>", isCorrect: true },
      { text: "<link>", isCorrect: false },
      { text: "<href>", isCorrect: false },
      { text: "<url>", isCorrect: false }
    ]
  },
  {
    question: "Which JavaScript method is used to write to the console?",
    answers: [
      { text: "console.write()", isCorrect: false },
      { text: "console.print()", isCorrect: false },
      { text: "console.log()", isCorrect: true },
      { text: "print.console()", isCorrect: false }
    ]
  },
  {
    question: "Which selector targets all elements with the class 'box' in CSS?",
    answers: [
      { text: ".box", isCorrect: true },
      { text: "#box", isCorrect: false },
      { text: "box", isCorrect: false },
      { text: "*box", isCorrect: false }
    ]
  },
  {
    question: "What is the default port number for a local React development server?",
    answers: [
      { text: "8080", isCorrect: false },
      { text: "3000", isCorrect: true },
      { text: "5000", isCorrect: false },
      { text: "8000", isCorrect: false }
    ]
  },
  {
    question: "Which method is used to fetch data in JavaScript?",
    answers: [
      { text: "getData()", isCorrect: false },
      { text: "fetch()", isCorrect: true },
      { text: "load()", isCorrect: false },
      { text: "request()", isCorrect: false }
    ]
  },
  {
    question: "Which MongoDB command is used to find documents?",
    answers: [
      { text: "get()", isCorrect: false },
      { text: "query()", isCorrect: false },
      { text: "find()", isCorrect: true },
      { text: "search()", isCorrect: false }
    ]
  },
  {
    question: "Which HTTP method is used to update a resource?",
    answers: [
      { text: "GET", isCorrect: false },
      { text: "POST", isCorrect: false },
      { text: "PUT", isCorrect: true },
      { text: "DELETE", isCorrect: false }
    ]
  },
  {
    question: "In React, what hook is used to manage component state?",
    answers: [
      { text: "useProps", isCorrect: false },
      { text: "useRef", isCorrect: false },
      { text: "useState", isCorrect: true },
      { text: "useEffect", isCorrect: false }
    ]
  },
  {
    question: "What does API stand for?",
    answers: [
      { text: "Advanced Programming Interface", isCorrect: false },
      { text: "Application Programming Interface", isCorrect: true },
      { text: "Automated Programming Interface", isCorrect: false },
      { text: "Applied Protocol Interface", isCorrect: false }
    ]
  },
  {
    question: "Which extension is commonly used for TypeScript files?",
    answers: [
      { text: ".ts", isCorrect: true },
      { text: ".js", isCorrect: false },
      { text: ".tsx", isCorrect: false },
      { text: ".jsx", isCorrect: false }
    ]
  }
];

const QuizWrapper = () => {
  useEffect(() => {
    localStorage.setItem('quizQuestions', JSON.stringify(mockQuestions));
  }, []);
  return <Quiz />;
};

describe('Quiz Component (Component Test)', () => {
  beforeEach(() => {
    mount(<QuizWrapper />);
  });

  it('should show the start button', () => {
    cy.findByRole('button', { name: /start quiz/i }).should('be.visible');
  });

  it('should show a question after starting', () => {
    cy.findByRole('button', { name: /start quiz/i }).click();
    cy.findByTestId('question-text').should('be.visible');
  });

  it('should complete the quiz and show score after 10 answers', () => {
    cy.findByRole('button', { name: /start quiz/i }).click();
    for (let i = 0; i < 10; i++) {
      cy.get('[data-testid="answer-button"]').first().click();
    }
    cy.findByTestId('score-text').should('be.visible');
  });
});
