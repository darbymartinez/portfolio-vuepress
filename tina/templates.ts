import type { TinaField } from "tinacms";
export function site_configFields() {
  return [
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
  ] as TinaField[];
}
export function homepageFields() {
  return [
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
  ] as TinaField[];
}
export function journalFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
  ] as TinaField[];
}
export function site_configFields() {
  return [
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
  ] as TinaField[];
}
export function worksFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "image",
      name: "thumbnail",
      label: "Thumbnail",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
      required: true,
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "number",
      name: "year",
      label: "Year",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
  ] as TinaField[];
}
