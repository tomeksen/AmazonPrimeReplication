const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')
const itemWidth = 280

prev.addEventListener('click',()=>{
  list.scrollLeft -= window.innerWidth//(itemWidth + padding )
})

next.addEventListener('click',()=>{
  list.scrollLeft += window.innerWidth//(itemWidth + padding)
})