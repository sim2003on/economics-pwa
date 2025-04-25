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
import { topicData } from "@/lib/topic-data";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function QuizPage({
  params: paramsPromise,
}: {
  params: Promise<{ topic: string }>;
}) {
  const router = useRouter();
  // Unwrap params using React.use
  const params = React.use(paramsPromise);
  const topic = topicData[params.topic];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<string[]>(
    Array(topic?.quiz.length || 0).fill("")
  );
  const [showResults, setShowResults] = useState(false);

  if (!topic) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Topic not found</h1>
        <Button onClick={() => router.push("/")}>Return to Home</Button>
      </div>
    );
  }

  const handleNext = () => {
    if (selectedAnswer) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = selectedAnswer;
      setAnswers(newAnswers);

      if (currentQuestion < topic.quiz.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    }
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === topic.quiz[index].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / topic.quiz.length) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Topics
          </Button>

          <Card className="max-w-4xl mx-auto border-slate-200 dark:border-slate-800">
            <CardHeader className="border-b border-slate-200 dark:border-slate-800">
              <CardTitle className="text-3xl font-bold">
                Quiz Results: {topic.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  Your Score: {score}/{topic.quiz.length}
                </h2>
                <Progress
                  value={percentage}
                  className="h-2 w-full max-w-md mx-auto"
                />
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  {percentage}% Correct
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold border-b pb-2">
                  Review Your Answers
                </h3>

                {topic.quiz.map((question, index) => {
                  const isCorrect = answers[index] === question.correctAnswer;

                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-lg ${
                        isCorrect
                          ? "bg-emerald-50 dark:bg-emerald-950/30"
                          : "bg-rose-50 dark:bg-rose-950/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {isCorrect ? (
                          <CheckCircle2 className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="h-6 w-6 text-rose-500 flex-shrink-0 mt-0.5" />
                        )}

                        <div>
                          <h4 className="font-medium text-slate-900 dark:text-slate-100 mb-2">
                            {index + 1}. {question.question}
                          </h4>

                          <div className="mb-2">
                            <span className="font-medium">Your answer:</span>{" "}
                            {question.options[answers[index]]}
                          </div>

                          {!isCorrect && (
                            <div className="mb-2">
                              <span className="font-medium">
                                Correct answer:
                              </span>{" "}
                              {question.options[question.correctAnswer]}
                            </div>
                          )}

                          {!isCorrect && (
                            <div className="mt-2 text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-slate-800/50 p-3 rounded">
                              <span className="font-medium">Explanation:</span>{" "}
                              {question.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>

            <CardFooter className="border-t border-slate-200 dark:border-slate-800 flex justify-end pt-6">
              <Button
                className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
                onClick={() => router.push("/")}
              >
                Return to Topics
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    );
  }

  const question = topic.quiz[currentQuestion];
  const progress = ((currentQuestion + 1) / topic.quiz.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => router.push(`/lesson/${params.topic}`)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Lesson
        </Button>

        <Card className="max-w-4xl mx-auto border-slate-200 dark:border-slate-800">
          <CardHeader className="border-b border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl font-bold">
                  {topic.title} Quiz
                </CardTitle>
                <span className="text-slate-500 dark:text-slate-400">
                  Question {currentQuestion + 1} of {topic.quiz.length}
                </span>
              </div>
              <Progress value={progress} className="h-2 w-full" />
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            <h2 className="text-xl font-medium mb-6">{question.question}</h2>

            <RadioGroup
              value={selectedAnswer || ""}
              onValueChange={setSelectedAnswer}
            >
              <div className="space-y-3">
                {Object.entries(question.options).map(([value, text]) => (
                  <div
                    key={value}
                    className={`flex items-center space-x-2 rounded-lg border p-4 cursor-pointer transition-colors ${
                      selectedAnswer === value
                        ? "border-slate-900 bg-slate-100 dark:border-slate-50 dark:bg-slate-800"
                        : "border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900"
                    }`}
                    onClick={() => setSelectedAnswer(value)}
                  >
                    <RadioGroupItem
                      value={value}
                      id={`option-${value}`}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={`option-${value}`}
                      className="flex-1 cursor-pointer text-base"
                    >
                      {text}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>

          <CardFooter className="border-t border-slate-200 dark:border-slate-800 flex justify-end pt-6">
            <Button
              className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
              onClick={handleNext}
              disabled={!selectedAnswer}
            >
              {currentQuestion < topic.quiz.length - 1
                ? "Next Question"
                : "Finish Quiz"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
