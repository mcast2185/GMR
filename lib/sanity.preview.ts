"use client";

import {definePreview} from "next-sanity/preview";
import { dataset, projectId } from './sanity.client';

function onPublicAccessOnly() {
  throw new Error("Unable to load preview as you have not yet been logged in");
};

if (!projectId || !dataset) {
  throw new Error("Missing one of two from the following: projectId or dataset. Check your Sanity file."); 
};

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly
});

