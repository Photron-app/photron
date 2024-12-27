import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { IModalProps } from "../interfaces/Props/IModalProps"
  
export function Modal({ isOpen, onClose, title, children }: IModalProps) {
    const [isModalOpen, setIsModalOpen] = useState(isOpen)

    useEffect(() => {
        setIsModalOpen(isOpen)
    }, [isOpen])

    if (!isModalOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-background rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <button onClick={onClose}>
                <X />
            </button>
            </div>
            {children}
        </div>
        </div>
    )
}
  