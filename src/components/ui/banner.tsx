interface BannerProps {
  text: string,
  description?: string
}

export function Banner({ text, description }: BannerProps) {
    return (
        <div id="streamMode"
            className="side-bar fixed z-50 p-2 rounded-full drop-shadow-2xl bottom-12 left-1/2 -translate-x-1/2 max-sm:w-11/12">    
            <div className="flex items-center justify-between gap-4 text-sm">
                <div className="pl-4">
                    {text}
                </div>
                <div className="text-gray-500 pl-4">
                    {description}
                </div>
            </div>
        </div>
)}

