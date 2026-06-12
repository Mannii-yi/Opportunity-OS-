import React, { useState } from "react";
import { Card } from "../ui/Card";

interface SkillUnlock {
  skill: string;
  unlocks: number;
  category: string;
}

interface RoadmapCardProps {
  currentEligible: number;
  skillUnlocks: SkillUnlock[];
}

const categoryColor: Record<string, string> = {
  ML: "#6c4df6",
  Web: "#39c6d0",
  Data: "#f3a33b",
  Cloud: "#8acb68",
  Security: "#9b8cff",
  Other: "#5b5f7a",
};

export const RoadmapCard: React.FC<RoadmapCardProps> = ({
  currentEligible,
  skillUnlocks,
}) => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const sorted = [...skillUnlocks].sort((a, b) => b.unlocks - a.unlocks);
  const maxUnlocks = sorted[0]?.unlocks ?? 1;

  const selected = sorted.find((s) => s.skill === activeSkill) ?? sorted[0];
  const newEligible = selected ? currentEligible + selected.unlocks : currentEligible;

  return (
    <Card className="flex flex-col gap-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-purple mb-1">
          Growth Engine
        </p>
        <h3 className="text-navy font-bold text-base leading-snug">
          Which skill unlocks the most opportunities?
        </h3>
        <p className="text-muted text-xs mt-1">
          Learn one skill. Watch your eligible count grow.
        </p>
      </div>

      {/* Current vs projected */}
      <div className="flex gap-3">
        <div className="flex-1 px-4 py-3 rounded-xl bg-surface-soft border border-border text-center">
          <p className="text-2xl font-bold text-navy">{currentEligible}</p>
          <p className="text-muted text-xs mt-0.5">Eligible now</p>
        </div>
        <div className="flex items-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6c4df6" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
        <div className="flex-1 px-4 py-3 rounded-xl bg-purple/8 border border-purple/20 text-center">
          <p className="text-2xl font-bold text-purple">{newEligible}</p>
          <p className="text-purple/70 text-xs mt-0.5">
            After {selected?.skill ?? "—"}
          </p>
        </div>
      </div>

      {/* Skill bars */}
      <div className="space-y-2.5">
        {sorted.map((item) => {
          const isActive = (activeSkill ?? sorted[0]?.skill) === item.skill;
          const barWidth = Math.max(8, (item.unlocks / maxUnlocks) * 100);
          const color = categoryColor[item.category] ?? categoryColor.Other;

          return (
            <button
              key={item.skill}
              onClick={() => setActiveSkill(item.skill)}
              className={[
                "w-full text-left rounded-xl border px-3 py-2.5 transition-all",
                isActive
                  ? "border-purple/40 bg-purple/5"
                  : "border-border hover:border-purple/30 hover:bg-surface-soft",
              ].join(" ")}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: color }}
                  />
                  <span className="text-sm font-medium text-navy">{item.skill}</span>
                  <span
                    className="text-xs px-1.5 py-0.5 rounded-md font-medium"
                    style={{ background: color + "20", color }}
                  >
                    {item.category}
                  </span>
                </div>
                <span className="text-xs font-bold text-navy">
                  +{item.unlocks}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-surface-soft overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${barWidth}%`, background: color }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="pt-3 border-t border-border">
          <p className="text-xs text-muted">
            Learning{" "}
            <span className="text-purple font-semibold">{selected.skill}</span>{" "}
            would take you from{" "}
            <span className="font-semibold text-navy">{currentEligible}</span> to{" "}
            <span className="font-semibold text-navy">{newEligible}</span> eligible
            opportunities — unlocking{" "}
            <span className="text-purple font-semibold">{selected.unlocks} more</span>.
          </p>
        </div>
      )}
    </Card>
  );
};
