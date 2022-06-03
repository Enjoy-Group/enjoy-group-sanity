import { BsSearch } from 'react-icons/bs'

export default {
  name: 'seo',
  title: 'SEO',
  type: 'document',
  icon: BsSearch,
  fieldsets: [
    {
      name: 'pageInformation',
      title: 'Page Information'
    }
  ],
  fields: [
    {
      name: 'page',
      title: 'Page',
      type: 'string',
      hidden: true
    
    },
    {
      name: 'title',
      ttile: 'Title',
      type: 'string',
      fieldset: 'pageInformation'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      fieldset: 'pageInformation'
    }
  ],
  preview: {
    select: {
      title: 'page'
    }
  }
}