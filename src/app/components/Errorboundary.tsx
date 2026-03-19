"use client";

import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    const data = JSON.stringify({
      message: error.message,
      stack: error.stack,
      url: window.location.href,
    });

    // sendBeacon fires even during page unload/reload — fetch can be cancelled
    navigator.sendBeacon(
      "/api/log-error",
      new Blob([data], { type: "application/json" }),
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen p-8 bg-white">
          <div className="max-w-2xl mx-auto border border-red-300 rounded-lg p-6 bg-red-50">
            <h1 className="text-xl font-bold text-red-700 mb-4">
              Page crashed — error details:
            </h1>
            <p className="font-semibold text-red-600 mb-2">
              {this.state.error?.name}: {this.state.error?.message}
            </p>
            <pre className="text-xs text-red-500 whitespace-pre-wrap break-all bg-red-100 p-4 rounded overflow-auto max-h-[60vh]">
              {this.state.error?.stack}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
