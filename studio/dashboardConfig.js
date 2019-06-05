export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5cf731f6ab6fd6e91fe7287e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gs3bmqte',
                  apiId: '90e673e3-72fd-4d6a-9f82-e39eb548f4da'
                },
                {
                  buildHookId: '5cf731f6d6e0efc716871a1f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-cmmiw1s7',
                  apiId: 'ed1d8d3c-f444-45b1-83f8-2fc56a8bc91e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/emarketed/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-cmmiw1s7.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
