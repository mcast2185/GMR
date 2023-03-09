import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';

import {schemaTypes} from "./schemas/schema";
import myTheme from './theme';
import StudioNavbar from "./components/studioNavbar";
import Logo from "./components/logo";
import {getDefaultDocumentNode} from './structure';



const dataset= process.env.NEXT_PUBLIC_SANITY_DATASET!;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;

export default defineConfig({
  basePath: "/studio",
  name: 'GMRseat',
  title: 'GMRseat',
  projectId,
  dataset,
  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
