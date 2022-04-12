import { AiOutlineStar } from 'react-icons/ai'

export default {
  name: 'featuredProjects',
  title: 'Featued Projects',
  type: 'document',
  icon: AiOutlineStar,
  fieldsets: [
    {
      name: 'featuredProjects',
      title: 'Featured Projects',
      description: 'Projects featured on the Homepage'
    }
  ],
  fields: [
    {
      name: 'collection',
      title: 'Collection',
      type: 'string',
      initialValue: 'Projects',
      readOnly: true,
      hidden: true
    },
    {
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{
          type: 'project'
        }]
      }]
    }
  ]
}