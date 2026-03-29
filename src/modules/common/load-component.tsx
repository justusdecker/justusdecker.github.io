import { useEffect, useState, type ReactNode } from "react";
import Header from "./header";

// 1. Wir definieren ein Interface für die Props (Argumente) der Komponente
interface LoadingComponentProps {
  timeOut: number;
  children: ReactNode; // Das ist der Inhalt, der nach dem Laden gezeigt wird
}

export const LoadingComponent = ({ timeOut, children }: LoadingComponentProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, timeOut);

    return () => clearTimeout(timer);
  }, [timeOut]); // timeOut als Dependency, falls er sich mal dynamisch ändert

  // Fall 1: Es lädt noch -> Spinner zeigen
  if (isLoading) {
    return (
      <>
        <Header />
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Inhalte werden geladen...</p>
        </div>
      </>
    );
  }

  // Fall 2: Laden beendet -> Den eigentlichen Inhalt (children) anzeigen
  return <>{children}</>;
};