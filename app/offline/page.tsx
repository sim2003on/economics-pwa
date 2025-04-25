import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { WifiOff } from "lucide-react"
import Link from "next/link"

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <WifiOff className="h-12 w-12 mx-auto mb-4 text-slate-400" />
          <CardTitle className="text-2xl">You're Offline</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-slate-600 dark:text-slate-400">
            It looks like you're not connected to the internet. Some features may be limited until you reconnect.
          </p>
          <p className="text-center text-slate-600 dark:text-slate-400 mt-2">
            You can still access previously visited content.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/">
            <Button className="bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">
              Go to Home
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
