import { Question } from "@/app/types/quizTypes";

export const quizQuestions: Question[] = [
  {
    question: "What is the output of `console.log(typeof null)` in JavaScript?",
    answers: [
      { text: "object", isCorrect: true },
      { text: "null", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "string", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is a Python web framework?",
    answers: [
      { text: "Django", isCorrect: true },
      { text: "Spring", isCorrect: false },
      { text: "React", isCorrect: false },
      { text: "Rails", isCorrect: false },
    ],
  },
  {
    question: "What is the purpose of the `useEffect` hook in React?",
    answers: [
      { text: "To manage local component state.", isCorrect: false },
      { text: "To directly manipulate the DOM.", isCorrect: false },
      {
        text: "To perform side effects in function components.",
        isCorrect: true,
      },
      { text: "To handle event listeners.", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is true about React props?",
    answers: [
      { text: "Props can be modified within the component.", isCorrect: false },
      {
        text: "Props are used to pass data from one component to another.",
        isCorrect: true,
      },
      { text: "Props are used for managing local state.", isCorrect: false },
      { text: "Props cannot be passed to class components.", isCorrect: false },
    ],
  },
  {
    question: "What is the result of `0.1 + 0.2 === 0.3` in JavaScript?",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
      { text: "Undefined", isCorrect: false },
      { text: "SyntaxError", isCorrect: false },
    ],
  },
  {
    question:
      "Which method is used to convert a JSON string into a JavaScript object?",
    answers: [
      { text: "JSON.stringify()", isCorrect: false },
      { text: "JSON.parse()", isCorrect: true },
      { text: "JSON.objectify()", isCorrect: false },
      { text: "JSON.toObject()", isCorrect: false },
    ],
  },
  {
    question: "What does the `unknown` type represent in TypeScript?",
    answers: [
      { text: "A type that is equivalent to `any`.", isCorrect: false },
      { text: "A type that is the parent of all types.", isCorrect: false },
      {
        text: "A type that must be narrowed down before usage.",
        isCorrect: true,
      },
      { text: "A type that represents an empty object.", isCorrect: false },
    ],
  },
  {
    question:
      "How do you define an optional property in a TypeScript interface?",
    answers: [
      {
        text: "By using the `optional` keyword before the property name.",
        isCorrect: false,
      },
      { text: "By appending a `?` after the property name.", isCorrect: true },
      { text: "By using the `undefined` type.", isCorrect: false },
      {
        text: "By defining the property inside an `Optional` block.",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is polymorphism in object-oriented programming?",
    answers: [
      { text: "The ability to create objects from classes.", isCorrect: false },
      {
        text: "The ability to inherit properties and methods from another class.",
        isCorrect: false,
      },
      {
        text: "The ability of different objects to respond to the same message (method call) in different ways.",
        isCorrect: true,
      },
      {
        text: "The process of encapsulating data and functions.",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Which of the following is an example of encapsulation?",
    answers: [
      {
        text: "Creating multiple functions with the same name but different parameters.",
        isCorrect: false,
      },
      {
        text: "Restricting access to certain properties and methods of an object.",
        isCorrect: true,
      },
      { text: "Creating a class hierarchy.", isCorrect: false },
      { text: "Overriding a method in a subclass.", isCorrect: false },
    ],
  },
  {
    question:
      "What is the output of the following code in Python?\n```python\ndef add(a, b=[]):\n    b.append(a)\n    return b\n\nprint(add(1))\nprint(add(2))\n```",
    answers: [
      { text: "[1] [2]", isCorrect: false },
      { text: "[1] [1, 2]", isCorrect: true },
      { text: "[1, 2] [2]", isCorrect: false },
      { text: "[1] [1, 2]", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is a mutable data type in Python?",
    answers: [
      { text: "tuple", isCorrect: false },
      { text: "string", isCorrect: false },
      { text: "list", isCorrect: true },
      { text: "int", isCorrect: false },
    ],
  },
  {
    question: "What is the main purpose of the `final` keyword in Java?",
    answers: [
      { text: "To define constants.", isCorrect: true },
      { text: "To create mutable variables.", isCorrect: false },
      { text: "To enable inheritance.", isCorrect: false },
      { text: "To create abstract classes.", isCorrect: false },
    ],
  },
  {
    question: "Which method in Java is used to start a thread?",
    answers: [
      { text: "run()", isCorrect: false },
      { text: "init()", isCorrect: false },
      { text: "begin()", isCorrect: false },
      { text: "start()", isCorrect: true },
    ],
  },
];
