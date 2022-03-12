import fs from "fs";
import pathlib from "path";

/**
 *
 * @param {string} name
 * @param {Partial<{
 *  $schema: string,
 *  name: string,
 *  type: 'light' | 'dark' | 'hc',
 *  colors: import("./types").WorkbenchColors,
 *  semanticHighlighting: boolean,
 *  semanticTokenColors: any,
 *  tokenColors: any,
 * }>} schema
 */
export default function defineTheme(name, schema) {
  schema = {
    $schema:
      "https://raw.githubusercontent.com/wraith13/vscode-schemas/master/en/v1.47.3/schemas/color-theme.json",
    ...schema,
  };

  const path = pathlib.join(process.cwd(), "themes", `${name}.json`);

  fs.writeFileSync(path, JSON.stringify(schema), "utf-8");
}
