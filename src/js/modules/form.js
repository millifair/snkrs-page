function form(){
const forms = document.querySelectorAll('form');
  const message = {
      loading: 'img/690471.svg',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так...'
  };
  forms.forEach(item => {
    bindPostData(item);
});

const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};
function bindPostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        let statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
            color:black;
        `;
        form.insertAdjacentElement('afterend', statusMessage);
    
        const formData = new FormData(form);
  
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
  
        postData('http://localhost:3000/requests', json)
        .then(data => {
            console.log(data);
            showThanksModal(message.success);
            statusMessage.remove();
        }).catch(() => {
            showThanksModal(message.failure);
        }).finally(() => {
            form.reset();
        });
    });
  }
  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__content');
    prevModalDialog.classList.add('hide');
    openModal();
  
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__content');
    thanksModal.innerHTML = `
        <div class="modal__input">
            <div class="modal__title">${message}</div>
        </div>
    `;
    modal.append(thanksModal);
   
    setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        closeModal();
    }, 2000);
  }
}
const modal=document.querySelector('.modal');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}
function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}
export {form};
export {openModal};
export {closeModal};

