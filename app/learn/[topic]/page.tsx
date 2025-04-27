"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { economicsData } from "@/data/economics-data";
import { ArrowLeft, BookOpen, CheckCircle, Youtube } from "lucide-react";
import { useRouter } from "next/navigation";
import { use, useState } from "react";

export default function LearnPage({
  params: paramsPromise,
}: {
  params: Promise<{ topic: string }>;
}) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("lesson");
  const [lessonCompleted, setLessonCompleted] = useState(false);

  // Unwrap the params Promise using React.use()
  const params = use(paramsPromise);

  const topicData = economicsData.find((topic) => topic.id === params.topic);

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

  const handleStartQuiz = () => {
    router.push(`/quiz/${params.topic}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Button variant="ghost" className="mb-6" onClick={() => router.push("/")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Topics
      </Button>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">{topicData.title}</h1>

      <Tabs
        defaultValue="lesson"
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="lesson" className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4" /> Lesson armes{" "}
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center">
            <Youtube className="mr-2 h-4 w-4" /> Videos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="lesson" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="prose dark:prose-invert max-w-none">
                {topicData.lessonContent.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button
              onClick={() => {
                setLessonCompleted(true);
                setActiveTab("videos");
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <CheckCircle className="mr-2 h-4 w-4" /> Got it!
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6">
                <p className="text-gray-700 dark:text-gray-300">
                  Watch these videos to enhance your understanding of{" "}
                  {topicData.title}:
                </p>

                {topicData.videos.map((video, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-lg font-medium">{video.title}</h3>
                    <YoutubeEmbed videoId={video.videoId} />
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {video.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button
              onClick={handleStartQuiz}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              disabled={!lessonCompleted}
            >
              Take Quiz
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
