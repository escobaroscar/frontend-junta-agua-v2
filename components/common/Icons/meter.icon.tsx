import { SVGProps, FC } from "react";

interface Props {
    height?: number;
    width?: number;
    color?: string;
}

export const MeterIcon: FC<Props> = ({ fill, height, width, ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
        >
            <title /><g id="metre">
                <path d="M10,12l4.82,5.6a2.17,2.17,0,0,0,2-1,2.19,2.19,0,0,0,.39-2.21Z" />
                <path d="M16,32A16,16,0,1,1,32,16,16,16,0,0,1,16,32ZM16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Z" />
                <path d="M16,5a1,1,0,0,0-1,1V9a1,1,0,0,0,2,0V7.06a9,9,0,0,1,8,8.44H22.5a1,1,0,0,0,0,2h2.36A9,9,0,0,1,17,24.94V23a1,1,0,0,0-2,0v1.94A9,9,0,0,1,8.18,11.55a1,1,0,0,0-1.73-1A11,11,0,1,0,16,5Z" /></g>
        </svg>
    );
};
