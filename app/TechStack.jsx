import React from "react";
import { client } from "../lib/client";

import { SkillAndExperience } from "../components";
async function TechStack() {
  const skillsQuery = '*[_type == "skills"]';
  const experienceQuery = '*[_type == "experiences"]';

  const skillsData = await client.fetch(skillsQuery, { cache: "force-cache" });
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
