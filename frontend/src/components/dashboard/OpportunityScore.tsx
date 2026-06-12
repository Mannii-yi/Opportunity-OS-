import React from "react";
import { Card } from "../ui/Card";

interface ScoreData {
  eligible: number;
  nearEligible: number;
  notEligible: number;
  total: number;
}

interface OpportunityScoreProps {
  data: ScoreData;
  studentName: string;
  goal: string;
}

const Arc: React.FC<{ percent: number; color: string; size?: number; strokeWidth?: number }> = ({
  percent,
  color,
  size = 120,
  strokeWidth = 10,
}) => {
  const r = (size - strokeWidth) / 2;
  const circumference = Math.PI * r; // half circle arc
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg
      width={size}
      height={size / 2 + strokeWidth / 2}
      viewBox={`0 0 ${size} ${size / 2 + strokeWidth}`}
      className="overflow-visible"
    >
      <path
        d={`M ${strokeWidth / 2} ${size / 2} A ${r} ${r} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
        fill="none"
        stroke="#ded8ff"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d={`M ${strokeWidth / 2} ${size / 2} A ${r} ${r} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(0.4,0,0.2,1)" }}
      />
    </svg>
  );
};

export const OpportunityScore: React.FC<OpportunityScoreProps> = ({
  data,
  studentName,
  goal,
}) => {
  const eligiblePercent = Math.round((data.eligible / data.total) * 100);

  const stats = [
    { label: "Eligible Now", value: data.eligible, color: "#8acb68", dot: "bg-green" },
    { label: "Near Eligible", value: data.nearEligible, color: "#f3a33b", dot: "bg-orange" },
    { label: "Gap Required", value: data.notEligible, color: "#9b8cff", dot: "bg-purple-soft" },
  ];

  return (
    <Card className="flex flex-col gap-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-0.5">
          Profile Summary
        </p>
        <h2 className="text-navy font-bold text-xl leading-snug">{studentName}</h2>
        <p className="text-muted text-sm mt-0.5">Goal: {goal}</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative">
          <Arc percent={eligiblePercent} color="#6c4df6" size={160} strokeWidth={13} />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center pb-1">
            <span className="text-3xl font-bold text-navy">{eligiblePercent}%</span>
            <p className="text-xs text-muted leading-tight">match rate</p>
          </div>
        </div>

        <div className="w-full mt-4 space-y-2.5">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: s.color }}
                />
                <span className="text-sm text-muted">{s.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-28 h-1.5 rounded-full bg-surface-soft overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${(s.value / data.total) * 100}%`,
                      background: s.color,
                    }}
                  />
                </div>
                <span className="text-sm font-semibold text-navy w-5 text-right">
                  {s.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-border flex items-center justify-between">
        <span className="text-muted text-xs">Total opportunities scanned</span>
        <span className="text-navy font-bold text-lg">{data.total}</span>
      </div>
    </Card>
  );
};
