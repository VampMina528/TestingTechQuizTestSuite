import React from 'react';
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';

describe('Quiz Component', () => {
  beforeEach(() => {
    mount(<Quiz />);
  });

  it('should render the start button initially', () => {
    cy.findByRole('button', { name: /start quiz/i }).should('be.visible');
  });

  it('should display the first question after starting the quiz', () => {
    cy.findByRole('button', { name: /start quiz/i }).click();
    cy.findByTestId('question-text').should('be.visible');
  });

  it('should allow selecting an answer and move to the next question', () => {
    cy.findByRole('button', { name: /start quiz/i }).click();
    cy.get('[data-testid="answer-button"]').first().click();
    cy.findByTestId('question-text').should('exist');
  });

  it('should display final score after 10 questions', () => {
    cy.findByRole('button', { name: /start quiz/i }).click();
    for (let i = 0; i < 10; i++) {
      cy.get('[data-testid="answer-button"]').first().click();
    }
    cy.findByTestId('score-text').should('be.visible');
  });
});
