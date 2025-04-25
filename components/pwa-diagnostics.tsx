"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle } from "lucide-react"

export function PWADiagnostics() {
  const [diagnostics, setDiagnostics] = useState({
    isHttps: false,
    hasManifest: false,
    serviceWorkerSupported: false,
    serviceWorkerRegistered: false,
    isStandalone: false,
    isOnline: true,
    installPromptSupported: false,
    displayMode: "",
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const runDiagnostics = async () => {
      try {
        // Check if running on HTTPS
        const isHttps = window.location.protocol === "https:"

        // Check if manifest exists
        let hasManifest = false
        try {
          const manifestLink = document.querySelector('link[rel="manifest"]')
          hasManifest = !!manifestLink
        } catch (e) {
          console.error("Error checking manifest:", e)
        }

        // Check service worker support and registration
        const serviceWorkerSupported = "serviceWorker" in navigator
        let serviceWorkerRegistered = false

        if (serviceWorkerSupported) {
          try {
            const registrations = await navigator.serviceWorker.getRegistrations()
            serviceWorkerRegistered = registrations.length > 0
          } catch (e) {
            console.error("Error checking service worker registration:", e)
          }
        }

        // Check if running in standalone mode
        const isStandalone =
          window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone === true

        // Check online status
        const isOnline = navigator.onLine

        // Check if beforeinstallprompt is supported
        const installPromptSupported = "BeforeInstallPromptEvent" in window || "onbeforeinstallprompt" in window

        // Get display mode
        let displayMode = "browser"
        if (window.matchMedia("(display-mode: standalone)").matches) displayMode = "standalone"
        if (window.matchMedia("(display-mode: fullscreen)").matches) displayMode = "fullscreen"
        if (window.matchMedia("(display-mode: minimal-ui)").matches) displayMode = "minimal-ui"
        if ((window.navigator as any).standalone === true) displayMode = "standalone (iOS)"

        setDiagnostics({
          isHttps,
          hasManifest,
          serviceWorkerSupported,
          serviceWorkerRegistered,
          isStandalone,
          isOnline,
          installPromptSupported,
          displayMode,
        })

        setLoading(false)
      } catch (error) {
        console.error("Error running diagnostics:", error)
        setLoading(false)
      }
    }

    if (typeof window !== "undefined") {
      runDiagnostics()
    }
  }, [])

  if (loading) {
    return <div>Loading diagnostics...</div>
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>PWA Diagnostics</CardTitle>
        <CardDescription>Checking your app's PWA compatibility</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <DiagnosticItem label="HTTPS" status={diagnostics.isHttps} description="PWAs require HTTPS to work properly" />
        <DiagnosticItem
          label="Web Manifest"
          status={diagnostics.hasManifest}
          description="A valid manifest.json is required"
        />
        <DiagnosticItem
          label="Service Worker Support"
          status={diagnostics.serviceWorkerSupported}
          description="Browser must support Service Workers"
        />
        <DiagnosticItem
          label="Service Worker Registered"
          status={diagnostics.serviceWorkerRegistered}
          description="Service Worker must be registered"
        />
        <DiagnosticItem
          label="Install Prompt Support"
          status={diagnostics.installPromptSupported}
          description="Browser supports installation prompt"
        />
        <DiagnosticItem label="Online Status" status={diagnostics.isOnline} description="App is currently online" />
        <div className="flex justify-between items-center py-2">
          <div>
            <p className="font-medium">Display Mode</p>
            <p className="text-sm text-muted-foreground">Current display mode</p>
          </div>
          <Badge variant="outline">{diagnostics.displayMode}</Badge>
        </div>
        <DiagnosticItem
          label="Standalone Mode"
          status={diagnostics.isStandalone}
          description="App is running as installed PWA"
        />
      </CardContent>
    </Card>
  )
}

function DiagnosticItem({ label, status, description }: { label: string; status: boolean; description: string }) {
  return (
    <div className="flex justify-between items-center py-2">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {status ? <CheckCircle className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />}
    </div>
  )
}
