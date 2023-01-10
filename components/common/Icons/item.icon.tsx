import { SVGProps, FC } from "react";

interface Props {
    height?: number;
    width?: number;
    color?: string;
    className?: string;
}

export const ItemIcon: FC<Props> = ({ fill, height, width, ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 12}
        height={height || 12}
        viewBox="0 0 32 32"
        fill="currentColor" 
        {...props}
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z" fill={fill}/>
        </svg>
    );
};
