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
      bio: 'Senior Software Engineer passionate about creating elegant solutions to complex problems.',
      skills: [
        { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
        { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'GraphQL'] },
        { category: 'DevOps', items: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'] }
      ],
      experience: [
        'Tech Lead at Innovation Labs (2021-Present)',
        'Senior Developer at TechCorp (2019-2021)',
        'Full-stack Developer at StartupX (2017-2019)'
      ]
    }
  }),
  
  projects: () => ({
    type: 'projects',
    content: [
      {
        name: 'AI-Powered Analytics Platform',
        tech: ['React', 'Python', 'TensorFlow', 'AWS'],
        desc: 'Enterprise-scale analytics with machine learning capabilities',
        link: 'https://github.com/username/ai-analytics'
      },
      {
        name: 'Blockchain Exchange Platform',
        tech: ['Next.js', 'Solidity', 'Node.js', 'PostgreSQL'],
        desc: 'Decentralized cryptocurrency exchange platform',
        link: 'https://github.com/username/dex-platform'
      },
      {
        name: 'Real-time Collaboration Tool',
        tech: ['Vue.js', 'WebSocket', 'Redis', 'MongoDB'],
        desc: 'Team collaboration tool with real-time updates',
        link: 'https://github.com/username/collab-tool'
      }
    ]
  }),
  
  contact: () => ({
    type: 'contact',
    content: {
      email: 'dev@example.com',
      social: [
        { platform: 'GitHub', url: 'github.com/username', icon: '󰊤' },
        { platform: 'LinkedIn', url: 'linkedin.com/in/username', icon: '󰌻' },
        { platform: 'Twitter', url: 'twitter.com/username', icon: '󰕄' }
      ]
    }
  }),
  
  clear: () => ({
    type: 'clear'
  })
};