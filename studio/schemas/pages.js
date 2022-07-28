export default {
  name: "pages",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "page",
      title: "Page Name",
      type: "string",
    },
    {
      name: "slices",
      title: "Slice",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "slices" },
        },
      ],
    },
  ],
};
