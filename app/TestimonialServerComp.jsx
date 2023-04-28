import { client } from "../lib/client";
import { TestimonialWrapper } from "../components";
export const revalidate = 60;
async function TestimonialServerComp() {
  const testimonyQuery = '*[_type == "testimonials"]';
  const testimony = await client.fetch(testimonyQuery, {
    next: { revalidate: 60 },
  });
  return (
    <div>
      <TestimonialWrapper testimony={testimony} />
    </div>
  );
}

export default TestimonialServerComp;
