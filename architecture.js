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

  fetch('footer.html')
    .then(res => res.text())
    .then(
      data => (document.getElementById('footer-placeholder').innerHTML = data)
    )
})
