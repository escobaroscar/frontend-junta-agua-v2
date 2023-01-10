import { FC,MouseEvent, ReactNode } from "react";
import Image from 'next/image'

export type typeButton = "submit"|"button"|"reset"; 
export type urlImage = 'string | StaticImport';
interface Props {
  color?: string;
  isDisabled?: boolean;
  colorTextHover?: string;
  colorText?: string;
  colorHover?: string;
  typeButton?: typeButton;
  borderColor?: string;
  border?:String;
  iconPath?: urlImage;
  onClick ? : ( event:MouseEvent ) => void ;
  children: ReactNode
}

export const Button: FC <Props> = ({children ,color='bg-white', iconPath="/icons/arrow-right.svg", onClick ,isDisabled ,colorText="text-green-500" ,typeButton="submit",colorHover='bg-green-500',colorTextHover="text-white",borderColor='border-green-500' }) => {
  return (
      <button type = {typeButton} disabled={isDisabled} onClick={onClick} className={` border-2  ${borderColor} rounded-[10px] ${color} group hover:${colorHover} hover:${colorTextHover} font-medium ${colorText}`} >
        <div className={`relative inline-flex items-center px-10 py-2 overflow-hidden text-md`}>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform  translate-x-full group-hover:translate-x-0 ease">
        <Image src={iconPath}  alt="Picture of the author"  width={30}  height={30}  />
        </span>
        <span className="relative">{children}</span>
        </div>
      </button>
  );
};
