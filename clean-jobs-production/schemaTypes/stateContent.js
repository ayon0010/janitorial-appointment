export default {
    name: 'State',
    type: 'document',
    title: 'State Content',
    fields: [
        {
            name: 'slug',
            type: 'string',
            title: 'slug',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'p' },
                        { title: 'Heading 1', value: 'h1' },
                        { title: 'Heading 2', value: 'h2' },
                        { title: 'Heading 3', value: 'h3' },
                        { title: 'Heading 4', value: 'h4' },
                        { title: 'Heading 5', value: 'h5' },
                        { title: 'Heading 6', value: 'h6' }, // Adding Heading 6
                    ],
                    marks: {
                        // Here, you can define custom inline styles
                        decorators: [
                            { title: 'Bold', value: 'strong' },
                            { title: 'Italic', value: 'em' },
                            { title: 'Underline', value: 'underline' },
                            // Add more custom styles as needed
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
                                layout: 'radio', // Use radio buttons for selection
                            },
                        },
                    ],
                },
            ],
        },
    ]
}
