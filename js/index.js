/**
 * Criando um modal a partir de um click
 * assim mostrando o conteudo que tem dentro do mesmo
 */
const modalOverlay = document.querySelector('.modal-overlay');
const posts = document.querySelectorAll('.post');

for(let post of posts) {
  post.addEventListener("click", function() {
    const videoId = post.getAttribute("id")

    modalOverlay.classList.add('active')
    modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${videoId}`
  })
}

document.querySelector('.close-modal').addEventListener("click", function() {
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector('iframe').src = ""
})

