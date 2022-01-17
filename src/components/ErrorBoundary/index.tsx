import { NotFoundError } from "@/utils/errors/not-found";
import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="page-container">
          <h1>{this.state.error?.message}</h1>
          <h2>{this.state.error instanceof NotFoundError ? "404" : "500"}</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
