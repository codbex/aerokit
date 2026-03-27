import { defineConfig } from 'vitepress';

const basePath = '/aerokit/';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Aerokit',
  description: 'TypeScript SDK for the Low-Code Platform',
  base: basePath,
  ignoreDeadLinks: [
    './any',
    './string', 
    './number',
    './boolean',
    './void',
    './unknown',
    './null',
    './undefined',
    './object',
    './symbol',
    './bigint'
  ],
  markdown: {
    config: (md) => {
      // Allow HTML in markdown
      md.set({ html: true });
    }
  },
  themeConfig: {
    outline: {
      level: 'deep'
    },
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo/aerokit-circle.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'SDK', link: '/sdk' },
    ],

    sidebar: [
      {
        "text": "BPM",
        "link": "/sdk/bpm/",
        "collapsed": true,
        "items": [
          {
            "text": "Deployer",
            "link": "/sdk/bpm/deployer"
          },
          {
            "text": "Process",
            "link": "/sdk/bpm/process"
          },
          {
            "text": "Tasks",
            "link": "/sdk/bpm/tasks"
          },
          {
            "text": "Tracer",
            "link": "/sdk/bpm/tracer"
          },
          {
            "text": "Values",
            "link": "/sdk/bpm/values"
          }
        ]
      },
      {
        "text": "CACHE",
        "link": "/sdk/cache/",
        "collapsed": true,
        "items": [
          {
            "text": "Cache",
            "link": "/sdk/cache/cache"
          }
        ]
      },
      {
        "text": "CMS",
        "link": "/sdk/cms/",
        "collapsed": true,
        "items": [
          {
            "text": "Cmis",
            "link": "/sdk/cms/cmis"
          }
        ]
      },
      {
        "text": "COMPONENT",
        "link": "/sdk/component/",
        "collapsed": true,
        "items": [
          {
            "text": "Decorators",
            "link": "/sdk/component/decorators"
          }
        ]
      },
      {
        "text": "CORE",
        "link": "/sdk/core/",
        "collapsed": true,
        "items": [
          {
            "text": "Configurations",
            "link": "/sdk/core/configurations"
          },
          {
            "text": "Context",
            "link": "/sdk/core/context"
          },
          {
            "text": "Env",
            "link": "/sdk/core/env"
          },
          {
            "text": "Globals",
            "link": "/sdk/core/globals"
          }
        ]
      },
      {
        "text": "DB",
        "link": "/sdk/db/",
        "collapsed": true,
        "items": [
          {
            "text": "Dao",
            "link": "/sdk/db/dao"
          },
          {
            "text": "Database",
            "link": "/sdk/db/database"
          },
          {
            "text": "Decorators",
            "link": "/sdk/db/decorators"
          },
          {
            "text": "Insert",
            "link": "/sdk/db/insert"
          },
          {
            "text": "Orm",
            "link": "/sdk/db/orm"
          },
          {
            "text": "Ormstatements",
            "link": "/sdk/db/ormstatements"
          },
          {
            "text": "Procedure",
            "link": "/sdk/db/procedure"
          },
          {
            "text": "Query",
            "link": "/sdk/db/query"
          },
          {
            "text": "Repository",
            "link": "/sdk/db/repository"
          },
          {
            "text": "Sequence",
            "link": "/sdk/db/sequence"
          },
          {
            "text": "Sql",
            "link": "/sdk/db/sql"
          },
          {
            "text": "Store",
            "link": "/sdk/db/store"
          },
          {
            "text": "Translator",
            "link": "/sdk/db/translator"
          },
          {
            "text": "Update",
            "link": "/sdk/db/update"
          }
        ]
      },
      {
        "text": "ERRORS",
        "link": "/sdk/http/errors/",
        "collapsed": true,
        "items": [
          {
            "text": "ForbiddenError",
            "link": "/sdk/http/errors/ForbiddenError"
          },
          {
            "text": "ValidationError",
            "link": "/sdk/http/errors/ValidationError"
          }
        ]
      },
      {
        "text": "ETCD",
        "link": "/sdk/etcd/",
        "collapsed": true,
        "items": [
          {
            "text": "Client",
            "link": "/sdk/etcd/client"
          }
        ]
      },
      {
        "text": "EXTENSIONS",
        "link": "/sdk/extensions/",
        "collapsed": true,
        "items": [
          {
            "text": "Decorators",
            "link": "/sdk/extensions/decorators"
          },
          {
            "text": "Extensions",
            "link": "/sdk/extensions/extensions"
          }
        ]
      },
      {
        "text": "GIT",
        "link": "/sdk/git/",
        "collapsed": true,
        "items": [
          {
            "text": "Client",
            "link": "/sdk/git/client"
          }
        ]
      },
      {
        "text": "HTTP",
        "link": "/sdk/http/",
        "collapsed": true,
        "items": [
          {
            "text": "Client-async",
            "link": "/sdk/http/client-async"
          },
          {
            "text": "Client",
            "link": "/sdk/http/client"
          },
          {
            "text": "Decorators",
            "link": "/sdk/http/decorators"
          },
          {
            "text": "Errors",
            "link": "/sdk/http/errors"
          },
          {
            "text": "Request",
            "link": "/sdk/http/request"
          },
          {
            "text": "Response",
            "link": "/sdk/http/response"
          },
          {
            "text": "Rs",
            "link": "/sdk/http/rs"
          },
          {
            "text": "Session",
            "link": "/sdk/http/session"
          },
          {
            "text": "Upload",
            "link": "/sdk/http/upload"
          },
          {
            "text": "Utils",
            "link": "/sdk/http/utils"
          }
        ]
      },
      {
        "text": "INDEXING",
        "link": "/sdk/indexing/",
        "collapsed": true,
        "items": [
          {
            "text": "Searcher",
            "link": "/sdk/indexing/searcher"
          },
          {
            "text": "Writer",
            "link": "/sdk/indexing/writer"
          }
        ]
      },
      {
        "text": "INTEGRATIONS",
        "link": "/sdk/integrations/",
        "collapsed": true,
        "items": [
          {
            "text": "Integrations",
            "link": "/sdk/integrations/integrations"
          }
        ]
      },
      {
        "text": "IO",
        "link": "/sdk/io/",
        "collapsed": true,
        "items": [
          {
            "text": "Bytes",
            "link": "/sdk/io/bytes"
          },
          {
            "text": "Files",
            "link": "/sdk/io/files"
          },
          {
            "text": "Image",
            "link": "/sdk/io/image"
          },
          {
            "text": "Streams",
            "link": "/sdk/io/streams"
          },
          {
            "text": "Zip",
            "link": "/sdk/io/zip"
          }
        ]
      },
      {
        "text": "JOB",
        "link": "/sdk/job/",
        "collapsed": true,
        "items": [
          {
            "text": "Decorators",
            "link": "/sdk/job/decorators"
          },
          {
            "text": "Scheduler",
            "link": "/sdk/job/scheduler"
          }
        ]
      },
      {
        "text": "JUNIT",
        "link": "/sdk/junit/",
        "collapsed": true,
        "items": [
          {
            "text": "Junit",
            "link": "/sdk/junit/junit"
          }
        ]
      },
      {
        "text": "KAFKA",
        "link": "/sdk/kafka/",
        "collapsed": true,
        "items": [
          {
            "text": "Consumer",
            "link": "/sdk/kafka/consumer"
          },
          {
            "text": "Producer",
            "link": "/sdk/kafka/producer"
          }
        ]
      },
      {
        "text": "LOG",
        "link": "/sdk/log/",
        "collapsed": true,
        "items": [
          {
            "text": "Logging",
            "link": "/sdk/log/logging"
          }
        ]
      },
      {
        "text": "MAIL",
        "link": "/sdk/mail/",
        "collapsed": true,
        "items": [
          {
            "text": "Client",
            "link": "/sdk/mail/client"
          }
        ]
      },
      {
        "text": "MESSAGING",
        "link": "/sdk/messaging/",
        "collapsed": true,
        "items": [
          {
            "text": "Consumer",
            "link": "/sdk/messaging/consumer"
          },
          {
            "text": "Decorators",
            "link": "/sdk/messaging/decorators"
          },
          {
            "text": "Producer",
            "link": "/sdk/messaging/producer"
          }
        ]
      },
      {
        "text": "MONGODB",
        "link": "/sdk/mongodb/",
        "collapsed": true,
        "items": [
          {
            "text": "Client",
            "link": "/sdk/mongodb/client"
          },
          {
            "text": "Dao",
            "link": "/sdk/mongodb/dao"
          }
        ]
      },
      {
        "text": "NET",
        "link": "/sdk/net/",
        "collapsed": true,
        "items": [
          {
            "text": "Decorators",
            "link": "/sdk/net/decorators"
          },
          {
            "text": "Soap",
            "link": "/sdk/net/soap"
          },
          {
            "text": "Websockets",
            "link": "/sdk/net/websockets"
          }
        ]
      },
      {
        "text": "PDF",
        "link": "/sdk/pdf/",
        "collapsed": true,
        "items": [
          {
            "text": "Pdf",
            "link": "/sdk/pdf/pdf"
          }
        ]
      },
      {
        "text": "PLATFORM",
        "link": "/sdk/platform/",
        "collapsed": true,
        "items": [
          {
            "text": "Command",
            "link": "/sdk/platform/command"
          },
          {
            "text": "Engines",
            "link": "/sdk/platform/engines"
          },
          {
            "text": "Lifecycle",
            "link": "/sdk/platform/lifecycle"
          },
          {
            "text": "Os",
            "link": "/sdk/platform/os"
          },
          {
            "text": "Problems",
            "link": "/sdk/platform/problems"
          },
          {
            "text": "Registry",
            "link": "/sdk/platform/registry"
          },
          {
            "text": "Repository",
            "link": "/sdk/platform/repository"
          },
          {
            "text": "Workspace",
            "link": "/sdk/platform/workspace"
          }
        ]
      },
      {
        "text": "QLDB",
        "link": "/sdk/qldb/",
        "collapsed": true,
        "items": [
          {
            "text": "Qldb",
            "link": "/sdk/qldb/qldb"
          }
        ]
      },
      {
        "text": "RABBITMQ",
        "link": "/sdk/rabbitmq/",
        "collapsed": true,
        "items": [
          {
            "text": "Consumer",
            "link": "/sdk/rabbitmq/consumer"
          },
          {
            "text": "Producer",
            "link": "/sdk/rabbitmq/producer"
          }
        ]
      },
      {
        "text": "REDIS",
        "link": "/sdk/redis/",
        "collapsed": true,
        "items": [
          {
            "text": "Client",
            "link": "/sdk/redis/client"
          }
        ]
      },
      {
        "text": "RS",
        "link": "/sdk/http/rs/",
        "collapsed": true,
        "items": [
          {
            "text": "Resource-common",
            "link": "/sdk/http/rs/resource-common"
          },
          {
            "text": "Resource-http-controller",
            "link": "/sdk/http/rs/resource-http-controller"
          },
          {
            "text": "Resource-mappings",
            "link": "/sdk/http/rs/resource-mappings"
          },
          {
            "text": "Resource-method",
            "link": "/sdk/http/rs/resource-method"
          },
          {
            "text": "Resource",
            "link": "/sdk/http/rs/resource"
          }
        ]
      },
      {
        "text": "SECURITY",
        "link": "/sdk/security/",
        "collapsed": true,
        "items": [
          {
            "text": "Decorators",
            "link": "/sdk/security/decorators"
          },
          {
            "text": "Oauth",
            "link": "/sdk/security/oauth"
          },
          {
            "text": "User",
            "link": "/sdk/security/user"
          }
        ]
      },
      {
        "text": "TEMPLATE",
        "link": "/sdk/template/",
        "collapsed": true,
        "items": [
          {
            "text": "Engines",
            "link": "/sdk/template/engines"
          }
        ]
      },
      {
        "text": "UTILS",
        "link": "/sdk/utils/",
        "collapsed": true,
        "items": [
          {
            "text": "Alphanumeric",
            "link": "/sdk/utils/alphanumeric"
          },
          {
            "text": "Base64",
            "link": "/sdk/utils/base64"
          },
          {
            "text": "Converter",
            "link": "/sdk/utils/converter"
          },
          {
            "text": "Digest",
            "link": "/sdk/utils/digest"
          },
          {
            "text": "Escape",
            "link": "/sdk/utils/escape"
          },
          {
            "text": "Hex",
            "link": "/sdk/utils/hex"
          },
          {
            "text": "Jsonpath",
            "link": "/sdk/utils/jsonpath"
          },
          {
            "text": "Qrcode",
            "link": "/sdk/utils/qrcode"
          },
          {
            "text": "Url",
            "link": "/sdk/utils/url"
          },
          {
            "text": "Utf8",
            "link": "/sdk/utils/utf8"
          },
          {
            "text": "Uuid",
            "link": "/sdk/utils/uuid"
          },
          {
            "text": "Xml",
            "link": "/sdk/utils/xml"
          }
        ]
      },
      {
        "text": "WRAPPERS",
        "link": "/sdk/net/wrappers/",
        "collapsed": true,
        "items": [
          {
            "text": "OnClose",
            "link": "/sdk/net/wrappers/onClose"
          },
          {
            "text": "OnError",
            "link": "/sdk/net/wrappers/onError"
          },
          {
            "text": "OnMessage",
            "link": "/sdk/net/wrappers/onMessage"
          },
          {
            "text": "OnOpen",
            "link": "/sdk/net/wrappers/onOpen"
          }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/codbex/aerokit' }],
  },
  head: [
    ['link', { rel: 'icon', href: `${basePath}favicon.ico` }],
    ['script', { src: `${basePath}js/component-container.js`, type: 'module' }],
    ['script', { src: `${basePath}js/svg-icon.js`, type: 'module' }],
    ['link', { href: `${basePath}fonts.css`, rel: 'stylesheet' }],
  ],
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'component-container' || tag === 'svg-icon' || tag.startsWith('a'),
      },
    },
  },
});
