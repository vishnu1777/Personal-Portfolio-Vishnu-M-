import { client } from "../lib/client";
import { groq } from "next-sanity";
import { Works } from "../components";
export const revalidate = 60;
async function Projects() {
  const query = groq`*[_type == "works"]`;

  const filterWork = await client.fetch(query);

  return (
    <div>
      <Works filterWork={filterWork} />
    </div>
  );
}

export default Projects;
