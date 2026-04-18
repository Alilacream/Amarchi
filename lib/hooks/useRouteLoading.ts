"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const MIN_DURATION = 400;
const MAX_DURATION = 1200;

export function useRouteLoading() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef<number>(0);

  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    setProgress(0);
    startRef.current = Date.now();

    const duration = MIN_DURATION + Math.random() * (MAX_DURATION - MIN_DURATION);

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min((elapsed / duration) * 90, 90);
      setProgress(pct);
    }, 30);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [pathname]);

  useEffect(() => {
    if (!loading) return;

    const elapsed = Date.now() - startRef.current;
    const minElapsed = Math.max(MIN_DURATION - elapsed, 0);

    const timer = setTimeout(() => {
      setProgress(100);
      if (intervalRef.current) clearInterval(intervalRef.current);

      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 300);
    }, minElapsed);

    return () => clearTimeout(timer);
  }, [loading]);

  return { loading, progress };
}
