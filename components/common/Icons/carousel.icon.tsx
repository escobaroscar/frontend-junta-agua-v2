import { SVGProps, FC } from "react";

interface Props {
    height?: number;
    width?: number;
    color?: string;
}

export const CarouselIcon: FC<Props> = ({ fill, height, width, ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg id="icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <title />
            <path d="M22,26H10a2,2,0,0,1-2-2V8a2,2,0,0,1,2-2H22a2,2,0,0,1,2,2V24A2,2,0,0,1,22,26ZM10,8V24H22V8Z" />
            <path d="M4,24H0V22H4V10H0V8H4a2,2,0,0,1,2,2V22A2,2,0,0,1,4,24Z" />
            <path d="M32,24H28a2,2,0,0,1-2-2V10a2,2,0,0,1,2-2h4v2H28V22h4Z" />
            </svg>
        );
};
