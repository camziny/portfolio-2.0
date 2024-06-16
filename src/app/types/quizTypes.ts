export interface Answer {
  text: string;
  isCorrect: boolean;
}

export enum Category {
  React = "React",
  JavaScriptTypeScript = "JavaScript / TypeScript",
  Java = "Java",
  Python = "Python",
  Nodejs = "Node.js",
  Databases = "Databases",
}

export interface Question {
  question: string;
  answers: Answer[];
  category: Category;
}
