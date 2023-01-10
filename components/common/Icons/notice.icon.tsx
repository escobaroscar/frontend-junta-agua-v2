import { SVGProps, FC } from "react";

interface Props {
    height?: number;
    width?: number;
    color?: string;
}

export const NoticeIcon: FC<Props> = ({ fill, height, width, ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || 20}
            height={height || 20}
            viewBox="0 0 24 24"
            fill="currentColor" 
            {...props}
        >

            
    </svg>
    );
};
