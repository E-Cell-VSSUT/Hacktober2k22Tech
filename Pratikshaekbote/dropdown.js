const dropdownToggle = document.getElementById('dropdownMenuButton1')
const dropDowns = document.getElementsByClassName('dropdownMenuButton1-dropContent');

dropdownToggle.addEventListener('click',()=>{
    for(let i=0; i<dropDowns.length; i++)
        dropDowns[i].classList.toggle('show')
       
  })
  
  window.addEventListener('click',(e)=>{
    if(!e.target.matches('#dropdownMenuButton1')){
      for(let i=0; i<dropDowns.length; i++){
        if(dropDowns[i].classList.contains('show'))
          dropDowns[i].classList.remove('show')
      }
    }
  })