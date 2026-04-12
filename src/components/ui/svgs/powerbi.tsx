import type { SVGProps } from "react";

const PowerBI = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <path
      d="M10 4C10 2.895 10.895 2 12 2H14C15.105 2 16 2.895 16 4V20C16 21.105 15.105 22 14 22H12C10.895 22 10 21.105 10 20V4Z"
      fill="#F2C811"
    />
    <path
      d="M5 10C5 8.895 5.895 8 7 8H9C10.105 8 11 8.895 11 10V20C11 21.105 10.105 22 9 22H7C5.895 22 5 21.105 5 20V10Z"
      fill="#F2C811"
      opacity="0.7"
    />
    <path
      d="M15 7C15 5.895 15.895 5 17 5H19C20.105 5 21 5.895 21 7V20C21 21.105 20.105 22 19 22H17C15.895 22 15 21.105 15 20V7Z"
      fill="#F2C811"
      opacity="0.85"
    />
  </svg>
);

export { PowerBI };
