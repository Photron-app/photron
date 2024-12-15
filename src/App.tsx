import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ThemeContextProvider } from './providers/ThemeContextProvider';
import Settings from './pages/Settings';
import TopNav from './layouts/TopNav';
import SideNav from './layouts/SideNav';
import Keys from './pages/Keys';

export default function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex h-screen w-full overflow-hidden bg-background text-text-normal">
                <SideNav />
                <div className="w-px bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
                <div className='flex flex-col flex-grow'>
                    <TopNav />
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
                    <div className="flex-grow overflow-auto p-4">
                        <Routes>
                            <Route path="/settings" element={<Settings />} />
                        </Routes>
                        <Routes>
                            <Route path="/keys" element={<Keys />} />
                        </Routes>
                    </div>    
                </div>
            </div> 
        </main>
      </Router>
    </ThemeContextProvider>
  );
}