import React from 'react';

interface CircularProgressProps {
  value: number; // 0-100
  size?: number; // px
  strokeWidth?: number; // px
  color?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({ value, size = 40, strokeWidth = 6, color = '#2563eb' }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size} className="block" style={{ minWidth: size, minHeight: size }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 0.6s ease' }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize={size * 0.32}
        fill={color}
        fontWeight="bold"
      >
        {value}%
      </text>
    </svg>
  );
};
