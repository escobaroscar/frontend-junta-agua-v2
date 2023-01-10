import { SVGProps, FC } from "react";

interface Props {
    height?: number;
    width?: number;
    color?: string;
}

export const ArrowIcon: FC<Props> = ({ color='none', height, width, ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        ></path>
      </svg>
        // <svg
        //     xmlns="http://www.w3.org/2000/svg"
        //     width={width || 20}
        //     height={height || 20}
        //     viewBox="0 0 448 512"
        //     fill="currentColor" 
        // >
        //     <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
    );
};
