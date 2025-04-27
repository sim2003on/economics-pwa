"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { economicsData } from "@/data/economics-data";
import { AlertCircle, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { use, useState } from "react";

export default function QuizPage({
  params: paramsPromise,
}: {
  params: Promise<{ topic: string }>;
}) {
  const router = useRouter();
  // Unwrap the params Promise using React.use()
  const params = use(paramsPromise);
  const topicData = economicsData.find((topic) => topic.id === params.topic);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(15).fill(null)
  );
  const [quizCompleted, setQuizCompleted] = useState(false);

  if (!topicData) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Topic not found</h1>
        <Button onClick={() => router.push("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Topics
        </Button>
      </div>
    );
  }

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    // Save the answer
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    // Move to next question or complete quiz
    if (currentQuestion < topicData.quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1]);
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    answers.forEach((answer, index) => {
      if (answer === topicData.quiz[index].correctAnswer) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers(Array(15).fill(null));
    setQuizCompleted(false);
  };

  const handleBackToLessons = () => {
    router.push(`/learn/${params.topic}`);
  };

  if (quizCompleted) {
    const score = calculateScore();
    const percentage = Math.round((score / topicData.quiz.length) * 100);

    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Topics
        </Button>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              Quiz Results: {topicData.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">
                {score} / {topicData.quiz.length} correct
              </h2>
              <Progress value={percentage} className="h-2 w-full" />
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {percentage >= 70
                  ? "Great job! You've mastered this topic."
                  : "Keep learning! Review the material and try again."}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Review Your Answers</h3>

              {topicData.quiz.map((question, index) => {
                const isCorrect = answers[index] === question.correctAnswer;

                return (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      isCorrect
                        ? "bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800"
                        : "bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
                      )}
                      <div>
                        <p className="font-medium mb-2">
                          Question {index + 1}: {question.question}
                        </p>

                        <div className="ml-6 mb-2">
                          <p className="text-sm">
                            <span className="font-medium">Your answer:</span>{" "}
                            {answers[index] || "No answer"}
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-green-700 dark:text-green-400">
                              <span className="font-medium">
                                Correct answer:
                              </span>{" "}
                              {question.correctAnswer}
                            </p>
                          )}
                        </div>

                        {!isCorrect && (
                          <div className="ml-6 mt-2 text-sm bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
                            <p className="font-medium mb-1">Explanation:</p>
                            <p>{question.explanation}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBackToLessons}>
              Back to Lesson
            </Button>
            <Button onClick={handleRetakeQuiz}>Retake Quiz</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const currentQuizQuestion = topicData.quiz[currentQuestion];
  const progress = ((currentQuestion + 1) / topicData.quiz.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => router.push(`/learn/${params.topic}`)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Lesson
      </Button>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">
            Question {currentQuestion + 1} of {topicData.quiz.length}
          </span>
          <span className="text-sm font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2 w-full" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">
            {currentQuizQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedAnswer || ""} className="space-y-3">
            {currentQuizQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-colors ${
                  selectedAnswer === option
                    ? "bg-emerald-50 border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800"
                    : "hover:bg-gray-50 dark:hover:bg-gray-900"
                }`}
                onClick={() => handleAnswerSelect(option)}
              >
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label
                  htmlFor={`option-${index}`}
                  className="flex-grow cursor-pointer"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          <Button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            {currentQuestion < topicData.quiz.length - 1 ? (
              <>
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              "Complete Quiz"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
