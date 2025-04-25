"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Menu } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>
}

export function InstallPrompt() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstallable, setIsInstallable] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [showManualInstructions, setShowManualInstructions] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Check if the app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
      console.log("App is already installed in standalone mode")
      return
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault()
      console.log("BeforeInstallPromptEvent fired", e)
      // Stash the event so it can be triggered later
      setInstallPrompt(e as BeforeInstallPromptEvent)
      setIsInstallable(true)
    }

    const handleAppInstalled = () => {
      console.log("App was installed")
      setIsInstallable(false)
      setIsInstalled(true)
      toast({
        title: "App Installed!",
        description: "EconLearn has been successfully installed on your device.",
      })
    }

    // Force the prompt to show after 3 seconds if the app meets the criteria
    const timer = setTimeout(() => {
      if (!isInstalled && !isInstallable) {
        console.log("No install prompt detected after timeout, showing manual instructions option")
        setShowManualInstructions(true)
      }
    }, 3000)

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
      clearTimeout(timer)
    }
  }, [isInstalled, isInstallable, toast])

  const handleInstallClick = async () => {
    if (!installPrompt) return

    // Show the install prompt
    await installPrompt.prompt()

    // Wait for the user to respond to the prompt
    const choiceResult = await installPrompt.userChoice

    if (choiceResult.outcome === "accepted") {
      toast({
        title: "Installing...",
        description: "EconLearn is being installed on your device.",
      })
    } else {
      toast({
        title: "Installation declined",
        description: "You can install the app later from the menu.",
        variant: "destructive",
      })
    }

    // Clear the saved prompt since it can't be used again
    setInstallPrompt(null)
  }

  const toggleManualInstructions = () => {
    setShowManualInstructions(!showManualInstructions)
  }

  if (isInstalled) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 rounded-lg bg-slate-800 p-4 text-white shadow-lg md:left-auto md:right-4 md:w-80">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Install EconLearn</h3>
        <Button
          variant="ghost"
          size="sm"
          className="h-6 w-6 rounded-full p-0 text-white hover:bg-slate-700"
          onClick={() => {
            setIsInstallable(false)
            setShowManualInstructions(false)
          }}
        >
          ×
        </Button>
      </div>
      <p className="mb-3 text-sm text-slate-300">
        Install this app on your device for offline access and a better experience.
      </p>

      {isInstallable ? (
        <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={handleInstallClick}>
          <Download className="mr-2 h-4 w-4" />
          Install App
        </Button>
      ) : (
        <div className="space-y-2">
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={toggleManualInstructions}>
            <Menu className="mr-2 h-4 w-4" />
            {showManualInstructions ? "Hide Instructions" : "Show Install Instructions"}
          </Button>

          {showManualInstructions && (
            <div className="mt-3 rounded-md bg-slate-700 p-3 text-sm">
              <p className="font-medium mb-2">Manual Installation:</p>
              <p className="mb-2">
                <strong>On Android (Chrome):</strong>
              </p>
              <ol className="list-decimal pl-5 mb-2 space-y-1">
                <li>Tap the menu (⋮) in the top right</li>
                <li>Select "Install app" or "Add to Home screen"</li>
              </ol>
              <p className="mb-2">
                <strong>On iOS (Safari):</strong>
              </p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Tap the share button (□↑)</li>
                <li>Scroll down and tap "Add to Home Screen"</li>
                <li>Tap "Add" in the top right</li>
              </ol>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
