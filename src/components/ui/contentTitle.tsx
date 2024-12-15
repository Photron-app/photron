import { Info } from 'lucide-react'
import { ReactNode } from 'react'

interface ContentTitleProps {
  title: string
  description?: string
  icon?: ReactNode
  bottomMarginClass?: String
  topMarginClass?: String
}

export function ContentTitle({ title, description, icon, bottomMarginClass = "mb-2", topMarginClass = "mt-2" }: ContentTitleProps) {
  return (
    <div>
        <div className={`flex flex-row items-center ${bottomMarginClass} ${topMarginClass}`}>
            <h2 className="mb-1 mr-4 text-2xl font-bold min-w-fit">{title}</h2>
            <div className="h-px w-full bg-gradient-to-r from-gray-500 to-transparent" />
        </div>
        <div className="flex flex-row items-center">
            {description && 
            <>
              <Info size={15} className='mr-2 text-gray-500'/>
              <p className="text-sm text-gray-500">{description}</p>
            </>
            }
        </div>
    </div>
)}
