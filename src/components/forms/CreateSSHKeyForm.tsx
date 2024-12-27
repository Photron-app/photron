import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface CreateSSHKeyFormProps {
  onSubmit: (name: string, type: string) => void
  onCancel: () => void
}

export function CreateSSHKeyForm({ onSubmit, onCancel }: CreateSSHKeyFormProps) {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(name, type)
  }

  const keyTypes = ['RSA', 'DSA', 'ECDSA', 'ED25519']

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-zinc-300">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter SSH key name"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="type" className="block text-sm font-medium text-zinc-300">
          Key Type
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
          >
            {type || 'Select key type'}
            <ChevronDown className="h-4 w-4" />
          </button>
          {isDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-zinc-800 border border-zinc-700 rounded-md shadow-lg">
              {keyTypes.map((keyType) => (
                <button
                  key={keyType}
                  type="button"
                  onClick={() => {
                    setType(keyType)
                    setIsDropdownOpen(false)
                  }}
                  className="block w-full px-4 py-2 text-left text-zinc-300 hover:bg-zinc-700 focus:outline-none"
                >
                  {keyType}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-end space-x-2 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create
        </button>
      </div>
    </form>
  )
}