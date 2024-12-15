import { createContext, useState } from "react"
import { SideNav } from "./components/side-nav"
import { TopBar } from "./components/top-bar"
import { MainContent } from "./components/main-content"

export const StreamModeContext = createContext(false);
export default function App() {
  const [activeSection, setActiveSection] = useState("hosts")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
        <SideNav />
        {/* Vertical gradient separator */}
        <div className="w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
        <div className="flex flex-col flex-grow">
          <TopBar onSectionChange={setActiveSection} />
          {/* Horizontal gradient separator */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
          <MainContent activeSection={activeSection} />
        </div>
      </div>
    </main>
  )
}