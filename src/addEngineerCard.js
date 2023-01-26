const engineerCard = (profile) => `
<div class="card col-3 m-2">
<div class="card-body">
  <h5 class="card-title mb-3">${profile.getName()}</h5>
  <h6 class="card-subtitle mb-2 text-muted">
  <i class="fas fa-glasses mr-1 text-warning"></i>
    ${profile.getRole()}</h6>
  <p class="card-text">ID: ${profile.getID()} </p>
  <a href="mailto:${profile.getEmail()}" class="card-link">${profile.getEmail()}</a>
  <p class="m-1">
  <a href="https://www.github.com/${profile.getGithub()}" target="_blank" rel="noopener noreferrer" class="card-link">Github: ${profile.getGithub()}</a>
  </p>
</div>
</div>`



module.exports = engineerCard;