import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'titleArabic',
      type: 'string',
      title: 'Title (Arabic)',
      description: 'Arabic translation of the title'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Image Caption',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'postType',
      title: 'Post Type',
      type: 'string',
      options: {
        list: [
          {title: 'Breaking News', value: 'breaking'},
          {title: 'News Article', value: 'news'},
          {title: 'Personal Story', value: 'story'},
          {title: 'Testimony', value: 'testimony'},
          {title: 'Analysis', value: 'analysis'},
          {title: 'Opinion', value: 'opinion'},
          {title: 'Memorial', value: 'memorial'}
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'urgency',
      title: 'Urgency Level',
      type: 'string',
      options: {
        list: [
          {title: 'High - Breaking News', value: 'high'},
          {title: 'Medium - Important', value: 'medium'},
          {title: 'Low - Standard', value: 'low'}
        ]
      },
      initialValue: 'low'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Where this story/news is from (e.g., Gaza City, Rafah, West Bank)'
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Brief summary for previews'
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'isBreaking',
      title: 'Breaking News',
      type: 'boolean',
      description: 'Mark as breaking news for ticker display'
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Story',
      type: 'boolean',
      description: 'Show in featured stories section'
    }),
    defineField({
      name: 'readTime',
      title: 'Estimated Read Time',
      type: 'number',
      description: 'Reading time in minutes'
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      title: 'Content'
    }),
    defineField({
      name: 'bodyArabic',
      type: 'blockContent',
      title: 'Content (Arabic)',
      description: 'Arabic translation of the content'
    }),
    defineField({
      name: 'relatedLinks',
      title: 'Related Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'link',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Link Title'
            }),
            defineField({
              name: 'url',
              type: 'url',
              title: 'URL'
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'sources',
      title: 'Sources',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'source',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              title: 'Source Name'
            }),
            defineField({
              name: 'url',
              type: 'url',
              title: 'Source URL'
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({type: 'string', name: 'tag'})],
      options: {
        layout: 'tags'
      }
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      postType: 'postType',
      urgency: 'urgency'
    },
    prepare(selection) {
      const {author, postType, urgency} = selection
      const urgencyIcon = urgency === 'high' ? '🚨' : urgency === 'medium' ? '⚠️' : '📄'
      return {
        ...selection, 
        subtitle: `${urgencyIcon} ${postType?.toUpperCase() || 'POST'} ${author ? `by ${author}` : ''}`
      }
    },
  },
})
