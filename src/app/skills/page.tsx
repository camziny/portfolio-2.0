import React from "react";
import { Skill, skills as allSkills, SkillType } from "../data/skills/skills";
import { groupSkillsByType } from "@/utils/groupSkills";
import CopyButton from "../components/CopyButton";

export default function SkillsPage() {
  const groupedSkills = groupSkillsByType(allSkills);

  return (
    <div>
      <div className="text-black flex flex-wrap justify-center dark:text-gray-200">
        {(Object.keys(groupedSkills) as SkillType[]).map((type) => (
          <div
            key={type}
            className="bg-white shadow-lg rounded-lg m-4 p-4 w-full sm:w-1/2 lg:w-1/3 dark:bg-gray-800"
          >
            <h2 className="text-center font-bold text-lg mb-4">{type}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
              {groupedSkills[type].map((skill) => (
                <CopyButton key={skill.name} text={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
