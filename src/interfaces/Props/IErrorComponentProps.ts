import { ReactNode } from "react"

export default interface IErrorComponentProps {
    errorTitle: string
    description?: string
    icon?: ReactNode
}