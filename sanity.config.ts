import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash';

import myTheme from './theme';
import StudioNavbar from "./components/studioNavbar";
import Logo from "./components/logo";
import {schemaTypes} from "./schemas/schema";
import {getDefaultDocumentNode} from './structure';

const dataset= process.env.NEXT_PUBLIC_SANITY_DATASET!;
const projectId = String(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);


export default defineConfig({
  basePath: "/studio",
  name: 'GMRseat',
  title: 'GMRseat',
  projectId: projectId,
  dataset,
  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode
  }), visionTool(), unsplashImageAsset()],

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