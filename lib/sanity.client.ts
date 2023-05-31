import { createClient } from 'next-sanity';


export const dataset= process.env.NEXT_PUBLIC_SANITY_DATASET!;
export const projectId = String(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
export const token = process.env.NEXT_PUBLIC_SANITY_GMR_TOKEN!;
const apiVersion = "2022-11-16";

export const client = createClient({
  dataset,
  projectId: projectId,
  apiVersion: apiVersion,
  useCdn: false,
  token,
});

