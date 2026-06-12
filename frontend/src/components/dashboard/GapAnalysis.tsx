import React from "react";
import { Card, CardHeader } from "../ui/Card";
import { Button } from "../ui/Button";
import type { Opportunity } from "./OpportunityList";

interface GapAnalysisProps {
  selected: Opportunity | null;
}

export const GapAnalysis: React.FC<GapAnalysisProps> = ({ selected }) => {
  if (!selected) {
    return (
      <Card className="flex flex-col items-center justify-center min-h-48 text-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-surface-soft flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6c4df6" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
        <div>
          <p className="text-navy font-semibold text-sm">Select an opportunity</p>
          <p className="text-muted text-xs mt-1">
            Pick any opportunity from the list to see your gap analysis and roadmap.
          </p>
        </div>
      </Card>
    );
  }

  const isEligible = selected.status === "eligible";
  const isNear = selected.status === "near-eligible";
  const gaps = selected.missingSkills ?? [];

  return (
    <div className="flex flex-col gap-4">
      {/* Selected opportunity header */}
      <Card className="bg-gradient-to-br from-purple/5 to-purple/0">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-purple mb-1">
              Selected Opportunity
            </p>
            <h3 className="text-navy font-bold text-base leading-snug">
              {selected.title}
            </h3>
            <p className="text-muted text-sm mt-0.5">{selected.organization}</p>
          </div>
          {isEligible && (
            <span className="shrink-0 px-2.5 py-1 rounded-full bg-green/15 text-green-700 text-xs font-semibold">
              Ready to Apply
            </span>
          )}
        </div>

        {isEligible && (
          <div className="mt-4 p-3 rounded-xl bg-green/10 border border-green/20">
            <p className="text-sm font-medium text-green-800">
              You meet all requirements for this opportunity.
            </p>
            <Button variant="primary" size="sm" className="mt-3 bg-green hover:bg-green-600 text-white">
              View Application
            </Button>
          </div>
        )}
      </Card>

      {/* Gap breakdown */}
      {!isEligible && gaps.length > 0 && (
        <Card>
          <CardHeader
            title="Eligibility Gaps"
            subtitle={isNear ? "You are close — a few skills away" : "Skills needed to qualify"}
          />
          <div className="space-y-2">
            {gaps.map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-surface-soft border border-border"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange shrink-0" />
                  <span className="text-navy text-sm font-medium">{skill}</span>
                </div>
                <span className="text-xs text-muted px-2 py-0.5 rounded-md bg-white border border-border">
                  Missing
                </span>
              </div>
            ))}
            {selected.cgpaRequired && (
              <div className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-surface-soft border border-border">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-soft shrink-0" />
                  <span className="text-navy text-sm font-medium">
                    CGPA {selected.cgpaRequired}+ required
                  </span>
                </div>
                <span className="text-xs text-muted px-2 py-0.5 rounded-md bg-white border border-border">
                  CGPA
                </span>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Roadmap */}
      {!isEligible && (
        <Card>
          <CardHeader title="Your Roadmap" subtitle="Steps to become eligible" />
          <div className="space-y-0">
            {[
              ...gaps.map((skill, i) => ({ step: i + 1, action: `Learn ${skill}`, type: "skill" })),
              { step: gaps.length + 1, action: "Build a project demonstrating these skills", type: "project" },
              { step: gaps.length + 2, action: "Update your profile and portfolio", type: "portfolio" },
              { step: gaps.length + 3, action: "Apply with confidence", type: "apply" },
            ].map((item, idx, arr) => (
              <div key={item.step} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                    style={{
                      background: item.type === "apply" ? "#6c4df6" : "#f0ecff",
                      color: item.type === "apply" ? "white" : "#6c4df6",
                    }}
                  >
                    {item.step}
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="w-px flex-1 bg-border my-1" style={{ minHeight: 20 }} />
                  )}
                </div>
                <div className="pb-4">
                  <p className="text-navy text-sm font-medium leading-snug">{item.action}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};
