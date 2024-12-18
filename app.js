const formBtn = document.querySelector('form')
formBtn.addEventListener('submit',(e) => {
  e.preventDefault()
  formBtn.reset()
})
const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const modal = document.querySelector('nav .navigation')
openBtn.addEventListener("click", () => {
  modal.style.display = "flex"; // Modalni ko'rsatish
  document.body.style.overflow = "hidden"; // Sahifa scrollini to'xtatish
  openBtn.style.display = 'none'
  closeBtn.style.display = 'block'
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; // Modalni yashirish
  document.body.style.overflow = ""; // Scrollni qayta yoqish
  openBtn.style.display = 'block'
  closeBtn.style.display = 'none'
});