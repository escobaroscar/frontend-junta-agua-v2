import { SVGProps, FC } from "react";

interface Props {
    height?: number;
    width?: number;
    fill?: string;
}

export const SearchIcon: FC<Props> = ({ fill="white", height, width, ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || 20}
            height={height || 20}
            viewBox="0 0 20 20"
            fill={fill} 
            {...props}
        >
            
            <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill={fill} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </svg>
    );
};
