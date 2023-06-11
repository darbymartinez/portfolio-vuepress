import { defineConfig } from "tinacms";
import { site_configFields } from "./templates";
import { homepageFields } from "./templates";
import { journalFields } from "./templates";
import { site_configFields } from "./templates";
import { worksFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "d75bcff7-1edb-4792-9b6a-d82a20815b31", // Get this from tina.io
  token: "cabb49a1d89cb37d7850ae590285aaf7195aef01", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Homepage",
        name: "homepage",
        path: "portfolio",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "title",
          },
          {
            type: "string",
            name: "hero_text",
            label: "Hero text",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        format: "md",
        label: "Works",
        name: "works",
        path: "portfolio/works",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...worksFields(),
        ],
      },
      {
        format: "md",
        label: "Writing Samples",
        name: "writing_samples",
        path: "portfolio/journal",
        match: {
          include: "**/[!index]*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...journalFields(),
        ],
      },
      {
        format: "json",
        label: "Site Config",
        name: "site_config",
        path: "portfolio",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "config",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "image",
            name: "logo",
            label: "Logo",
          },
          {
            type: "string",
            name: "footer",
            label: "Footer",
          },
          {
            type: "image",
            name: "favicon",
            label: "Favicon",
          },
          {
            type: "object",
            name: "navigation",
            label: "Navigation",
            list: true,
            fields: [
              {
                type: "string",
                name: "text",
                label: "Text",
              },
              {
                type: "string",
                name: "link",
                label: "Link",
              },
              {
                type: "string",
                name: "position",
                label: "Position",
                options: ["left", "right"],
              },
              {
                type: "boolean",
                name: "external",
                label: "External",
              },
            ],
          },
        ],
      },
    ],
  },
});
