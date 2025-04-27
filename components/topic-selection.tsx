"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, BarChart2, TrendingUp, DollarSign, PieChart } from "lucide-react"

const topics = [
  {
    id: "supply-demand",
    title: "Supply and Demand",
    description: "Learn about the fundamental economic model of price determination in a market.",
    icon: <BarChart2 className="h-8 w-8 text-emerald-500" />,
  },
  {
    id: "gdp",
    title: "Gross Domestic Product (GDP)",
    description: "Understand how we measure a country's economic output and growth.",
    icon: <TrendingUp className="h-8 w-8 text-emerald-500" />,
  },
  {
    id: "ppp",
    title: "Purchasing Power Parity (PPP)",
    description: "Explore how currencies compare in terms of buying power across countries.",
    icon: <DollarSign className="h-8 w-8 text-emerald-500" />,
  },
  {
    id: "inflation",
    title: "Inflation",
    description: "Learn about the rise in prices and its effects on the economy.",
    icon: <PieChart className="h-8 w-8 text-emerald-500" />,
  },
]

export function TopicSelection() {
  const router = useRouter()
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null)

  const handleSelectTopic = (topicId: string) => {
    router.push(`/learn/${topicId}`)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {topics.map((topic) => (
        <Card
          key={topic.id}
          className={`transition-all duration-300 cursor-pointer hover:shadow-lg ${
            hoveredTopic === topic.id ? "border-emerald-500 shadow-md" : ""
          }`}
          onMouseEnter={() => setHoveredTopic(topic.id)}
          onMouseLeave={() => setHoveredTopic(null)}
          onClick={() => handleSelectTopic(topic.id)}
        >
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-full bg-emerald-50 dark:bg-emerald-950">{topic.icon}</div>
              <ChevronRight
                className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                  hoveredTopic === topic.id ? "translate-x-1" : ""
                }`}
              />
            </div>
            <CardTitle className="text-xl mt-4">{topic.title}</CardTitle>
            <CardDescription>{topic.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              variant="ghost"
              className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950 p-0"
              onClick={(e) => {
                e.stopPropagation()
                handleSelectTopic(topic.id)
              }}
            >
              Start Learning
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
