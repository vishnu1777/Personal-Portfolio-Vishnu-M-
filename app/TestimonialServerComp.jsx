import { client } from "../lib/client";
import { TestimonialWrapper } from "../components";
async function TestimonialServerComp() {
  const testimonyQuery = '*[_type == "testimonials"]';
  const testimony = await client.fetch(testimonyQuery, {
    cache: "force-cache",
  });
  return (
    <div>
      <TestimonialWrapper testimony={testimony} />
    </div>
  );
}

export default TestimonialServerComp;
