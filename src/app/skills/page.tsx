import React from "react";
import { Skill, skills as allSkills, SkillType } from "../data/skills/skills";
import { groupSkillsByType } from "@/utils/groupSkills";
import CopyButton from "../components/CopyButton";

export default function SkillsPage() {
  const groupedSkills = groupSkillsByType(allSkills);

  return (
    <div className="text-black">
      <h1>Skills Page</h1>
      {(Object.keys(groupedSkills) as SkillType[]).map((type) => (
        <div key={type}>
          <h2>{type}</h2>
          <div>
            {groupedSkills[type].map((skill) => (
              <CopyButton key={skill.name} text={skill.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
