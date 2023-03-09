import { createClient } from 'next-sanity';

// we addedd token here

export const dataset= process.env.NEXT_PUBLIC_SANITY_DATASET!;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const token = process.env.NEXT_PUBLIC_SANITY_GMR_TOKEN!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export const client = createClient({
  dataset,
  projectId,
  apiVersion,
  useCdn: false,
  token,
});

