import { Server, Folder, Tag, Key } from 'lucide-react'
import { Card } from './ui/card'
import { ContentTitle } from './ui/contentTitle'
import Keys from '../views/Keys'
import { StreamModeProvider } from './providers/StreamModeProvider'

interface MainContentProps {
  activeSection: string
}

export function MainContent({ activeSection }: MainContentProps) {
  return (
    <div className="flex-grow overflow-auto bg-background p-6">
      {activeSection === "hosts" && (
        <div>
          <ContentTitle title='Hosts' description='View your current configurated hosts.' />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <Card
                title="Web Server"
                subtitle="192.168.1.100"
                icon={<Server size={18} />}
              />
            </li>
            <li>
              <Card
                title="Database Server"
                subtitle="192.168.1.101"
                icon={<Server size={18} />}
              />
            </li>
          </ul>
        </div>
      )}
      {activeSection === "groups" && (
        <div>
          <h2 className="mb-4 text-2xl font-bold">Groups</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 text-muted-foreground">
              <Folder size={18} />
              <span>Development</span>
              <span className="text-sm">(2 hosts)</span>
            </li>
            <li className="flex items-center space-x-2 text-muted-foreground">
              <Folder size={18} />
              <span>Production</span>
              <span className="text-sm">(3 hosts)</span>
            </li>
          </ul>
        </div>
      )}
      {activeSection === "keys" && (
        <StreamModeProvider>
          <Keys/>
        </StreamModeProvider>
      )}
      {activeSection === "tags" && (
        <div>
          <h2 className="mb-4 text-2xl font-bold">Tags</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 text-muted-foreground">
              <Tag size={18} />
              <span>Linux</span>
              <span className="text-sm">(4 hosts)</span>
            </li>
            <li className="flex items-center space-x-2 text-muted-foreground">
              <Tag size={18} />
              <span>Database</span>
              <span className="text-sm">(2 hosts)</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

