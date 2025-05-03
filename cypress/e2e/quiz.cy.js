describe('Tech Quiz Website', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should display the start button on load', () => {
      cy.findByRole('button', { name: /start quiz/i }).should('be.visible');
    });
  
    it('should start the quiz when the start button is clicked', () => {
      cy.findByRole('button', { name: /start quiz/i }).click();
      cy.findByTestId('question-text').should('be.visible');
    });
  
    it('should complete the quiz and show the score after 10 questions', () => {
      cy.findByRole('button', { name: /start quiz/i }).click();
      for (let i = 0; i < 10; i++) {
        cy.get('[data-testid="answer-button"]').first().click();
      }
      cy.findByTestId('score-text').should('be.visible');
    });
  
    it('should allow starting a new quiz after finishing', () => {
      cy.findByRole('button', { name: /start quiz/i }).click();
      for (let i = 0; i < 10; i++) {
        cy.get('[data-testid="answer-button"]').first().click();
      }
      cy.findByRole('button', { name: /start quiz/i }).click();
      cy.findByTestId('question-text').should('be.visible');
    });
  });
  