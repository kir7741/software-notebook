import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/software-notebook/',
    component: ComponentCreator('/software-notebook/', '038'),
    exact: true
  },
  {
    path: '/software-notebook/__docusaurus/debug',
    component: ComponentCreator('/software-notebook/__docusaurus/debug', 'b8f'),
    exact: true
  },
  {
    path: '/software-notebook/__docusaurus/debug/config',
    component: ComponentCreator('/software-notebook/__docusaurus/debug/config', '83f'),
    exact: true
  },
  {
    path: '/software-notebook/__docusaurus/debug/content',
    component: ComponentCreator('/software-notebook/__docusaurus/debug/content', '9b5'),
    exact: true
  },
  {
    path: '/software-notebook/__docusaurus/debug/globalData',
    component: ComponentCreator('/software-notebook/__docusaurus/debug/globalData', '942'),
    exact: true
  },
  {
    path: '/software-notebook/__docusaurus/debug/metadata',
    component: ComponentCreator('/software-notebook/__docusaurus/debug/metadata', '453'),
    exact: true
  },
  {
    path: '/software-notebook/__docusaurus/debug/registry',
    component: ComponentCreator('/software-notebook/__docusaurus/debug/registry', 'bd2'),
    exact: true
  },
  {
    path: '/software-notebook/__docusaurus/debug/routes',
    component: ComponentCreator('/software-notebook/__docusaurus/debug/routes', '594'),
    exact: true
  },
  {
    path: '/software-notebook/blog',
    component: ComponentCreator('/software-notebook/blog', 'da9'),
    exact: true
  },
  {
    path: '/software-notebook/blog/archive',
    component: ComponentCreator('/software-notebook/blog/archive', 'ce9'),
    exact: true
  },
  {
    path: '/software-notebook/blog/first-blog-post',
    component: ComponentCreator('/software-notebook/blog/first-blog-post', '1ab'),
    exact: true
  },
  {
    path: '/software-notebook/blog/long-blog-post',
    component: ComponentCreator('/software-notebook/blog/long-blog-post', 'd2d'),
    exact: true
  },
  {
    path: '/software-notebook/blog/mdx-blog-post',
    component: ComponentCreator('/software-notebook/blog/mdx-blog-post', '0fa'),
    exact: true
  },
  {
    path: '/software-notebook/blog/tags',
    component: ComponentCreator('/software-notebook/blog/tags', 'e8a'),
    exact: true
  },
  {
    path: '/software-notebook/blog/tags/docusaurus',
    component: ComponentCreator('/software-notebook/blog/tags/docusaurus', '8aa'),
    exact: true
  },
  {
    path: '/software-notebook/blog/tags/facebook',
    component: ComponentCreator('/software-notebook/blog/tags/facebook', 'cad'),
    exact: true
  },
  {
    path: '/software-notebook/blog/tags/hello',
    component: ComponentCreator('/software-notebook/blog/tags/hello', '2b4'),
    exact: true
  },
  {
    path: '/software-notebook/blog/tags/hola',
    component: ComponentCreator('/software-notebook/blog/tags/hola', '6a7'),
    exact: true
  },
  {
    path: '/software-notebook/blog/welcome',
    component: ComponentCreator('/software-notebook/blog/welcome', 'd23'),
    exact: true
  },
  {
    path: '/software-notebook/markdown-page',
    component: ComponentCreator('/software-notebook/markdown-page', 'e24'),
    exact: true
  },
  {
    path: '/software-notebook/docs',
    component: ComponentCreator('/software-notebook/docs', 'a51'),
    routes: [
      {
        path: '/software-notebook/docs',
        component: ComponentCreator('/software-notebook/docs', '118'),
        routes: [
          {
            path: '/software-notebook/docs/tags',
            component: ComponentCreator('/software-notebook/docs/tags', '156'),
            exact: true
          },
          {
            path: '/software-notebook/docs/tags/css-reflow',
            component: ComponentCreator('/software-notebook/docs/tags/css-reflow', 'da5'),
            exact: true
          },
          {
            path: '/software-notebook/docs/tags/database',
            component: ComponentCreator('/software-notebook/docs/tags/database', '016'),
            exact: true
          },
          {
            path: '/software-notebook/docs/tags/design-pattern',
            component: ComponentCreator('/software-notebook/docs/tags/design-pattern', '5b2'),
            exact: true
          },
          {
            path: '/software-notebook/docs/tags/dns',
            component: ComponentCreator('/software-notebook/docs/tags/dns', '1f5'),
            exact: true
          },
          {
            path: '/software-notebook/docs/tags/dotenv',
            component: ComponentCreator('/software-notebook/docs/tags/dotenv', '8a7'),
            exact: true
          },
          {
            path: '/software-notebook/docs/tags/env',
            component: ComponentCreator('/software-notebook/docs/tags/env', 'e44'),
            exact: true
          },
          {
            path: '/software-notebook/docs/tags/godotenv',
            component: ComponentCreator('/software-notebook/docs/tags/godotenv', 'a2d'),
            exact: true
          },
          {
            path: '/software-notebook/docs/tags/gorm',
            component: ComponentCreator('/software-notebook/docs/tags/gorm', 'd97'),
            exact: true
          },
          {
            path: '/software-notebook/docs/tags/html',
            component: ComponentCreator('/software-notebook/docs/tags/html', '545'),
            exact: true
          },
          {
            path: '/software-notebook/docs/tags/java-script',
            component: ComponentCreator('/software-notebook/docs/tags/java-script', '381'),
            exact: true
          },
          {
            path: '/software-notebook/docs/tags/mvc',
            component: ComponentCreator('/software-notebook/docs/tags/mvc', '203'),
            exact: true
          },
          {
            path: '/software-notebook/docs/tags/mvvm',
            component: ComponentCreator('/software-notebook/docs/tags/mvvm', '5d1'),
            exact: true
          },
          {
            path: '/software-notebook/docs',
            component: ComponentCreator('/software-notebook/docs', 'aa5'),
            routes: [
              {
                path: '/software-notebook/docs/category/database',
                component: ComponentCreator('/software-notebook/docs/category/database', '109'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/category/golang',
                component: ComponentCreator('/software-notebook/docs/category/golang', 'f07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/category/gorm',
                component: ComponentCreator('/software-notebook/docs/category/gorm', 'ebb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/category/javascript',
                component: ComponentCreator('/software-notebook/docs/category/javascript', '72b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/category/postgresql',
                component: ComponentCreator('/software-notebook/docs/category/postgresql', '64c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/category/program-concepts',
                component: ComponentCreator('/software-notebook/docs/category/program-concepts', '8cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/category/tutorial---basics',
                component: ComponentCreator('/software-notebook/docs/category/tutorial---basics', 'efe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/category/tutorial---extras',
                component: ComponentCreator('/software-notebook/docs/category/tutorial---extras', '0e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/database/postgresql/postgresql-install',
                component: ComponentCreator('/software-notebook/docs/database/postgresql/postgresql-install', '7f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/golang/environment-variable',
                component: ComponentCreator('/software-notebook/docs/golang/environment-variable', '835'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/golang/gorm/gorm-install',
                component: ComponentCreator('/software-notebook/docs/golang/gorm/gorm-install', '268'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/intro',
                component: ComponentCreator('/software-notebook/docs/intro', 'bd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/javascript/set',
                component: ComponentCreator('/software-notebook/docs/javascript/set', 'f98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/program-concept/browser-render-flow',
                component: ComponentCreator('/software-notebook/docs/program-concept/browser-render-flow', '028'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/program-concept/mvc-vs-mvp',
                component: ComponentCreator('/software-notebook/docs/program-concept/mvc-vs-mvp', 'cbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/software-notebook/docs/tutorial-basics/congratulations', 'c61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/software-notebook/docs/tutorial-basics/create-a-blog-post', 'c7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/software-notebook/docs/tutorial-basics/create-a-document', '99d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/software-notebook/docs/tutorial-basics/create-a-page', '2b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/software-notebook/docs/tutorial-basics/deploy-your-site', '22e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/software-notebook/docs/tutorial-basics/markdown-features', '29b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/software-notebook/docs/tutorial-extras/manage-docs-versions', '0ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/software-notebook/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/software-notebook/docs/tutorial-extras/translate-your-site', '8e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
