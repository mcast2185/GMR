import { buildLegacyTheme, StudioTheme } from "sanity";


const props = {
  "--my-white": "#fff",
  "--my-black": "#000000",
  "--my-Gold": "#F7AB0A",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
};

const myTheme: StudioTheme = buildLegacyTheme({

  "--black": props["--my-black"],
  "--white": props["--my-white"],
  
  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],


  "--brand-primary": props["--my-Gold"],


  "--default-button-primary-color": props["--my-Gold"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],


  "--state-info-color": props["--my-Gold"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],


  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--my-Gold"],
});

export default myTheme;