export type ContentSection = {
  id: string;
  type: 'text' | 'table' | 'callout' | 'framework' | 'exercise';
  heading?: string;
  content: string;
  calloutType?: 'warning' | 'tip' | 'info';
  tableData?: { headers: string[]; rows: string[][] };
};

export type Session = {
  id: number;
  title: string;
  duration: number; // minutes
  prerequisite: string;
  objective: string;
  sections: ContentSection[];
  mistakes: string[];
  resources: { title: string; description: string }[];
};

export type QuizQuestion = {
  id: string;
  sessionId: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type ScenarioOption = {
  text: string;
  isIdeal: boolean;
  feedback: string;
};

export type Scenario = {
  id: string;
  sessionId: number;
  title: string;
  situation: string;
  options: ScenarioOption[];
};

export type Flashcard = {
  id: string;
  front: string;
  back: string;
  example?: string;
};

export type FlashcardDeckData = {
  id: string;
  title: string;
  description: string;
  cards: Flashcard[];
};

export type DecisionNode = {
  id: string;
  question: string;
  options: { label: string; nextId: string | null; result?: string; action?: string }[];
};

export type ReferenceFramework = {
  id: string;
  title: string;
  acronym?: string;
  tagline: string;
  steps: { label: string; description: string; example?: string }[];
  whenToUse: string;
};

export type CourseProgress = {
  completedSessions: number[];
  quizScores: Record<number, number>;
  scenariosViewed: Record<number, boolean>;
  checklistItems: Record<string, boolean>;
  flashcardsViewed: Record<string, boolean>;
  lastVisited: number;
};
