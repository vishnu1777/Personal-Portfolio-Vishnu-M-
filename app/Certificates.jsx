import { client } from "../lib/client";
import { Certifications } from "../components";

export const revalidate = 60;

async function Certificates() {
  const certificateQuery = '*[_type == "certificates"]';
  const certificates = await client.fetch(certificateQuery);

  return (
    <div>
      <Certifications certificates={certificates} />
    </div>
  );
}

export default Certificates;
