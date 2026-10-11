import type { ReactNode } from "react";


export interface LoadingComponentProps {
  p_time_out: number;
  p_children: ReactNode; // The content that will show up after loading
}