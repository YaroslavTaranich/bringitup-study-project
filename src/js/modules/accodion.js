export default class Accodion {
    constructor (triggers) {
        this.btns = document.querySelectorAll(triggers);
    }
    init() {
        this.btns.forEach(btn => {
            const sibling = btn.closest('.module__info-show').nextElementSibling;
            sibling.classList.add('fadeOut');
            sibling.style.marginTop = "20px";
            btn.addEventListener('click', () => {
                sibling.classList.add('animated');
                sibling.classList.toggle('fadeIn');
                sibling.classList.toggle('fadeOut');
                sibling.classList.toggle('msg');


                // btn.closest('.module__info-show').nextElementSibling.style.display = "block";
            });
        });
    }

}