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
                  buildHookId: '5fa69ee8f8b3ba0fcd702ef9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xp992j5m',
                  apiId: 'f055d9a7-df67-470f-9509-d1f0706a5258'
                },
                {
                  buildHookId: '5fa69ee8e9ded32ec55743b3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-318evb87',
                  apiId: '84a483f1-ade4-4207-99fc-d0ce0ea83d9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KleytonLeite/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-318evb87.netlify.app', category: 'apps'}
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
