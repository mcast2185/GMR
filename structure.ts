import Iframe from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";


export const getDefaultDocumentNode: DefaultDocumentNodeResolver = ( 

  S, { schemaType } ) => {
    if (schemaType === "post") {
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `${ "https://gmrseat.com"}/api/preview`,
            defaultSize: `desktop`,
            reload: {
              button: true,
            },
            attribute: {},
          })
        .title("preview"),
      ]);
    };
};