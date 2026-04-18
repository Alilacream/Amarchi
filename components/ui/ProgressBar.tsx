"use client";

import { useRouteLoading } from "@/lib/hooks/useRouteLoading";

export default function ProgressBar() {
  const { loading, progress } = useRouteLoading();

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-accent transition-all duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
