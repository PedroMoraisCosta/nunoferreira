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

  fetch('footer.html')
    .then(res => res.text())
    .then(
      data => (document.getElementById('footer-placeholder').innerHTML = data)
    )
})
