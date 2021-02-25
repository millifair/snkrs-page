function get(){
async function getResource(url) {
    let res = await fetch(url);
  
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
  
    return await res.json();
  }
  getResource('http://localhost:3000/menu')
          .then(data => createCard(data));
  
      function createCard(data) {
          data.forEach(({img, altimg, title, descr, price}) => {
              const element = document.createElement('div');
  
              element.classList.add("menu__item");
  
              element.innerHTML = `
                  <img src=${img} alt=${altimg}>
                  <h3 class="menu__item-subtitle">${title}</h3>
                  <div class="menu__item-descr">${descr}</div>
                  <div class="menu__item-divider"></div>
                  <div class="menu__item-price">
                      <div class="menu__item-cost">Цена:</div>
                      <div class="menu__item-total"><span>${price}</span> $</div>
                  </div>
              `;
              document.querySelector(".container__menu").append(element);
              element.addEventListener('mouseover',()=>{
                element.classList.add('item-lin')
              })
              element.addEventListener('mouseout',()=>{
                element.classList.remove('item-lin')
              })
          });
      }
    }
    export {get};