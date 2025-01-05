export class TerminalRenderer {
  static renderOutput(response) {
    switch (response.type) {
      case 'list':
        return this.renderList(response.content);
      case 'profile':
        return this.renderProfile(response.content);
      case 'projects':
        return this.renderProjects(response.content);
      case 'contact':
        return this.renderContact(response.content);
      default:
        return '';
    }
  }

  static renderList(items) {
    return `<div class="command-list">
      ${items.map(item => `
        <div class="command-item">
          <span class="command-name">${item.command}</span>
          <span class="command-desc">${item.desc}</span>
        </div>
      `).join('')}
    </div>`;
  }

  static renderProfile(profile) {
    return `
      <div class="profile">
        <p class="bio">${profile.bio}</p>
        
        <div class="skills-grid">
          ${profile.skills.map(category => `
            <div class="skill-category">
              <h3>${category.category}</h3>
              <div class="skill-items">
                ${category.items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="experience">
          <h3>Experience</h3>
          ${profile.experience.map(exp => `<div class="experience-item">${exp}</div>`).join('')}
        </div>
      </div>
    `;
  }

  static renderProjects(projects) {
    return `
      <div class="projects-grid">
        ${projects.map(project => `
          <div class="project-card">
            <h3>${project.name}</h3>
            <p>${project.desc}</p>
            <div class="tech-stack">
              ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" target="_blank" class="project-link">View Project 󰁔</a>
          </div>
        `).join('')}
      </div>
    `;
  }

  static renderContact(contact) {
    return `
      <div class="contact-info">
        <div class="email">
          <span class="icon">󰇮</span>
          <a href="mailto:${contact.email}">${contact.email}</a>
        </div>
        <div class="social-links">
          ${contact.social.map(social => `
            <a href="https://${social.url}" target="_blank" class="social-link">
              <span class="icon">${social.icon}</span>
              <span>${social.platform}</span>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }
}