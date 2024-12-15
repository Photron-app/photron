import { ReactNode } from "react"

export default interface ITitleComponentProps {
    title: string
    description?: string
    icon?: ReactNode
    bottomMarginClass?: String
    topMarginClass?: String
  }
  