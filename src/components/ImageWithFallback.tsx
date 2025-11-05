"use client";

import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

/**
 * ImageWithFallback
 * - Uses a native <img> element so this component works in Vite/browser
 * - Accepts Next-style props like `fill` (they're stripped before rendering)
 * - Falls back to an inline SVG placeholder on load error
 */
export function ImageWithFallback(
  props: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; [key: string]: any }
) {
  const [didError, setDidError] = useState(false)

  const handleError = () => setDidError(true)

  // accept and strip Next.js-specific props like `fill` to remain compatible
  const { src, alt, className, style, fill, ...rest } = props

  if (didError || !src) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style as React.CSSProperties}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt={alt ?? 'Error loading image'} data-original-url={src as string} />
        </div>
      </div>
    )
  }

  // Spread remaining (safe) img props. `fill` has been removed above.
  return (
    <img
      src={src as string}
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      {...rest}
    />
  )
}

export default ImageWithFallback