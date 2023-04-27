import React from "react";
import { client } from "../lib/client";
import { SkillAndExperience } from "../components";
export const revalidate = 60;
async function TechStack() {
  const skillsQuery = '*[_type == "skills"]';
  const experienceQuery = '*[_type == "experiences"]';

  const skillsData = await client.fetch(skillsQuery);
  const experienceData = await client.fetch(experienceQuery, {
    cache: "force-cache",
  });

  return (
    <div>
      <SkillAndExperience skills={skillsData} experience={experienceData} />
    </div>
  );
}

export default TechStack;
