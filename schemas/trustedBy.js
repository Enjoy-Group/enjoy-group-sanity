import { BsPeople } from 'react-icons/bs'

export default {
  name: 'trustedBy',
  title: 'Trused By',
  type: 'document',
  icon: BsPeople,
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'Name of the company'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Logo of the company (Please upload a .webp file for optimal performance)'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'A link to a website repesenting the company'
    },
  ]
}