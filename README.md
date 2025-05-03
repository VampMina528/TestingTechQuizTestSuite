# Tech Quiz Test Suite

## Description

This is a MERN-stack tech quiz application enhanced with a full Cypress test suite for both component and end-to-end coverage. Users can take a quiz of ten random questions and receive a score at the end, with the ability to restart the quiz. Cypress is used to ensure the reliability and functionality of the quiz component and user flow.

---

## Features

* Ten-question multiple-choice tech quiz
* React-based user interface
* MongoDB backend (not modified for this challenge)
* Cypress component tests for Quiz logic
* Cypress end-to-end tests for full quiz run-through

---

## Technologies Used

* MongoDB
* Express.js
* React
* Node.js
* Cypress
* TypeScript
* Vite

---

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:VampMina528/TestingTechQuizTestSuite.git
   cd TestingTechQuizTestSuite
   ```

2. Install all dependencies:

   ```bash
   npm run install
   ```

3. Rename `.env.example` to `.env` and set environment variables as needed.

---

## Usage

To run the full application locally:

```bash
npm run start:dev
```

---

## Running Cypress Tests

To open the Cypress test suite:

```bash
npm run test
```

Once the Cypress UI launches, you can run:

* `Quiz.cy.jsx` under **Component Testing**
* `quiz.cy.js` under **End-to-End Testing**

---

## Walkthrough Video

Watch the full walkthrough video demonstrating all tests passing:

🔗 \[Video Link Placeholder – replace this with your final link]

---

## GitHub Repository

🔗 [https://github.com/VampMina528/TestingTechQuizTestSuite](https://github.com/VampMina528/TestingTechQuizTestSuite)

---

## License

This project is licensed under the ISC License.
