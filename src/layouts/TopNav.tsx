import { FileKey2Icon, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopNav() {
    return (
        <div className="p-4 bg-primary text-text flex justify-end">
            <div className="ml-2">
                <Link to="/keys"><FileKey2Icon size={18}/></Link>
            </div>
            <div className="ml-2">
                <Link to="/settings"><Settings size={18}/></Link>
            </div>
        </div>
    );
}