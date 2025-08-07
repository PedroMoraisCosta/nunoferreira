function initProjectsVideos () {
  const filePath = './assets/videos/projetos/videos.txt'

  function convertToEmbed (link) {
    const match =
      link.match(/youtu\.be\/([a-zA-Z0-9_-]+)/) ||
      link.match(/v=([a-zA-Z0-9_-]+)/)
    return match ? `https://www.youtube-nocookie.com/embed/${match[1]}` : ''
  }

  function appendParamsToURL (url, params) {
    return url.includes('?') ? `${url}&${params}` : `${url}?${params}`
  }

  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      const container = document.getElementById('video-gallery')

      if (!container) {
        console.error('Elemento #video-gallery não encontrado!')
        return
      }

      const links = data
        .split('\n')
        .map(link => link.trim())
        .filter(Boolean)

      links.forEach(link => {
        const variables =
          'rel=0&modestbranding=1&controls=1&showinfo=0&iv_load_policy=3'

        const embedURL = appendParamsToURL(convertToEmbed(link), variables)

        const col = document.createElement('div')
        col.className = 'col-lg-6 col-md-6'

        col.innerHTML = `<iframe src="${embedURL}" frameborder="0" allowfullscreen allow="encrypted-media; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin"></iframe>`

        container.appendChild(col)
      })
    })
    .catch(err => {
      console.alert('Erro ao carregar videos.txt:', err)
    })
}
