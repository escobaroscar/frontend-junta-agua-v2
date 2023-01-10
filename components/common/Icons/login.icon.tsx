import { SVGProps, FC } from "react";

interface Props {
    height?: number;
    width?: number;
    color?: string;
}

export const LoginIcon: FC<Props> = ({ fill, height, width, ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || 20}
            height={height || 20}
            viewBox="0 0 24 24"
            fill="none"
        >
        <path d="M2.99072 6.99075C2.99072 4.78175 4.78162 2.99075 6.99072 2.99075H10.9907C13.1997 2.99075 14.9907 4.78175 14.9907 6.99075C14.9907 7.54275 14.5427 7.99075 13.9907 7.99075C13.4387 7.99075 12.9907 7.54275 12.9907 6.99075C12.9907 5.88575 12.0957 4.99075 10.9907 4.99075H6.99072C5.88612 4.99075 4.99072 5.88575 4.99072 6.99075V16.9907C4.99072 18.0957 5.88612 18.9907 6.99072 18.9907H10.9907C12.0957 18.9907 12.9907 18.0957 12.9907 16.9907C12.9907 16.4387 13.4387 15.9907 13.9907 15.9907C14.5427 15.9907 14.9907 16.4387 14.9907 16.9907C14.9907 19.1997 13.1997 20.9907 10.9907 20.9907H6.99072C4.78162 20.9907 2.99072 19.1997 2.99072 16.9907V6.99075ZM9.99072 11.9907C9.99072 11.4387 10.4387 10.9907 10.9907 10.9907H18.5537L16.5847 8.99075L17.9907 7.58474L21.7097 11.2718C22.0997 11.6628 22.0997 12.3187 21.7097 12.7097L17.9907 16.3967L16.5847 14.9907L18.5537 12.9907H10.9907C10.4387 12.9907 9.99072 12.5427 9.99072 11.9907Z" fill="white"/>
        </svg>
    );
};
