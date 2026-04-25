"use client";

import { useState, useEffect, useCallback } from "react";
import SplashScreen from "@/components/ui/SplashScreen";
import ProgressBar from "@/components/ui/ProgressBar";
import { LanguageProvider } from "@/components/ui/LanguageProvider";

const SPLASH_KEY = "amarchi-splash-seen";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SPLASH_KEY) !== "1") {
      setShowSplash(true);
    }
  }, []);

  const handleSplashDone = useCallback(() => {
    sessionStorage.setItem(SPLASH_KEY, "1");
    setShowSplash(false);
  }, []);

  return (
    <LanguageProvider>
      {showSplash && <SplashScreen onDone={handleSplashDone} />}
      <ProgressBar />
      {children}
    </LanguageProvider>
  );
}
