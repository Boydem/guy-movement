import type { FC } from "react"

const SVGGrain: FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xlinkHref="http://svgjs.dev/svgjs"
      viewBox="0 0 700 700"
      opacity="1"
      className="absolute h-full top-0 left-0 object-cover object-center brightness-[0.65] contrast-[0.85] opacity-10 -z-[1] pointer-events-none"
    >
      <defs>
        <filter
          id="nnnoise-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="linearRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.162"
            numOctaves="4"
            seed="15"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          ></feTurbulence>
          <feSpecularLighting
            surfaceScale="6"
            specularConstant="1"
            specularExponent="20"
            lighting-color="#f0b82a"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="specularLighting"
          >
            <feDistantLight azimuth="3" elevation="50"></feDistantLight>
          </feSpecularLighting>
        </filter>
      </defs>
      <rect width="700" height="700" fill="transparent"></rect>
      <rect
        width="700"
        height="700"
        fill="#f0b82a"
        filter="url(#nnnoise-filter)"
      ></rect>
    </svg>
  )
}

export default SVGGrain
