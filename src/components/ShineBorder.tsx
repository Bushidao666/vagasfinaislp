import * as React from "react";

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Width of the border in pixels
   * @default 1
   */
  borderWidth?: number;
  /**
   * Duration of the animation in seconds
   * @default 14
   */
  duration?: number;
  /**
   * Color of the border, can be a single color or an array of colors
   * @default "#000000"
   */
  shineColor?: string | string[];
}

/**
 * Shine Border
 *
 * An animated background border effect component with configurable properties.
 */
export function ShineBorder({
  borderWidth = 1,
  duration = 14,
  shineColor = "#000000",
  className,
  style,
  ...props
}: ShineBorderProps) {
  const shineColors = Array.isArray(shineColor) ? shineColor.join(", ") : shineColor;
  
  return (
    <div
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          backgroundImage: `conic-gradient(from 0deg, transparent, ${shineColors}, transparent)`,
          backgroundSize: "300% 300%",
          padding: `${borderWidth}px`,
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          ...style,
        } as React.CSSProperties
      }
      className={`pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position] animate-shine ${className || ""}`}
      {...props}
    />
  );
}