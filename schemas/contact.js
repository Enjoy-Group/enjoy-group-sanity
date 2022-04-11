import { AiOutlineContacts } from 'react-icons/ai'

export default {
  name: 'contactDetails',
  title: 'Contact',
  type: 'document',
  icon: AiOutlineContacts,
  fieldsets: [
    {
      name: 'contactInformation',
      title: 'Contact Information',
      description: 'Contact information displayed on the website'
    }
  ],
  fields: [
    {
      name: 'collection',
      title: 'Collection',
      type: 'string',
      initialValue: 'Contact Information',
      hidden: true,
      readOnly: true

    },
    {
      name: 'contactNumber',
      title: 'Contact Number',
      type: 'string',
      fieldset: 'contactInformation'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      fieldset: 'contactInformation'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      fieldset: 'contactInformation'
    }
  ]
}