import { AiOutlineTag } from 'react-icons/ai'

export default {
  name: 'tags',
  title: 'Tags',
  type: 'document',
  icon: AiOutlineTag,
  fields: [
    {
      name: 'tag',
      titile: 'Tag',
      type: 'string',
      description: 'The name of the category (all characters in lowercase)',
      validation: Rule => Rule.lowercase()
    }
  ]
}