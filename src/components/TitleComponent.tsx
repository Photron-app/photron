import { Info } from "lucide-react";
import ITitleComponentProps from "../interfaces/Props/ITitleComponentProps";

export default function TitleComponent({ title, description, icon, bottomMarginClass = "mb-2", topMarginClass = "mt-2", children }: ITitleComponentProps) {
    return (
        <div className={`${bottomMarginClass} ${topMarginClass}`}>
            <div className="flex flex-row items-center grid grid-cols-[auto_1fr_auto] gap-x-4 gap-y-2">
                <h2 className="mb-1 mr-4 text-xl font-bold min-w-fit">{title}</h2>
                <div className="h-px w-full bg-gradient-to-r from-gray-500 to-transparent" />
                {children}
            </div>
            <div className="flex flex-row items-center">
                {description && 
                <>
                  <Info size={15} className='mr-2 text-text-muted'/>
                  <p className="text-sm text-text-muted">{description}</p>
                </>
                }
            </div>
        </div>
    );
}