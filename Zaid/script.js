const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

      entry.target.classList.toggle('show', entry.isIntersecting)

    })

  }, { threshold: .8 })

const boxlist = document.querySelectorAll('.box');
  boxlist.forEach((el) => {
    observer.observe(el);
  })