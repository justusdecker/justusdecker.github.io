import { useEffect, useState } from "react";
import { Header } from "./Header";
import type { LoadingComponentProps } from "../types/load-component.types";

export const LoadingComponent = ({ p_time_out, p_children }: LoadingComponentProps) => {
  const [c_is_loading, useSetIsLoading] = useState(true);

  useEffect(() => {
    const c_timer = setTimeout(() => {
      useSetIsLoading(false);
    }, p_time_out);

    return () => clearTimeout(c_timer);
  }, [p_time_out]);

  // Case 1: IsLoading - Show Spinner
  if (c_is_loading) {
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

  // Case 2: Loaded - Show Children
  return <>{p_children}</>;
};