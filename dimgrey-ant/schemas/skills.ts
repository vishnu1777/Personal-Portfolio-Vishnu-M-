export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  liveEdit: true,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'Progress of skill from 0 to 100%',
      validation: (Rule: any) => Rule.min(0).max(100),
    },
    {
      name: 'bgColor',
      title: 'BgColor',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
