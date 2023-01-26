const engineerCard = (profile) => `
<div class="card" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${profile.getName()}</h5>
  <h6 class="card-subtitle mb-2 text-muted">
  <i class="fas fa-glasses mr-1"></i>
    ${profile.getRole}</h6>
  <p class="card-text">${profile.getID}</p>
  <a href="mailto:${profile.getEmail()}" class="card-link">${profile.getEmail()}</a>
  <p class="card-text">${profile.getOfficeNumber}</p>
</div>
</div>`



module.exports = engineerCard;