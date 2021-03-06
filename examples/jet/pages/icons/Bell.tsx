import * as React from 'react';
import { SVGProps } from 'react';

const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 20"
    preserveAspectRatio="xMidYMid meet"
    {...props}
  >
    <path
      d="M6 15v-.9a.9.9 0 0 0-.9.9H6Zm6 0h.9a.9.9 0 0 0-.9-.9v.9ZM1.293 12.707l-.637-.636.637.636Zm.51-.51.637.636-.636-.637Zm14.393 0 .637-.637-.637.636Zm.511.51.636-.636-.636.636ZM9 1v.9V1ZM6 15.9h6v-1.8H6v1.8Zm5.1-.9v1h1.8v-1h-1.8Zm-4.2 1v-1H5.1v1h1.8ZM9 18.1A2.1 2.1 0 0 1 6.9 16H5.1A3.9 3.9 0 0 0 9 19.9v-1.8Zm2.1-2.1A2.1 2.1 0 0 1 9 18.1v1.8a3.9 3.9 0 0 0 3.9-3.9h-1.8Zm4.9-1.9H2v1.8h14v-1.8ZM1.9 14v-.586H.1V14h1.8Zm.03-.656.51-.511-1.273-1.273-.51.51 1.272 1.274Zm.97-1.622V8H1.1v3.722h1.8ZM15.1 8v3.722h1.8V8h-1.8Zm.46 4.833.51.51 1.273-1.272-.51-.511-1.273 1.273Zm.54.581V14h1.8v-.586h-1.8Zm-.03-.07a.1.1 0 0 1 .03.07h1.8a1.9 1.9 0 0 0-.556-1.343l-1.273 1.273Zm-.97-1.622c0 .417.165.816.46 1.11l1.273-1.272a.23.23 0 0 1 .067.162h-1.8ZM16.9 8A7.9 7.9 0 0 0 9 .1v1.8A6.1 6.1 0 0 1 15.1 8h1.8Zm-14 0A6.1 6.1 0 0 1 9 1.9V.1A7.9 7.9 0 0 0 1.1 8h1.8Zm-.46 4.833a1.57 1.57 0 0 0 .46-1.11H1.1c0-.062.024-.12.067-.163l1.273 1.273Zm-.54.581a.1.1 0 0 1 .03-.07L.655 12.07A1.9 1.9 0 0 0 .1 13.414h1.8Zm.1.686a.1.1 0 0 1-.1-.1H.1c0 1.05.85 1.9 1.9 1.9v-1.8Zm14 1.8a1.9 1.9 0 0 0 1.9-1.9h-1.8a.1.1 0 0 1-.1.1v1.8Z"
      fill="url(#bell_svg__a)"
    />
    <defs>
      <linearGradient
        id="bell_svg__a"
        x1={0}
        y1={14}
        x2={18}
        y2={14}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#53BC9E" />
        <stop offset={1} stopColor="#36A7CD" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgBell;
