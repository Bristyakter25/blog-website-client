import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questionsAndAnswers = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces, developed by Facebook. It allows developers to create single-page applications with a component-based architecture."
    },
    {
      question: "How do I install React?",
      answer:
        "You can install React using npm or yarn. Run `npx create-react-app my-app` to create a new React application."
    },
    {
      question: "What is JSX?",
      answer:
        "JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript, and it looks similar to HTML, but is actually a syntax extension for JavaScript."
    },
    {
      question: "What is a state in React?",
      answer:
        "State is a built-in object in React that stores dynamic data for a component. It allows you to create interactive components that can change over time based on user interactions."
    },
    {
      question: "How do I handle events in React?",
      answer:
        "In React, events are handled using camelCase syntax. For example, `onClick`, `onChange`, etc. You can pass a function to handle the event."
    }
  ];

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index); 
    }
  };

  return (
    <div className="w-full  p-5 rounded-2xl my-16 ">
      <h1 className="text-3xl text-[#A294F9]  w-full rounded-2xl font-bold text-center mb-10">Frequently Asked Questions</h1>
      <div className="faq-list w-full rounded-2xl bg-[#DAD2FF] dark:bg-purple-500 p-7">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="faq-item border-b border-gray-300 mb-4">
            <div
              className="faq-question text-xl hover:text-purple-500 font-semibold dark:hover:text-sky-400 cursor-pointer py-3"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
            </div>
            {openIndex === index && (
              <div className="faq-answer text-gray-700 dark:text-white px-4 pb-3">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;