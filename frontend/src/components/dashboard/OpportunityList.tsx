import React, { useState } from "react";
import { Card } from "../ui/Card";

export type EligibilityStatus = "eligible" | "near-eligible" | "not-eligible";

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  type: "Internship" | "Scholarship" | "Fellowship" | "Research" | "Hackathon";
  status: EligibilityStatus;
  deadline?: string;
  missingSkills?: string[];
  cgpaRequired?: number;
  yearRequired?: number;
}

interface OpportunityListProps {
  opportunities: Opportunity[];
  onSelect: (opp: Opportunity) => void;
  selectedId?: string;
}

const statusConfig: Record<EligibilityStatus, { label: string; bg: string; text: string; dot: string }> = {
  eligible: {
    label: "Eligible",
    bg: "bg-green/10",
    text: "text-green-700",
    dot: "bg-green",
  },
  "near-eligible": {
    label: "Near Eligible",
    bg: "bg-orange/10",
    text: "text-orange-700",
    dot: "bg-orange",
  },
  "not-eligible": {
    label: "Gap Required",
    bg: "bg-purple/10",
    text: "text-purple",
    dot: "bg-purple-soft",
  },
};

const typeColors: Record<string, string> = {
  Internship: "bg-cyan/15 text-cyan-700",
  Scholarship: "bg-purple/10 text-purple",
  Fellowship: "bg-orange/10 text-orange-700",
  Research: "bg-green/10 text-green-700",
  Hackathon: "bg-navy/10 text-navy",
};

type FilterTab = "all" | EligibilityStatus;

const TABS: { key: FilterTab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "eligible", label: "Eligible" },
  { key: "near-eligible", label: "Near Eligible" },
  { key: "not-eligible", label: "Gap Required" },
];

export const OpportunityList: React.FC<OpportunityListProps> = ({
  opportunities,
  onSelect,
  selectedId,
}) => {
  const [filter, setFilter] = useState<FilterTab>("all");

  const filtered =
    filter === "all" ? opportunities : opportunities.filter((o) => o.status === filter);

  return (
    <Card padded={false} className="flex flex-col h-full">
      <div className="px-5 pt-5 pb-3 border-b border-border">
        <h3 className="text-navy font-semibold text-base mb-3">Opportunities</h3>
        <div className="flex gap-1 bg-surface-soft rounded-lg p-0.5 w-full overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={[
                "flex-1 min-w-fit text-xs font-medium px-3 py-1.5 rounded-md transition-all whitespace-nowrap",
                filter === tab.key
                  ? "bg-white text-navy shadow-sm shadow-purple/10"
                  : "text-muted hover:text-navy",
              ].join(" ")}
            >
              {tab.label}
              {tab.key !== "all" && (
                <span className="ml-1 opacity-60">
                  ({opportunities.filter((o) => o.status === tab.key).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto divide-y divide-border/60">
        {filtered.length === 0 && (
          <div className="px-5 py-10 text-center text-muted text-sm">
            No opportunities in this category.
          </div>
        )}
        {filtered.map((opp) => {
          const st = statusConfig[opp.status];
          const isSelected = opp.id === selectedId;
          return (
            <button
              key={opp.id}
              onClick={() => onSelect(opp)}
              className={[
                "w-full text-left px-5 py-4 transition-colors",
                isSelected
                  ? "bg-surface-soft border-l-2 border-purple"
                  : "hover:bg-surface-soft/60",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-navy font-medium text-sm leading-snug truncate">
                    {opp.title}
                  </p>
                  <p className="text-muted text-xs mt-0.5 truncate">{opp.organization}</p>
                </div>
                <span
                  className={[
                    "shrink-0 text-xs font-medium px-2 py-0.5 rounded-full",
                    st.bg,
                    st.text,
                  ].join(" ")}
                >
                  {st.label}
                </span>
              </div>

              <div className="flex items-center gap-2 mt-2.5">
                <span
                  className={[
                    "text-xs font-medium px-2 py-0.5 rounded-md",
                    typeColors[opp.type] ?? "bg-surface-soft text-muted",
                  ].join(" ")}
                >
                  {opp.type}
                </span>
                {opp.deadline && (
                  <span className="text-xs text-muted">Due {opp.deadline}</span>
                )}
                {opp.missingSkills && opp.missingSkills.length > 0 && (
                  <span className="text-xs text-purple">
                    {opp.missingSkills.length} gap{opp.missingSkills.length > 1 ? "s" : ""}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </Card>
  );
};
