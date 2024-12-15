import IErrorComponentProps from "../interfaces/Props/IErrorComponentProps";

export function ErrorComponent({ errorTitle, description, icon }: IErrorComponentProps) {
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
  