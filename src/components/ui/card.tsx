import { ArrowRight } from 'lucide-react'
import { ReactNode } from 'react'

interface CardProps {
  title: string
  subtitle?: string
  icon?: ReactNode
  children?: ReactNode
}

export function Card({ title, subtitle, icon, children }: CardProps) {
  return (
    <div className="relative flex flex-col my-6 card shadow-sm rounded-lg w-96 p-6">
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-gray-500 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="flex items-center mb-4">
        {icon && <div className="text-primary">{icon}</div>}
        <h5 className="ml-3 text-xl font-semibold">
          {title}
        </h5>
      </div>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        {children && <div className="mt-4">{children}</div>}
      <div>
        <a href="#" className="font-semibold text-sm hover:underline flex items-center">
          Open terminal <ArrowRight className="h-4 w-4"/>
        </a>
      </div>
    </div>
)}

