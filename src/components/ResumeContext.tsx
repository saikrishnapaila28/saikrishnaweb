"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import ResumeModal from "@/components/ResumeModal";

interface ResumeContextType {
  openResume: () => void;
  closeResume: () => void;
}

const ResumeContext = createContext<ResumeContextType>({
  openResume: () => {},
  closeResume: () => {},
});

export const useResume = () => useContext(ResumeContext);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ResumeContext.Provider
      value={{
        openResume: () => setIsOpen(true),
        closeResume: () => setIsOpen(false),
      }}
    >
      {children}
      <ResumeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ResumeContext.Provider>
  );
}
