import {openModal} from './form'
function btn(){
const btn=document.querySelectorAll('.btn');
const links=document.querySelector('.links');
links.addEventListener('mouseover',()=>{
  links.classList.add('color2');
});
links.addEventListener('mouseout',()=>{
links.classList.remove('color2');
});
    btn.forEach(btn=>{
        btn.addEventListener('mouseover',()=>{
        btn.classList.add('fire');
    });
    btn.addEventListener('mouseout',()=>{
      btn.classList.remove('fire');
  });
 btn.addEventListener('click',()=>{
  openModal();
  });
});
const btn__down=document.querySelector('.btn__down');
const menu=document.querySelector('.menu');



btn__down.addEventListener('mouseover',()=>{
  btn__down.classList.add('fire');
});
btn__down.addEventListener('mouseout',()=>{
btn__down.classList.remove('fire');
});

btn__down.addEventListener('click',()=> {
menu.scrollIntoView({behavior: "smooth"});
});
}
export {btn};