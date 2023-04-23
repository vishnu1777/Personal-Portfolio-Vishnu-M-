import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.NEXT_APP_SANITY_PROJECT_ID || "35skr7ua",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skP9KOCiXLkmLxPurjmKb7Ym67uGIytsyOaukOQF8OJ3L3iUfoU59Vlv74eT5bC45jUUq8CiXsLJUBl7Q1YKT7lHy1hSL4yGzvl3klxbsXmEJI8BrURPmJg9tz3aymdyYgabMtTmPdHRokgt8XhtynX9Kv5B5BNWb4zXuJrw2NuWlyAxmz4U",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
