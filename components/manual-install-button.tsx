"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

export function ManualInstallButton() {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  if (!isClient || isStandalone) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Install App
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Install EconLearn App</DialogTitle>
          <DialogDescription>
            Install this app on your device for offline access and a better
            experience.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <h3 className="font-medium mb-2">On Android (Chrome):</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Tap the menu (⋮) in the top right</li>
              <li>Select "Install app" or "Add to Home screen"</li>
            </ol>
          </div>
          <div>
            <h3 className="font-medium mb-2">On iOS (Safari):</h3>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Tap the share button (□↑)</li>
              <li>Scroll down and tap "Add to Home Screen"</li>
              <li>Tap "Add" in the top right</li>
            </ol>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
