import db from '../config/connection.js';
import { Question } from '../models/index.js';
import cleanDB from './cleanDb.js';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.join(__dirname, 'sampleQuestions.json');
const questionData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

try {
  await db();
  await cleanDB();

  await Question.insertMany(questionData);

  console.log('Seeding completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}
