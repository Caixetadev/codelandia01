const input = document.querySelector('#input')

input.addEventListener('input', e => {
  const inputValue = e.target.value.toLocaleLowerCase()
  const containerNewsH1 = document.querySelectorAll('.containerNews')

  containerNewsH1.forEach(e => {
    const containerNewsH1 = e.querySelector('.containerNews h1').textContent.toLocaleLowerCase()
    if(containerNewsH1.includes(inputValue)) {
      e.style.display = 'flex'
      return
    }
      e.style.display = 'none'
  })
})

const getPost = async () => {
  const url = await fetch(`https://www.vagalume.com.br/news/index.js`)
  data = await url.json()
  console.log(data)

  data.news.map(function(news) {
    document.querySelector('main').innerHTML += `
    
    <div class="containerNews">
      <div class="card">
        <span class="data">
        ${news.inserted}
        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.25 4.46875C22.1239 3.9753 21.9293 3.50194 21.6718 3.0625C21.4245 2.60536 21.1083 2.18902 20.7343 1.82812C20.1921 1.28771 19.55 0.857859 18.8437 0.562499C17.4221 -0.020955 15.8278 -0.020955 14.4062 0.562499C13.7386 0.845059 13.1253 1.2416 12.5937 1.73437L12.5156 1.82812L11.5 2.84375L10.4843 1.82812L10.4062 1.73437C9.87456 1.2416 9.26125 0.845059 8.5937 0.562499C7.17207 -0.020955 5.57783 -0.020955 4.1562 0.562499C3.44992 0.857859 2.80781 1.28771 2.26558 1.82812C1.52396 2.54973 0.998968 3.4644 0.749951 4.46875C0.617474 4.97878 0.554405 5.50435 0.562451 6.03125C0.562451 6.52656 0.624951 7.02031 0.749951 7.5C0.880941 7.98444 1.0698 8.45135 1.31245 8.89062C1.57451 9.3422 1.89498 9.75724 2.26558 10.125L11.5 19.3594L20.7343 10.125C21.1046 9.76094 21.4218 9.34375 21.6718 8.89062C22.1793 8.0236 22.4438 7.03585 22.4375 6.03125C22.4456 5.50435 22.3825 4.97877 22.25 4.46875ZM20.6875 7.01562C20.5003 7.72956 20.1285 8.38163 19.6093 8.90625L11.4687 17.0312L3.32808 8.90625C3.0628 8.63909 2.83185 8.33991 2.64058 8.01562C2.46059 7.69481 2.31899 7.35392 2.2187 7C2.13864 6.64612 2.09673 6.28468 2.0937 5.92187C2.09582 5.54869 2.13772 5.1768 2.2187 4.8125C2.31605 4.45756 2.45779 4.11632 2.64058 3.79687C2.82808 3.46875 3.05933 3.17187 3.32808 2.90625C3.72948 2.51022 4.20104 2.19232 4.7187 1.96875C5.76185 1.55144 6.92555 1.55144 7.9687 1.96875C8.48433 2.18281 8.94995 2.49687 9.3437 2.89062L11.4687 5.03125L13.5937 2.89062C13.9872 2.49618 14.4544 2.18294 14.9687 1.96875C16.0118 1.55144 17.1756 1.55144 18.2187 1.96875C18.7359 2.19219 19.2078 2.51094 19.6093 2.90625C19.8812 3.16406 20.1093 3.46406 20.2812 3.79687C20.6431 4.4351 20.8316 5.15694 20.8281 5.89062C20.8493 6.26816 20.8178 6.64681 20.7343 7.01562H20.6875Z" fill="#574AE8"/>
        </svg>

        </span>
        <h1>${news.featured}</h1>
        <img src="https://www.vagalume.com.br/${news.pic_src}">
        <p>${news.headline}</p>
        <a href="${news.url}" target="_blank">Ler Mais</a>
      </div>
    </div>

    

    `
  })

}

getPost()

