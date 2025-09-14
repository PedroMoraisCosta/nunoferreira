function initSocialSection () {
  const teamSectionEl = document.getElementById('team-section-placeholder')
  if (!teamSectionEl) return

  // Fetch team members from social.txt
  fetch('./assets/social/social.txt')
    .then(res => res.text())
    .then(text => {
      let teamMembers
      try {
        teamMembers = JSON.parse(text)
      } catch (err) {
        console.error('Error parsing social.txt:', err)
        return
      }

      teamMembers.forEach((member, index) => {
        const carouselId = `teamCarousel${index + 1}`

        // Create team card
        const card = document.createElement('div')
        card.className = 'col-md-3 col-sm-6 mt-3'
        card.innerHTML = `
          <div data-aos="${member.aos || 'fade-up'}" class="team-card">
            <h5 data-i18n="social-titulo-${member.identificador}"></h5>
            <small data-i18n="social-descricao-${member.identificador}"></small>
            <div id="${carouselId}Container"></div>
          </div>
        `
        teamSectionEl.appendChild(card)

        // Inject carousel HTML
        const container = document.getElementById(`${carouselId}Container`)
        container.innerHTML = `
          <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
            <div class="carousel-inner">
              ${member.images
                .map(
                  (img, i) => `
                <div class="carousel-item ${i === 0 ? 'active' : ''}">
                  <img src="${img.src}" class="d-block w-100" alt="${img.alt}">
                </div>
              `
                )
                .join('')}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
              <span class="visually-hidden">Next</span>
            </button>
            <div class="carousel-indicators">
              ${member.images
                .map(
                  (_, i) => `
                <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="${i}" ${
                    i === 0 ? 'class="active" aria-current="true"' : ''
                  }></button>
              `
                )
                .join('')}
            </div>
          </div>
        `

        // Initialize carousel
        const carouselEl = document.getElementById(carouselId)
        if (carouselEl) new bootstrap.Carousel(carouselEl)
      })

      console.log('✅ Social section loaded with team carousels.')

      loadLanguage(getLanguage())
    })
    .catch(err => console.error('erro no ficheiro social.txt:', err))
}
