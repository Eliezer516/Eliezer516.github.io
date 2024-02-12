let filter_item = document.querySelectorAll('.filter-item')
let proyects = document.querySelectorAll('.proyect')

for(let i = 0; i < filter_item.length; i++){
  filter_item[i].addEventListener('click', function(){
    for(let j = 0; j < filter_item.length; j++){
      filter_item[j].classList.remove('bg-slate-900', 'text-white')
      filter_item[j].classList.add('bg-slate-100')
    }

    this.classList.remove('bg-slate-100')
    this.classList.add('bg-slate-900', 'text-white')

    let dataFilter = this.getAttribute('data-filter')
    for(let k = 0; k < proyects.length; k++ ){
      proyects[k].classList.remove('block')
      proyects[k].classList.add('hidden')

      if(proyects[k].getAttribute('data-item') == dataFilter || dataFilter == 'all'){
        proyects[k].classList.remove('hidden')
        proyects[k].classList.add('block')
      }
    }
  })
}
