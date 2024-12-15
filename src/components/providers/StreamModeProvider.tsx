import { createContext, useState, ReactNode, useContext } from "react";


interface StreamModeContextType {
    streamMode: boolean;
    setStreamMode: (value: boolean) => void;
}

interface StreamModeProviderProps {
    children: ReactNode;
}


export const StreamModeContext = createContext<StreamModeContextType>({
  streamMode: false,
  setStreamMode: () => {}
});

export const StreamModeProvider = ({ children }: StreamModeProviderProps) => {
  const [streamMode, setStreamMode] = useState(false);

  return (
    <StreamModeContext.Provider value={{ streamMode, setStreamMode }}>
      {children}
    </StreamModeContext.Provider>
  );
};

export const useStreamMode = (): StreamModeContextType => {
    const context = useContext(StreamModeContext);
    if (!context) {
      throw new Error("useStreamMode must be used within a StreamModeProvider");
    }
    return context;
  };