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
    const profileContainer = document.createElement('div');
    profileContainer.className = 'profile-container';

    const bio = document.createElement('p');
    bio.textContent = profile.bio;
    profileContainer.appendChild(bio);

    const skills = document.createElement('div');
    skills.className = 'skills';

    profile.skills.forEach(skill => {
      const skillCategory = document.createElement('div');
      skillCategory.className = 'skill-category';

      const categoryTitle = document.createElement('h4');
      categoryTitle.textContent = skill.category;
      skillCategory.appendChild(categoryTitle);

      const skillItems = document.createElement('ul');
      skill.items.forEach(item => {
        const skillItem = document.createElement('li');
        skillItem.textContent = item;
        skillItems.appendChild(skillItem);
      });

      skillCategory.appendChild(skillItems);
      skills.appendChild(skillCategory);
    });

    profileContainer.appendChild(skills);

    // Check if experience exists and render it
    if (profile.experience) {
      const experience = document.createElement('div');
      experience.className = 'experience';

      const experienceTitle = document.createElement('h4');
      experienceTitle.textContent = 'Experience';
      experience.appendChild(experienceTitle);

      const experienceItems = document.createElement('ul');
      profile.experience.forEach(item => {
        const experienceItem = document.createElement('li');
        experienceItem.textContent = item;
        experienceItems.appendChild(experienceItem);
      });

      experience.appendChild(experienceItems);
      profileContainer.appendChild(experience);
    }

    return profileContainer;
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