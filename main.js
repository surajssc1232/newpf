const commands = {
  help: () => `Available commands:
  - about: Display information about me
  - projects: Show my portfolio projects
  - contact: Display contact information
  - clear: Clear the terminal
  - help: Show this help message`,
  
  about: () => `About Me:
  Full-stack developer with expertise in modern web technologies.
  
  Skills:
  - Frontend: JavaScript, React, Vue.js, HTML5, CSS3
  - Backend: Node.js, Python, PostgreSQL
  - Tools: Git, Docker, AWS
  
  Experience:
  - 5+ years of professional development
  - Led multiple successful projects
  - Open source contributor`,
  
  projects: () => `Projects:
  1. E-commerce Platform
     Tech: React, Node.js, PostgreSQL
     Link: https://github.com/username/ecommerce
  
  2. Task Management App
     Tech: Vue.js, Express, MongoDB
     Link: https://github.com/username/task-manager
  
  3. Weather Dashboard
     Tech: React, OpenWeather API
     Link: https://github.com/username/weather-app
  
  4. Portfolio Terminal
     Tech: Vanilla JS, HTML5, CSS3
     Link: https://github.com/username/terminal-portfolio`,
  
  contact: () => `Contact Information:
  Email: your.email@example.com
  GitHub: github.com/username
  LinkedIn: linkedin.com/in/username
  Twitter: @username`,
  
  clear: () => {
    document.getElementById('output').innerHTML = '';
    return '';
  }
};

function initTerminal() {
  const terminal = document.getElementById('terminal');
  const output = document.getElementById('output');
  const input = document.querySelector('.input');
  const timestamp = document.querySelector('.timestamp');
  
  // Set timestamp
  timestamp.textContent = new Date().toLocaleString();
  
  // Handle input
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const command = input.textContent.trim().toLowerCase();
      
      // Create command output
      const commandDiv = document.createElement('div');
      commandDiv.className = 'output-line';
      commandDiv.textContent = `visitor@portfolio:~$ ${command}`;
      output.appendChild(commandDiv);
      
      // Execute command and show response
      if (commands[command]) {
        const responseDiv = document.createElement('div');
        responseDiv.className = 'output-line';
        responseDiv.innerHTML = commands[command]();
        output.appendChild(responseDiv);
      } else if (command !== '') {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'output-line';
        errorDiv.textContent = `Command not found: ${command}. Type 'help' for available commands.`;
        output.appendChild(errorDiv);
      }
      
      // Clear input
      input.textContent = '';
      
      // Scroll to bottom
      terminal.scrollTop = terminal.scrollHeight;
    }
  });
  
  // Focus input on click anywhere in terminal
  terminal.addEventListener('click', () => {
    input.focus();
  });
  
  // Initial focus
  input.focus();
}

// Initialize terminal when DOM is loaded
document.addEventListener('DOMContentLoaded', initTerminal);