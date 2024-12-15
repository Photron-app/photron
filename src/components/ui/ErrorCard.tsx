import { TriangleAlert } from 'lucide-react'
import { ReactNode } from 'react'

interface ErrorCardProps {
  errorTitle: string
  description?: string
  icon?: ReactNode
}

export function ErrorCard({ errorTitle, description, icon }: ErrorCardProps) {
  return (
    <div className="flex items-center justify-center w-full h-full">
        <div>
            {icon && icon}
            <h5 className="text-m text-gray-500">{errorTitle}</h5>
            {description && 
              <p className="text-sm text-gray-500">{description}</p>
            }
        </div>
    </div>
)}
