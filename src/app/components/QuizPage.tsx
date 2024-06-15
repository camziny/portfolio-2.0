"use client";
import React, { useState, useEffect } from "react";
import { quizQuestions } from "../data/quiz/questions";
import { shuffleArray } from "@/utils/shuffle";
import { Question } from "../types/quizTypes";
import { useToast } from "@chakra-ui/react";

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<null | number>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const toast = useToast();
  useEffect(() => {
    const shuffledQuestions = shuffleArray([...quizQuestions]);
    shuffledQuestions.forEach((question) => {
      question.answers = shuffleArray([...question.answers]);
    });
    setQuestions(shuffledQuestions);
  }, []);

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

  if (showScore) {
    return (
      <div className="flex justify-center bg-gray-100 dark:bg-gray-900 py-20">
        <div className="bg-white p-8 rounded shadow-md text-center dark:bg-gray-700 dark:text-white">
          <h1 className="text-2xl font-bold mb-4">Quiz Completed</h1>
          <p className="text-xl">
            Your score is {score} out of {questions.length}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 rounded-lg dark:bg-gray-900 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md dark:bg-gray-700 dark:text-white">
        <h1 className="text-2xl font-bold mb-4">Quiz Page</h1>
        {questions.length > 0 && (
          <div>
            <h2 className="text-xl mb-6">
              {questions[currentQuestionIndex].question}
            </h2>
            <div className="grid gap-4">
              {questions[currentQuestionIndex].answers.map((answer, index) => (
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
