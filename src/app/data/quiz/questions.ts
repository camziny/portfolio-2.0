import { Question, Category } from "@/app/types/quizTypes";

export const quizQuestions: Question[] = [
  {
    question: "What is the output of `console.log(typeof null)` in JavaScript?",
    answers: [
      { text: "object", isCorrect: true },
      { text: "null", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "string", isCorrect: false },
    ],
    category: Category.JavaScriptTypeScript,
  },
  {
    question: "Which of the following is a Python web framework?",
    answers: [
      { text: "Django", isCorrect: true },
      { text: "Spring", isCorrect: false },
      { text: "React", isCorrect: false },
      { text: "Rails", isCorrect: false },
    ],
    category: Category.Python,
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
    category: Category.React,
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
    category: Category.React,
  },
  {
    question: "What is the purpose of the `key` prop in React?",
    answers: [
      {
        text: "To provide a unique identifier for elements in a list.",
        isCorrect: true,
      },
      { text: "To bind a value to an input element.", isCorrect: false },
      { text: "To handle form submissions.", isCorrect: false },
      { text: "To trigger re-renders.", isCorrect: false },
    ],
    category: Category.React,
  },
  {
    question:
      "Which hook is used to manage local component state in a functional component?",
    answers: [
      { text: "useEffect", isCorrect: false },
      { text: "useContext", isCorrect: false },
      { text: "useState", isCorrect: true },
      { text: "useReducer", isCorrect: false },
    ],
    category: Category.React,
  },
  {
    question: "What does the `useContext` hook do in React?",
    answers: [
      {
        text: "It provides a way to pass data through the component tree without having to pass props down manually at every level.",
        isCorrect: true,
      },
      {
        text: "It schedules a state update to the nearest stateful ancestor.",
        isCorrect: false,
      },
      { text: "It directly manipulates the DOM.", isCorrect: false },
      {
        text: "It allows you to manage side effects in functional components.",
        isCorrect: false,
      },
    ],
    category: Category.React,
  },
  {
    question:
      "In which phase of the React component lifecycle is the `componentDidMount` method called?",
    answers: [
      { text: "Initialization phase", isCorrect: false },
      { text: "Mounting phase", isCorrect: true },
      { text: "Updating phase", isCorrect: false },
      { text: "Unmounting phase", isCorrect: false },
    ],
    category: Category.React,
  },
  {
    question: "How do you create a context in React?",
    answers: [
      { text: "Using the `createContext` function.", isCorrect: true },
      { text: "Using the `useReducer` function.", isCorrect: false },
      { text: "Using the `useContext` function.", isCorrect: false },
      { text: "Using the `useState` function.", isCorrect: false },
    ],
    category: Category.React,
  },
  {
    question:
      "What is the difference between controlled and uncontrolled components in React?",
    answers: [
      {
        text: "Controlled components do not maintain their own state; uncontrolled components do.",
        isCorrect: false,
      },
      {
        text: "Controlled components rely on React state to manage form data, while uncontrolled components rely on the DOM.",
        isCorrect: true,
      },
      {
        text: "Controlled components are class components; uncontrolled components are functional components.",
        isCorrect: false,
      },
      {
        text: "Controlled components use refs; uncontrolled components do not.",
        isCorrect: false,
      },
    ],
    category: Category.React,
  },
  {
    question: "What is the purpose of `React.Fragment`?",
    answers: [
      {
        text: "To return multiple elements without adding extra nodes to the DOM.",
        isCorrect: true,
      },
      { text: "To define a section of a component.", isCorrect: false },
      { text: "To manage state in a functional component.", isCorrect: false },
      {
        text: "To handle side effects in a functional component.",
        isCorrect: false,
      },
    ],
    category: Category.React,
  },
  {
    question:
      "Which of the following methods is used to update the state in a class component?",
    answers: [
      { text: "updateState", isCorrect: false },
      { text: "setState", isCorrect: true },
      { text: "changeState", isCorrect: false },
      { text: "applyState", isCorrect: false },
    ],
    category: Category.React,
  },
  {
    question:
      "What is the default value of a context if it is not provided by a `Provider`?",
    answers: [
      { text: "null", isCorrect: false },
      { text: "undefined", isCorrect: false },
      {
        text: "The default value specified when creating the context.",
        isCorrect: true,
      },
      { text: "An empty object", isCorrect: false },
    ],
    category: Category.React,
  },
  {
    question: "What is the output of `0.1 + 0.2 === 0.3` in JavaScript?",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
      { text: "Undefined", isCorrect: false },
      { text: "SyntaxError", isCorrect: false },
    ],
    category: Category.JavaScriptTypeScript,
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
    category: Category.JavaScriptTypeScript,
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
    category: Category.JavaScriptTypeScript,
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
    category: Category.JavaScriptTypeScript,
  },
  {
    question: "What is the purpose of the `let` keyword in JavaScript?",
    answers: [
      { text: "To declare a block-scoped variable.", isCorrect: true },
      { text: "To declare a function-scoped variable.", isCorrect: false },
      { text: "To declare a constant variable.", isCorrect: false },
      { text: "To declare a global variable.", isCorrect: false },
    ],
    category: Category.JavaScriptTypeScript,
  },
  {
    question:
      "Which of the following is not a primitive data type in JavaScript?",
    answers: [
      { text: "String", isCorrect: false },
      { text: "Number", isCorrect: false },
      { text: "Object", isCorrect: true },
      { text: "Boolean", isCorrect: false },
    ],
    category: Category.JavaScriptTypeScript,
  },
  {
    question: "How can you create a class in TypeScript?",
    answers: [
      { text: "Using the `class` keyword.", isCorrect: true },
      { text: "Using the `constructor` keyword.", isCorrect: false },
      { text: "Using the `object` keyword.", isCorrect: false },
      { text: "Using the `function` keyword.", isCorrect: false },
    ],
    category: Category.JavaScriptTypeScript,
  },
  {
    question: "What is the purpose of the `super` keyword in TypeScript?",
    answers: [
      {
        text: "To refer to the base class constructor or method.",
        isCorrect: true,
      },
      { text: "To refer to a superclass instance.", isCorrect: false },
      { text: "To create a new instance of a class.", isCorrect: false },
      { text: "To define a private property.", isCorrect: false },
    ],
    category: Category.JavaScriptTypeScript,
  },
  {
    question:
      "Which of the following is used to handle asynchronous operations in JavaScript?",
    answers: [
      { text: "Promise", isCorrect: true },
      { text: "Array", isCorrect: false },
      { text: "Object", isCorrect: false },
      { text: "String", isCorrect: false },
    ],
    category: Category.JavaScriptTypeScript,
  },
  {
    question: "How do you define a tuple in TypeScript?",
    answers: [
      { text: "Using square brackets `[]`.", isCorrect: false },
      { text: "Using parentheses `()`.", isCorrect: false },
      { text: "Using curly braces `{}`.", isCorrect: false },
      {
        text: "Using an array with fixed types `[type1, type2, ...]`.",
        isCorrect: true,
      },
    ],
    category: Category.JavaScriptTypeScript,
  },
  {
    question: "What is the purpose of the `readonly` modifier in TypeScript?",
    answers: [
      { text: "To declare a constant variable.", isCorrect: false },
      {
        text: "To declare a variable that can only be assigned once.",
        isCorrect: true,
      },
      {
        text: "To declare a variable with a mutable reference.",
        isCorrect: false,
      },
      {
        text: "To declare a variable that cannot be reassigned.",
        isCorrect: false,
      },
    ],
    category: Category.JavaScriptTypeScript,
  },
  {
    question:
      "Which method is used to remove the last element from an array in JavaScript?",
    answers: [
      { text: "shift()", isCorrect: false },
      { text: "pop()", isCorrect: true },
      { text: "splice()", isCorrect: false },
      { text: "slice()", isCorrect: false },
    ],
    category: Category.JavaScriptTypeScript,
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
    category: Category.Java,
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
    category: Category.Java,
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
    category: Category.Python,
  },
  {
    question: "Which of the following is a mutable data type in Python?",
    answers: [
      { text: "tuple", isCorrect: false },
      { text: "string", isCorrect: false },
      { text: "list", isCorrect: true },
      { text: "int", isCorrect: false },
    ],
    category: Category.Python,
  },
  {
    question: "What is the main purpose of the `final` keyword in Java?",
    answers: [
      { text: "To define constants.", isCorrect: true },
      { text: "To create mutable variables.", isCorrect: false },
      { text: "To enable inheritance.", isCorrect: false },
      { text: "To create abstract classes.", isCorrect: false },
    ],
    category: Category.Java,
  },
  {
    question: "Which method in Java is used to start a thread?",
    answers: [
      { text: "run()", isCorrect: false },
      { text: "init()", isCorrect: false },
      { text: "begin()", isCorrect: false },
      { text: "start()", isCorrect: true },
    ],
    category: Category.Java,
  },
  {
    question: "ز",
    answers: [
      { text: "ra", isCorrect: false },
      { text: "dal", isCorrect: false },
      { text: "zay", isCorrect: true },
      { text: "dhal", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ا",
    answers: [
      { text: "alif", isCorrect: true },
      { text: "ba", isCorrect: false },
      { text: "ta", isCorrect: false },
      { text: "tha", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ب",
    answers: [
      { text: "jeem", isCorrect: false },
      { text: "ba", isCorrect: true },
      { text: "ha", isCorrect: false },
      { text: "kha", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ت",
    answers: [
      { text: "tha", isCorrect: false },
      { text: "ta", isCorrect: true },
      { text: "ya", isCorrect: false },
      { text: "nun", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ث",
    answers: [
      { text: "jeem", isCorrect: false },
      { text: "tha", isCorrect: true },
      { text: "ha", isCorrect: false },
      { text: "kha", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ج",
    answers: [
      { text: "ha", isCorrect: false },
      { text: "jeem", isCorrect: true },
      { text: "kha", isCorrect: false },
      { text: "dal", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ح",
    answers: [
      { text: "jeem", isCorrect: false },
      { text: "ha", isCorrect: true },
      { text: "kha", isCorrect: false },
      { text: "dal", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "خ",
    answers: [
      { text: "jeem", isCorrect: false },
      { text: "ha", isCorrect: false },
      { text: "kha", isCorrect: true },
      { text: "dal", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "د",
    answers: [
      { text: "dal", isCorrect: true },
      { text: "dhal", isCorrect: false },
      { text: "ra", isCorrect: false },
      { text: "zay", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ذ",
    answers: [
      { text: "dal", isCorrect: false },
      { text: "dhal", isCorrect: true },
      { text: "ra", isCorrect: false },
      { text: "zay", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ر",
    answers: [
      { text: "dal", isCorrect: false },
      { text: "dhal", isCorrect: false },
      { text: "ra", isCorrect: true },
      { text: "zay", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ز",
    answers: [
      { text: "dal", isCorrect: false },
      { text: "dhal", isCorrect: false },
      { text: "ra", isCorrect: false },
      { text: "zay", isCorrect: true },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "س",
    answers: [
      { text: "sin", isCorrect: true },
      { text: "shin", isCorrect: false },
      { text: "sad", isCorrect: false },
      { text: "dad", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ش",
    answers: [
      { text: "sin", isCorrect: false },
      { text: "shin", isCorrect: true },
      { text: "sad", isCorrect: false },
      { text: "dad", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ص",
    answers: [
      { text: "sin", isCorrect: false },
      { text: "shin", isCorrect: false },
      { text: "sad", isCorrect: true },
      { text: "dad", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ض",
    answers: [
      { text: "sin", isCorrect: false },
      { text: "shin", isCorrect: false },
      { text: "sad", isCorrect: false },
      { text: "dad", isCorrect: true },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ط",
    answers: [
      { text: "ta", isCorrect: false },
      { text: "tha", isCorrect: false },
      { text: "ta'", isCorrect: true },
      { text: "tha'", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ظ",
    answers: [
      { text: "tha", isCorrect: false },
      { text: "zay", isCorrect: false },
      { text: "tha'", isCorrect: true },
      { text: "ta'", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ع",
    answers: [
      { text: "ayn", isCorrect: true },
      { text: "ghayn", isCorrect: false },
      { text: "fa", isCorrect: false },
      { text: "qaf", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "غ",
    answers: [
      { text: "ayn", isCorrect: false },
      { text: "ghayn", isCorrect: true },
      { text: "fa", isCorrect: false },
      { text: "qaf", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ف",
    answers: [
      { text: "ayn", isCorrect: false },
      { text: "ghayn", isCorrect: false },
      { text: "fa", isCorrect: true },
      { text: "qaf", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ق",
    answers: [
      { text: "ayn", isCorrect: false },
      { text: "ghayn", isCorrect: false },
      { text: "fa", isCorrect: false },
      { text: "qaf", isCorrect: true },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ك",
    answers: [
      { text: "kaf", isCorrect: true },
      { text: "lam", isCorrect: false },
      { text: "mim", isCorrect: false },
      { text: "nun", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ل",
    answers: [
      { text: "kaf", isCorrect: false },
      { text: "lam", isCorrect: true },
      { text: "mim", isCorrect: false },
      { text: "nun", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "م",
    answers: [
      { text: "kaf", isCorrect: false },
      { text: "lam", isCorrect: false },
      { text: "mim", isCorrect: true },
      { text: "nun", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ن",
    answers: [
      { text: "kaf", isCorrect: false },
      { text: "lam", isCorrect: false },
      { text: "mim", isCorrect: false },
      { text: "nun", isCorrect: true },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ه",
    answers: [
      { text: "waw", isCorrect: false },
      { text: "ya", isCorrect: false },
      { text: "hamza", isCorrect: false },
      { text: "ha", isCorrect: true },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "و",
    answers: [
      { text: "waw", isCorrect: true },
      { text: "ya", isCorrect: false },
      { text: "hamza", isCorrect: false },
      { text: "ha", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
  {
    question: "ي",
    answers: [
      { text: "waw", isCorrect: false },
      { text: "ya", isCorrect: true },
      { text: "hamza", isCorrect: false },
      { text: "ha", isCorrect: false },
    ],
    category: Category.ArabicLetters,
  },
];
