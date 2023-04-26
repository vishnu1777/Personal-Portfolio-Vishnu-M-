import { client } from "../lib/client";
import { groq } from "next-sanity";

import { Works } from "../components";

async function Projects() {
  const query = groq`*[_type == "works"]`;

  const filterWork = await client.fetch(query, { cache: "force-cache" });

  return (
    <div id="works">
      <Works filterWork={filterWork} />
    </div>
  );
}

export default Projects;
