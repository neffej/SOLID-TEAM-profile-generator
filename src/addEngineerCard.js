const engineerCard = (profile) => `
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${profile.getName()}</h5>
  <h6 class="card-subtitle mb-2 text-muted">
  <i class="fas fa-glasses mr-1 text-warning"></i>
    ${profile.getRole()}</h6>
  <p class="card-text"> ${profile.getID()} </p>
  <a href="mailto:${profile.getEmail()}" class="card-link">${profile.getEmail()}</a>
  <a href="https://www.github.com/${profile.getGithub()}" target="_blank" rel="noopener noreferrer" class="card-link">${profile.getGithub()}</a>
</div>
</div>`



module.exports = engineerCard;