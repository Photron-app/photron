import ISubTitleComponentProps from "../interfaces/Props/ISubTitleComponentProps";

export default function SubTitleComponent({ title, bottomMarginClass = "mb-2", topMarginClass = "mt-2" }: ISubTitleComponentProps) {
    return (
        <div>
            <div className={`flex flex-row items-center ${bottomMarginClass} ${topMarginClass}`}>
                <h3 className="mb-1 mr-4 text-medium font-bold min-w-fit">{title}</h3>
            </div>
        </div>
    );
}