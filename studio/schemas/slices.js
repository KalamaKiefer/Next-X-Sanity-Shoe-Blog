export default {
  name: "slices",
  title: "Slices",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "richtext",
      title: "rich text",
      type: "localeBlockContent",
    },
    {
      name: "keyText",
      title: "key text",
      type: "text",
    },
    {
      name: "shoes",
      title: "Shoes",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "product" },
        },
      ],
    },
  ],
};
