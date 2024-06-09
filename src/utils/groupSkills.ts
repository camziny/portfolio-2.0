import { Skill, SkillType } from "../app/data/skills/skills";

export const groupSkillsByType = (
  skills: Skill[]
): Record<SkillType, Skill[]> => {
  return skills.reduce((acc: Record<SkillType, Skill[]>, skill: Skill) => {
    if (!acc[skill.type]) {
      acc[skill.type] = [];
    }
    acc[skill.type].push(skill);
    return acc;
  }, {} as Record<SkillType, Skill[]>);
};
