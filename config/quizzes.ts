import { QuizConfig } from "./quiz";

export interface QuizEntry {
  id: string;
  config: QuizConfig;
  path: string;
  label: string;
  emoji: string;
  title: string;
  description: string;
}

export const quizzes: Record<string, QuizEntry> = {};
