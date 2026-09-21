import React from 'react';

interface RHBLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  monochrome?: boolean;
}

export const RHBLogo: React.FC<RHBLogoProps> = ({
  className = '',
  size = 'md',
  monochrome = false
}) => {
  const height = size === 'sm' ? 24 : size === 'lg' ? 44 : 32;

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`} aria-label="RHB Bank">
      <svg
        height={height}
        viewBox="0 0 160 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm"
      >
        {/* RHB Lettermark */}
        <text
          x="2"
          y="37"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="42"
          letterSpacing="-0.5px"
          fill={monochrome ? 'currentColor' : '#0067b1'}
        >
          RHB
        </text>

        {/* Diamond Symbol */}
        <g transform="translate(118, 10)">
          <path
            d="M 16 0 L 32 14 L 16 28 L 0 14 Z"
            fill={monochrome ? 'currentColor' : '#ed1c24'}
            opacity={monochrome ? 0.9 : 1}
          />
        </g>
      </svg>
    </div>
  );
};
