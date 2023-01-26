const engineerCard = (profile) => `
<div class="card col-3 m-2">
<div class="card-body">
  <h5 class="card-title mb-3">${profile.getName()}</h5>
  <h6 class="card-subtitle mb-2 text-muted">
  <i class="fa-solid fa-mug-saucer text-warning"></i>
    ${profile.getRole()}</h6>
  <p class="card-text">ID: ${profile.getID()}</p>
  <a href="mailto:${profile.getEmail()}" class="card-link">${profile.getEmail()}</a>
  <p class="card-text mt-2">Office Number: ${profile.getOfficeNumber()}</p>
</div>
</div>`



module.exports = engineerCard;