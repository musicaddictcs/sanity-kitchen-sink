export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '609bc42c123520079cc484fc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3nxadfpn',
                  apiId: '454d97a9-8a5b-4846-a4a5-49718f8688b3'
                },
                {
                  buildHookId: '609bc42d139b51309fa1b3e9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gmocasvb',
                  apiId: 'c7882bc2-cac7-4b7e-92f5-5fe52320a7f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/musicaddictcs/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gmocasvb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
