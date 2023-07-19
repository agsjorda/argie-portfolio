import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Role'
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'backgroundInformation',
      type: 'string',
      title: 'BackgroundInformation',
    }),
    defineField({
      name: 'profilePic',
      type: 'image',
      title: 'ProfilePic',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'phoneNumber',
      type: 'string',
      title: 'PhoneNumber',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address',
    }),
    defineField({
      name: 'socials',
      type: 'array',
      title: 'Socials',
      of: [{type: "reference", to:{type: "social"}}],
    })
  ],
})
