import '@testing-library/cypress/add-commands';

describe('Tech Quiz Website', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
  });

  it('should display the start button on load', () => {
    cy.findByTestId('start-button').should('be.visible');
  });

  it('should start the quiz when the start button is clicked', () => {
    cy.findByTestId('start-button').click();
    cy.findByTestId('question-text', { timeout: 8000 }).should('be.visible');
  });

  it('should complete the quiz and show the score after 10 questions', () => {
    cy.findByTestId('start-button').click();
    cy.get('[data-testid="answer-button"]', { timeout: 8000 }).first().should('be.visible');

    for (let i = 0; i < 10; i++) {
      cy.get('[data-testid="answer-button"]').first().click();
    }

    cy.findByTestId('score-text', { timeout: 8000 }).should('be.visible');
  });

  it('should allow starting a new quiz after finishing', () => {
    cy.findByTestId('start-button').click();
    cy.get('[data-testid="answer-button"]', { timeout: 8000 }).first().should('be.visible');

    for (let i = 0; i < 10; i++) {
      cy.get('[data-testid="answer-button"]').first().click();
    }

    cy.findByTestId('start-button').click();
    cy.findByTestId('question-text', { timeout: 8000 }).should('be.visible');
  });
});
