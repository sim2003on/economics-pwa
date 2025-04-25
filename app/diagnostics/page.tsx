import { PWADiagnostics } from "@/components/pwa-diagnostics"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DiagnosticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8 text-center">PWA Installation Diagnostics</h1>

        <PWADiagnostics />

        <div className="mt-8 space-y-6 bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Manual Installation Instructions</h2>

          <div>
            <h3 className="text-lg font-medium mb-2">Chrome (Desktop)</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Click the install icon (⊕) in the address bar</li>
              <li>If no icon appears, click the three dots menu (⋮)</li>
              <li>Select "Install EconLearn..." from the menu</li>
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Edge (Desktop)</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Click the three dots menu (...)</li>
              <li>Select "Apps" from the menu</li>
              <li>Click "Install this site as an app"</li>
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Chrome (Android)</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Tap the three dots menu (⋮)</li>
              <li>Select "Install app" or "Add to Home screen"</li>
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Safari (iOS)</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Tap the share button (□↑)</li>
              <li>Scroll down and tap "Add to Home Screen"</li>
              <li>Tap "Add" in the top right</li>
            </ol>
          </div>

          <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-md">
            <h3 className="text-lg font-medium mb-2">Troubleshooting</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Clear your browser cache and cookies</li>
              <li>Try using a different browser</li>
              <li>Make sure you're using the latest version of your browser</li>
              <li>Try accessing the site in an incognito/private window</li>
              <li>Check if your browser supports PWAs (most modern browsers do)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
