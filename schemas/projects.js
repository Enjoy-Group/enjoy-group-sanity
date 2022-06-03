import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  icon: AiOutlineFundProjectionScreen,
  fieldsets: [
    {
      name: 'projectInfo',
      title: 'Project Information'
    }
  ],
  fields: [
    {
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      description: 'The name of your project',
      fieldset: 'projectInfo'

    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      fieldset: 'projectInfo',
      options: {
        source: 'projectName'
      }
    },
    {
      name: 'projectDescription',
      title: 'Project Description',
      type: 'text',
      description: 'A short description of the project',
      fieldset: 'projectInfo'
    },
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'An image assocaited with the project',
      fieldset: 'projectInfo'
    },
    {
      name: 'clientLogo',
      title: 'Client Logo',
      description: 'Logo of the client related to the project',
      type: 'image',
      options: {
        hotspot: true
      },
      fieldset: 'projectInfo'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string'
        }
      ]
    }
  ]
}