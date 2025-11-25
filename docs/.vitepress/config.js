export default {
  title: 'Documentação XML Chaves Na Mão',
  description: 'Nossa incrível documentação de integração.',
  lang: 'pt-BR',
  base: '/xml-documentation/',
  head: [
    ['link', { rel: 'icon', href: 'https://cdn.chavesnamao.com.br/common/logos/favicon.ico' }],
    ['style', {}, `
      :root {
        --vp-c-brand-1: #dc2626;
        --vp-c-brand-2: #ef4444;
        --vp-c-brand-3: #f87171;
        --vp-c-brand-soft: rgba(220, 38, 38, 0.14);
      }
      .dark {
        --vp-c-brand-1: #f87171;
        --vp-c-brand-2: #ef4444;
        --vp-c-brand-3: #dc2626;
        --vp-c-brand-soft: rgba(248, 113, 113, 0.16);
      }
    `]
  ],
  
  themeConfig: {
    logo: {
      light: '/logo-cnm-red.png',
      dark: '/logo-cnm-w.png'
    },
    siteTitle: false,
    
    nav: [
      {
        text: 'Atualizações',
        items: [
          { text: 'v0.0.1', link: '/versoes/v0.0.1' }
        ]
      }
    ],

    sidebar: {
      '/': [
        {
          text: 'Início',
          collapsed: false,
          items: [
            { text: 'Introdução', link: '/introducao/introducao' }
          ]
        },
        {
          text: 'Arquivo XML',
          collapsed: false,
          items: [
            { text: 'Detalhes do XML', link: '/arquivo/' },
            { text: 'Estrutura Arquivo XML', link: '/arquivo/estrutura' }
          ]
        },
        {
          text: 'Tags',
          collapsed: false,
          items: [
            { text: 'Encoding', link: '/arquivo/encoding' },
            { text: 'Document', link: '/arquivo/document' },
            { text: 'Imóveis', link: '/arquivo/imoveis' },
            { text: 'Imóvel', link: '/arquivo/imovel' },
            { text: 'Especificações das Tags', link: '/arquivo/especificacoes/especificacoes-tags' },
            { text: 'Tag de Fotos', link: '/arquivo/especificacoes/especificacoes-fotos' },
            { text: 'Tag Área Comum', link: '/arquivo/especificacoes/especificacoes-area-comum' },
            { text: 'Tag Área Privativa', link: '/arquivo/especificacoes/especificacoes-area-privativa' }
          ]
        },
        {
          text: 'Dados Suportados',
          collapsed: false,
          items: [
            { text: 'Imóveis Suportados', link: '/arquivo/dados-suportados/imoveis-suportados' },
            { text: 'Residencial', link: '/arquivo/dados-suportados/residencial' },
            { text: 'Comercial', link: '/arquivo/dados-suportados/comercial' },
            { text: 'Estados Suportados', link: '/arquivo/dados-suportados/estados-suportados' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/ChavesNaMao' },
      { icon: 'youtube', link: 'https://www.youtube.com/ChavesNaMao' },
      { icon: 'instagram', link: 'https://www.instagram.com/chavesnamao/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/chavesnamao/' }
    ]
  }
}
