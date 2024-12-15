import { Plus, Search, Settings } from 'lucide-react'

interface TopBarProps {
  onSectionChange: (section: string) => void
}

export function TopBar({ onSectionChange }: TopBarProps) {
  return (
    <div className="flex items-center justify-between top-nav p-4">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <button onClick={() => onSectionChange("hosts")}>
            Hosts
          </button>
          <button onClick={() => onSectionChange("groups")}>
            Groups
          </button>
          <button onClick={() => onSectionChange("tags")}>
            Tags
          </button>
          <button onClick={() => onSectionChange("keys")}>
            SSH Keys
          </button>
        </div>
      </div>
      <div className="flex space-x-2">
        <button>
          <Search className="h-4 w-4" />
        </button>
        <button>
          <Plus className="h-4 w-4" />
        </button>
        <Settings />
      </div>
    </div>
  )
}

