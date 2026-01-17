import React, { useMemo } from "react";

type SpeedMeterProps = {
  stage: "ping" | "download" | "upload";
  progress: number;
  download: string;
  upload: string;
};


const centerX = 250;
const centerY = 250;
const radius = 220; // OUTSIDE the arc (important!)

const scaleLabels = [
  { value: "0", angle: -180 },
  { value: "100", angle: -150 },
  { value: "200", angle: -120 },
  { value: "300", angle: -90 },
  { value: "400", angle: -60 },
  { value: "500", angle: -30 },
  { value: "600", angle: 0 },
];

const getPoint = (angle: number) => {
  const rad = (angle * Math.PI) / 180;
  return {
    x: centerX + radius * Math.cos(rad),
    y: centerY + radius * Math.sin(rad),
  };
};


export function SpeedMeter({
  stage,
  progress,
  download,
  upload,
}: SpeedMeterProps) {
  const value =
    stage === "download"
      ? Number(download || 0)
      : stage === "upload"
      ? Number(upload || 0)
      : 0;

  const label = stage.toUpperCase();

  /* ---------- ARC ---------- */
  const arcLength = 565;
  const arcOffset = arcLength - (progress / 100) * arcLength;

  /* ---------- GRAPH ---------- */
  const graphPath = useMemo(() => {
    const baseY = 90;
    const amplitude = Math.min(value * 0.7, 65);

    return `
      M0 ${baseY}
      L80 ${baseY - amplitude * 0.3}
      L160 ${baseY - amplitude * 0.5}
      L240 ${baseY - amplitude * 0.4}
      L320 ${baseY - amplitude * 0.65}
      L400 ${baseY - amplitude * 0.55}
      L520 ${baseY - amplitude}
    `;
  }, [value]);

  return (
    <div className="relative w-130 h-90 z-10">
      {/* ARC */}
      <svg viewBox="0 0 500 300" className="w-full h-full">
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="100%" stopColor="#4895EF" />
          </linearGradient>
        </defs>

        <path
          d="M50 250 A200 200 0 0 1 450 250"
          stroke="#1A2332"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M50 250 A200 200 0 0 1 450 250"
          stroke="url(#arcGradient)"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={arcLength}
          strokeDashoffset={arcOffset}
          style={{ transition: "stroke-dashoffset 0.6s ease-out" }}
        />

        <text
          x="250"
          y="160"
          textAnchor="middle"
          fill="#7DD3FC"
          fontSize="64"
          fontWeight="600"
        >
          {value || "--"}
        </text>

        <text
          x="250"
          y="195"
          textAnchor="middle"
          fill="#9CA3AF"
          fontSize="16"
          letterSpacing="2"
        >
          {label}
        </text>

        <text x="250" y="220" textAnchor="middle" fill="#6B7280" fontSize="14">
          Mbps
        </text>

        {/* ARC SCALE NUMBERS */}
        {scaleLabels.map((label) => {
          const { x, y } = getPoint(label.angle);

          return (
            <text
              key={label.value}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#94A3B8"
              fontSize="12"
              opacity="0.7"
            >
              {label.value}
            </text>
          );
        })}
      </svg>

      {/* GRAPH */}
      <svg
        viewBox="0 0 520 120"
        className="absolute bottom-4 left-0 w-full z-20"
      >
        <defs>
          <linearGradient id="graphFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path d={`${graphPath} L520 120 L0 120 Z`} fill="url(#graphFill)" />

        <path
          d={graphPath}
          stroke="#7DD3FC"
          strokeWidth="2"
          fill="none"
          style={{ transition: "all 0.6s ease-out" }}
        />
      </svg>
    </div>
  );
}
