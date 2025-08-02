document.addEventListener('DOMContentLoaded', function () {
  fetch('header.html')
    .then(res => res.text())
    .then(
      data => (document.getElementById('header-placeholder').innerHTML = data)
    )

  const indexSectionEl = document.getElementById('index-section-placeholder')
  if (indexSectionEl) {
    fetch('index-section.html')
      .then(res => res.text())
      .then(data => {
        indexSectionEl.innerHTML = data
      })
  }

  const companySectionEl = document.getElementById(
    'company-section-placeholder'
  )
  if (companySectionEl) {
    fetch('company-section.html')
      .then(res => res.text())
      .then(data => {
        companySectionEl.innerHTML = data
      })
  }

  const servicesectionEl = document.getElementById(
    'services-section-placeholder'
  )
  if (servicesectionEl) {
    fetch('services-section.html')
      .then(res => res.text())
      .then(data => {
        servicesectionEl.innerHTML = data
      })
  }

  const projectsectionEl = document.getElementById(
    'projects-section-placeholder'
  )
  if (projectsectionEl) {
    fetch('projects-section.html')
      .then(res => res.text())
      .then(data => {
        projectsectionEl.innerHTML = data
      })
  }

  const socialsectionEl = document.getElementById('social-section-placeholder')
  if (socialsectionEl) {
    fetch('social-section.html')
      .then(res => res.text())
      .then(data => {
        socialsectionEl.innerHTML = data
      })
  }

  fetch('footer.html')
    .then(res => res.text())
    .then(
      data => (document.getElementById('footer-placeholder').innerHTML = data)
    )
})
