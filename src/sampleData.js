// Sample flashcard data for demonstration
export const sampleFlashcardSets = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Basic JavaScript concepts and syntax",
    cards: [
      {
        front: "What is a variable in JavaScript?",
        back: "A variable is a container that stores data values. You can declare variables using var, let, or const keywords."
      },
      {
        front: "What is the difference between let and const?",
        back: "let allows you to reassign values, while const creates a constant that cannot be reassigned after declaration."
      },
      {
        front: "What is a function in JavaScript?",
        back: "A function is a block of code designed to perform a particular task. It's executed when something invokes (calls) it."
      },
      {
        front: "What is an array?",
        back: "An array is a special variable that can hold more than one value at a time. Arrays are written with square brackets []."
      },
      {
        front: "What is the DOM?",
        back: "DOM stands for Document Object Model. It's a programming interface for HTML documents that represents the page structure."
      }
    ],
    createdAt: new Date().toISOString(),
    lastStudied: null,
    studyProgress: 0
  },
  {
    id: 2,
    title: "React Basics",
    description: "Essential React concepts for beginners",
    cards: [
      {
        front: "What is React?",
        back: "React is a JavaScript library for building user interfaces, especially web applications with dynamic, interactive content."
      },
      {
        front: "What is JSX?",
        back: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes React components easier to write and understand."
      },
      {
        front: "What is a React component?",
        back: "A component is a reusable piece of code that returns JSX. Components can be functional or class-based and help organize UI into independent, reusable pieces."
      },
      {
        front: "What are props in React?",
        back: "Props (properties) are read-only data passed from parent components to child components. They allow components to be dynamic and reusable."
      },
      {
        front: "What is state in React?",
        back: "State is a built-in object that stores data that can change over time. When state changes, the component re-renders to reflect the new data."
      }
    ],
    createdAt: new Date().toISOString(),
    lastStudied: new Date().toISOString(),
    studyProgress: 60
  },
  {
    id: 3,
    title: "Spanish Vocabulary",
    description: "Common Spanish words and phrases",
    cards: [
      {
        front: "Hello",
        back: "Hola"
      },
      {
        front: "Thank you",
        back: "Gracias"
      },
      {
        front: "Please",
        back: "Por favor"
      },
      {
        front: "Goodbye",
        back: "Adiós"
      },
      {
        front: "How are you?",
        back: "¿Cómo estás?"
      },
      {
        front: "I'm fine",
        back: "Estoy bien"
      },
      {
        front: "What's your name?",
        back: "¿Cómo te llamas?"
      },
      {
        front: "My name is...",
        back: "Me llamo..."
      }
    ],
    createdAt: new Date().toISOString(),
    lastStudied: null,
    studyProgress: 0
  }
];
