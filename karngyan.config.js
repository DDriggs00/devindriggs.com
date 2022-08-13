// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Devin Driggs',
  domain: 'devindriggs.com', // add without https:// , used in meta tags and share urls
  image: '/images/bigheadkarngyan.png',
  email: 'contact@devindriggs.com',
  googleAnalyticsV4: {
    enabled: false,
    id: ''
  },
  plausibleAnalytics: {
    enabled: false,
    domain: 'devindriggs.com',
    trackLocalhost: false,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  // see how it looks on karngyan.com
  firebase: {
    enabled: false
  },
  social: {
    github: 'DDriggs00',
    linkedin: 'DDriggs00',
    facebook: 'devin.driggs.148',
    twitter: 'DDriggs00',
    // instagram: 'karngyan.dev',
    // codestats: 'karngyan' // https://codestats.net make a profile if you dont already have one.
  },
  buyMeACoffee: {
    enabled: false,
    url: 'https://www.buymeacoffee.com/karngyan'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: false,
  },
  resume: {
    enabled: true,
    pdfUrl: '/RESUME_DEVIN_DRIGGS.pdf' // add files in static folder
  },
  uses: {
    enabled: false,
    meta: [
      {title: 'OS', value: 'Windows 10/Kubuntu 20.04'},
      {title: 'Memory', value: '16 GB 2667 MHz DDR4'},
      {title: 'Keyboard', value: 'Corsair K95 Platinum (Brown)'},
      {title: 'Mouse', value: 'Logitech G502 Hero'},
      {title: 'Monitor', value: '2x LG 24" 1080p IPS displays'},
      // {title: 'Laptop • Processor • Graphics', value: 'MacBook Pro (16-inch, 2019) • 2.6 GHz 6-Core Intel Core i7 • AMD Radeon Pro 5300M 4 GB + Intel UHD Graphics 630 1536 MB'}
    ]
  },
  workedAt: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      { name: 'Micron', src: '/images/micron.png', url: 'https://www.micron.com/' },
      { name: 'University of Idaho', src: '/images/uidaho.png', url: 'https://www.uidaho.edu/' },
      { name: 'RodeoTV', src: '/images/rodeotv.png', url: 'https://www.rodeotv.net/' },
    ]
  },
  recommendations: {
    enabled: false,
    meta: [
      { name: 'Varun Jain', designation: 'Founder, SendX & SendPost', image: '/images/varun.jpeg', linkedin: 'https://www.linkedin.com/in/varun-jain-582b0215/', content: 'Gyan interned with SendX and SendPost for around 6 months. He is a very strong full-stack engineer who can create pixel perfect frontend while being able to work on backend pieces sending millions of emails per day. He is a quick learner, a great team player and, has a very strong work ethic. You can rely on him that things will be done with utmost quality. He also has pretty good product instincts and can think from the user\'s perspective.' },
      { name: 'Gaurav Sen', designation: 'Founder, InterviewReady', image: '/images/gaurav.jpeg', linkedin: 'https://www.linkedin.com/in/gkcs/', content: 'Karn is an extraordinarily talented, diligent and foresighted individual. He is gifted at building products from paper to code, and has a knack of finding efficient solutions to complex problems. In my experience, I have rarely seen such a mixture of talent and passion put together. At InterviewReady, Karn exceeded our expectations. If you are considering working with him: congratulations, you are going to have a great time!' },
    ]
  },
  loadingIndicator: {
    name: 'pulse'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },
  strings: {
    en_US: {
      download: 'download',
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a beer',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      hero: {
        iBlogTech: 'i blog tech',
        haveALook: 'have a look',
        friendlyNeighborhood: 'Your friendly neighborhood',
        description: 'I am a software engineer, primarily focused on backend applications. I typically work in Python, but have experience with Javascript/typescript, php, C, C++, Java, and kotlin.',
        words: ['developer', 'engineer', 'programmer'],
      },
      githubCalendar: {
        header: 'Contributions',
        subtext: 'GitHub calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'i try to write once in a while. let me know your thoughts in comments or mail@karngyan.com'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'it takes a lot of time to write man'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code and some codestats.net flex'
      },
      projects: {
        header: 'projects',
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read'
      },
      recommendations: {
        header: 'recommendations',
        subtext: 'what do my mentors say'
      }
    }
  }
}
