export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'The title of the blog post.',
        },
        {
            name: 'date',
            type: 'date',
            title: 'Publish Date',
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today',
            },
            initialValue: () => new Date().toISOString().split('T')[0],
        },
        {
            name: 'authorImage',
            type: 'image',
            title: 'Author Image',
        },
        {
            name: 'authorName',
            type: 'string',
            title: 'Author Name',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your blog article',
            options: {
                source: 'title',
            }
        },
        {
            name: 'titleImage',
            type: 'image',
            title: 'Title Image',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Heading 1', value: 'h1' },
                        { title: 'Heading 2', value: 'h2' },
                        { title: 'Heading 3', value: 'h3' },
                        { title: 'Heading 4', value: 'h4' },
                        { title: 'Heading 5', value: 'h5' },
                        { title: 'Heading 6', value: 'h6' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Bold', value: 'strong' },
                            { title: 'Italic', value: 'em' },
                            { title: 'Underline', value: 'underline' },
                        ],
                        annotations: [
                            {
                                name: 'sectionLink',
                                title: 'Section Link',
                                type: 'object',
                                fields: [
                                    {
                                        name: 'sectionId',
                                        type: 'string',
                                        title: 'Section ID',
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: 'object',
                    name: 'imageGroup',
                    title: 'Image Group',
                    fields: [
                        {
                            name: 'images',
                            type: 'array',
                            title: 'Images',
                            of: [{ type: 'image' }],
                            options: {
                                hotspot: true,
                            },
                        },
                        {
                            name: 'layout',
                            type: 'string',
                            title: 'Layout',
                            options: {
                                list: [
                                    { title: 'Grid', value: 'grid' },
                                    { title: 'Block', value: 'block' },
                                ],
                                layout: 'radio',
                            },
                        },
                    ],
                },
                {
                    type: 'object',
                    name: 'table',
                    title: 'Table',
                    fields: [
                        {
                            name: 'rows',
                            title: 'Rows',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    name: 'row',
                                    title: 'Row',
                                    fields: [
                                        {
                                            name: 'columns',
                                            title: 'Columns',
                                            type: 'array',
                                            of: [{ type: 'string' }]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
