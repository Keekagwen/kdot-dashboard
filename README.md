# KDOT Pittsburg Construction Internal Site

A VS Code-ready React/Vite website mockup for an internal KDOT Pittsburg Construction office portal.

## Open in Visual Studio Code

1. Download and unzip this folder.
2. Open VS Code.
3. Go to **File > Open Folder** and select `kdot-pittsburg-construction-site`.
4. Open the VS Code terminal: **Terminal > New Terminal**.
5. Run:

```bash
npm install
npm run dev
```

6. Open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Edit site content

Most content is in:

```text
src/main.jsx
```

The design/theme is in:

```text
src/styles.css
```

## Build for deployment

```bash
npm run build
```

The production-ready files will be generated in the `dist` folder.

## Notes

- Links currently use `#` placeholders.
- Replace placeholder phone numbers, project data, staff names, and document links with official office information.
- For Power Pages, use this design as a prototype and recreate the data-backed parts using Dataverse lists/forms and Power BI embeds.
