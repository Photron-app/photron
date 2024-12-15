import { Folder, Tag, Server } from 'lucide-react'

export function SideNav() {
  return (
    <nav className="w-64 side-bar">
      <div className="flex items-center justify-center h-20">
        <h1 className="text-2xl font-bold text-gray-100 title text-center">PHOTRON</h1>
      </div>
      <div className="space-y-6 p-4">
        <div>
          <h2 className="mb-2 text-l font-bold">Groups</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-white">
                <Folder size={18} />
                <span>Development</span>
              </a>
              <ul className="ml-6 mt-2 space-y-1">
                <li>
                  <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-white">
                    <Server size={14} />
                    <span>Web Server</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-white">
                    <Server size={14} />
                    <span>Database</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-white">
                <Folder size={18} />
                <span>Production</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Horizontal gradient separator */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
        <div>
          <h2 className="mb-2 text-l font-bold">Tags</h2>
          <ul className="space-y-1">
            <li>
              <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-white">
                <Tag size={18} />
                <span>Linux</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-white">
                <Tag size={18} />
                <span>Database</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

