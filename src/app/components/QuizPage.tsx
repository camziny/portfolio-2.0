"use client";
import React, { useState, useEffect } from "react";
import { quizQuestions } from "../data/quiz/questions";
import { shuffleArray } from "@/utils/shuffle";
import { Question, Category } from "../types/quizTypes";
import { useToast, Progress } from "@chakra-ui/react";

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<null | number>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (isCategorySelected && selectedCategory) {
      const filteredQuestions = quizQuestions.filter(
        (question) => question.category === selectedCategory
      );
      const shuffledQuestions = shuffleArray([...filteredQuestions]);
      shuffledQuestions.forEach((question) => {
        question.answers = shuffleArray([...question.answers]);
      });
      setQuestions(shuffledQuestions);
    }
  }, [isCategorySelected, selectedCategory]);

  const handleAnswerClick = (index: number, isCorrect: boolean) => {
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(score + 1);
      toast({ title: "Correct!", status: "success", duration: 3000 });
    } else {
      toast({ title: "Incorrect", status: "error", duration: 3000 });
    }
    setTimeout(() => {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }, 3000);
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
    setIsCategorySelected(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowScore(false);
  };

  const handleRetryQuiz = () => {
    resetQuiz();
    if (selectedCategory) {
      const filteredQuestions = quizQuestions.filter(
        (question) => question.category === selectedCategory
      );
      const shuffledQuestions = shuffleArray([...filteredQuestions]);
      shuffledQuestions.forEach((question) => {
        question.answers = shuffleArray([...question.answers]);
      });
      setQuestions(shuffledQuestions);
    }
  };

  if (!isCategorySelected) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md dark:bg-gray-700 dark:text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Select a Category</h1>
          <div className="grid gap-4">
            {Object.values(Category).map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className="p-4 rounded border bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (showScore) {
    return (
      <div className="flex justify-center bg-gray-100 dark:bg-gray-900 py-20 ">
        <div className="bg-white p-8 rounded shadow-md text-center dark:bg-gray-700 dark:text-white">
          <h1 className="text-2xl font-bold mb-4">Quiz Completed</h1>
          <p className="text-xl">
            Your score is {score} out of {questions.length}
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={handleRetryQuiz}
              className="p-4 w-48 rounded border bg-cyan-500 text-white hover:bg-cyan-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 dark:text-gray-800"
            >
              Retry Quiz
            </button>
            <button
              onClick={() => setIsCategorySelected(false)}
              className="p-4 w-48 rounded border bg-cyan-500 text-white hover:bg-cyan-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 dark:text-gray-800"
            >
              Select Different Category
            </button>
          </div>
        </div>
      </div>
    );
  }

  const progressValue = ((currentQuestionIndex + 1) / questions.length) * 100;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 rounded-lg dark:bg-gray-900 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md dark:bg-gray-700 dark:text-white">
        <div className="mb-4">
          <Progress value={progressValue} size="sm" colorScheme="cyan" />
          <p className="text-center mt-2">
            {currentQuestionIndex + 1} / {questions.length}
          </p>
        </div>
        {questions.length > 0 && (
          <div>
            <h2
              className={`${
                currentQuestion.category === Category.ArabicLetters
                  ? "text-7xl"
                  : "text-xl"
              } mb-6 text-center`}
            >
              {currentQuestion.question}
            </h2>
            {currentQuestion.category === Category.ArabicLetters &&
              currentQuestion.forms && (
                <div className="mb-6 text-center">
                  <p>
                    Initial:{" "}
                    <span className="text-3xl">
                      {currentQuestion.forms.initial}
                    </span>
                  </p>
                  <p>
                    Medial:{" "}
                    <span className="text-3xl">
                      {currentQuestion.forms.medial}
                    </span>
                  </p>
                  <p>
                    Final:{" "}
                    <span className="text-3xl">
                      {currentQuestion.forms.final}
                    </span>
                  </p>
                </div>
              )}
            <div className="grid gap-4">
              {currentQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index, answer.isCorrect)}
                  disabled={selectedAnswer !== null}
                  className={`p-4 rounded border text-left  ${
                    selectedAnswer !== null
                      ? answer.isCorrect
                        ? "bg-green-500 text-white"
                        : selectedAnswer === index
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700"
                      : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800"
                  }`}
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
