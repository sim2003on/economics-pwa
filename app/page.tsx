import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen, TrendingUp, DollarSign, BarChart, Settings } from "lucide-react"
import { InstallPrompt } from "@/components/install-prompt"
import { OfflineBanner } from "@/components/offline-banner"
import { ManualInstallButton } from "@/components/manual-install-button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-end mb-4">
          <Link href="/diagnostics">
            <Button variant="ghost" size="sm" className="gap-1">
              <Settings className="h-4 w-4" />
              <span className="sr-only md:not-sr-only">Diagnostics</span>
            </Button>
          </Link>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900 dark:text-slate-50">
            EconLearn
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
            Master economic concepts through interactive lessons and quizzes
          </p>
          <div className="flex justify-center">
            <ManualInstallButton />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <TopicCard
            title="Supply and Demand"
            description="Learn about market forces that drive prices and quantities in a market economy."
            icon={<TrendingUp className="h-8 w-8 text-emerald-500" />}
            slug="supply-and-demand"
          />

          <TopicCard
            title="GDP"
            description="Understand Gross Domestic Product and how it measures economic output."
            icon={<BarChart className="h-8 w-8 text-blue-500" />}
            slug="gdp"
          />

          <TopicCard
            title="PPP"
            description="Explore Purchasing Power Parity and international economic comparisons."
            icon={<DollarSign className="h-8 w-8 text-amber-500" />}
            slug="ppp"
          />

          <TopicCard
            title="Inflation"
            description="Discover how inflation affects prices, wages, and the overall economy."
            icon={<BookOpen className="h-8 w-8 text-rose-500" />}
            slug="inflation"
          />
        </div>
      </div>
      <InstallPrompt />
      <OfflineBanner />
    </div>
  )
}

function TopicCard({
  title,
  description,
  icon,
  slug,
}: {
  title: string
  description: string
  icon: React.ReactNode
  slug: string
}) {
  return (
    <Card className="transition-all hover:shadow-lg hover:-translate-y-1 border-slate-200 dark:border-slate-800">
      <CardHeader>
        <div className="flex items-center gap-4">
          {icon}
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={`/lesson/${slug}`} className="w-full">
          <Button className="w-full bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">
            Start Learning
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
