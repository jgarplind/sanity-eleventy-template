export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60e0e37f17a27647fe288316',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-template-studio',
                  apiId: '9000fbf5-958b-42a0-8e40-e3b2586a178c'
                },
                {
                  buildHookId: '60e0e37f3a6af3dffeaa10e5',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-template',
                  apiId: '29857263-e135-4e93-9209-e33fa9b5e040'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jgarplind/sanity-eleventy-template',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-template.netlify.app', category: 'apps'}
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
