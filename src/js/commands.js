export const commands = {
  help: () => ({
    type: 'list',
    content: [
      { command: 'about', desc: 'Display information about me' },
      { command: 'projects', desc: 'Show my portfolio projects' },
      { command: 'contact', desc: 'Display contact information' },
      { command: 'clear', desc: 'Clear the terminal' },
      { command: 'help', desc: 'Show this help message' }
    ]
  }),
  
  about: () => ({
    type: 'profile',
    content: {
      bio: 'Hello I am Suraj chauhan an aspiring Backend Dev skilled in JAVA <3 and Springboot and A little bit of python',
      skills: [
        { category: 'Frontend', items: ['HTML5',  'CSS3'] },
        { category: 'Backend', items: ['Python', 'PostgreSQL', 'Java','SpringBoot'] },
        { category: 'DevOps', items: ['Docker', 'CI/CD'] }
      ],
      
    }
  }),
  
  projects: () => ({
    type: 'projects',
    content: [
      {
        name: 'Tune Merge',
        tech: ['SpringBoot', 'Java','H2Database','WebAPI'],
        desc: 'A cross platform playlist export servict',
        link: 'https://github.com/surajssc1232/tunemerge'
      },
      {
        name: 'RoyalAi',
        tech: ['Python',  'Flask', 'PostgreSQL','Cohere'],
        desc: 'A Fine tuned Chat bot using Cohere LLM',
        link: 'https://github.com/surajssc1232/royalai'
      },
      {
        name: 'Weather Dashboard',
        tech: ['H2Database', 'SpringBoot','Java'],
        desc: 'A realtime and Dynamic Weather DashBoard for metro cities in India',
        link: 'https://github.com/surajssc1232/weather_dashboard'
      }
    ]
  }),
  
  contact: () => ({
    type: 'contact',
    content: {
      email: 'dev@example.com',
      social: [
        { platform: 'GitHub', url: 'github.com/surajssc1232', icon: '󰊤' },
        { platform: 'LinkedIn', url: 'linkedin.com/in/username', icon: '󰌻' },
        { platform: 'Twitter', url: 'twitter.com/surajkhahai', icon: '󰕄' }
      ]
    }
  }),
  
  clear: () => ({
    type: 'clear'
  })
};