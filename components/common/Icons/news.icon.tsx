import { SVGProps, FC } from "react";

interface Props {
    height?: number;
    width?: number;
    color?: string;
}

export const NewsIcon: FC<Props> = ({ fill, height, width, ...props }: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            version="1.1"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
        ><style type="text/css">
            
        </style><g id="Grid" /><g id="Proyektor" /><g id="Laptop" /><g id="Papan" /><g id="Kursi" /><g id="Meja" /><g id="Book" /><g id="News"><g><g><g>
                <path d="M60,58H4c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h56c1.1,0,2,0.9,2,2v48C62,57.1,61.1,58,60,58z M4,56h56V8H4      V56z" /></g></g><g><g>
                    <path d="M32,30H11c-0.6,0-1-0.4-1-1V13c0-0.6,0.4-1,1-1h21c0.6,0,1,0.4,1,1v16C33,29.6,32.6,30,32,30z M12,28h19      V14.1H12V28z" /></g></g><g>
                    <path d="M54,39H10c-0.6,0-1-0.4-1-1s0.4-1,1-1h44c0.6,0,1,0.4,1,1S54.6,39,54,39z" /></g><g>
                    <path d="M54,44H10c-0.6,0-1-0.4-1-1s0.4-1,1-1h44c0.6,0,1,0.4,1,1S54.6,44,54,44z" /></g><g>
                    <path d="M54,49H10c-0.6,0-1-0.4-1-1s0.4-1,1-1h44c0.6,0,1,0.4,1,1S54.6,49,54,49z" /></g><g>
                    <polygon  points="20.7,26 16.6,21 11.7,25.7 10.3,24.3 16.7,18 20.8,23 26.9,15.9 32.8,23.9 31.2,25.1 26.8,19.1         " /></g></g></g><g id="Note" /><g id="Calculator" /><g id="Ruler" /><g id="Pencil" /><g id="Clock" /><g id="Document" /><g id="Galeri" /><g id="Storage_Pencil" /><g id="Tras_Can" /><g id="Stempel" /><g id="_x2E_.." /><g id="Clip" /><g id="Board" /></svg>
    );
};
