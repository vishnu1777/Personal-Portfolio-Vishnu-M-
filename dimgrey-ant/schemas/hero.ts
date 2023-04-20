export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'companyName',
      title: 'CompanyName',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'ProfileImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
