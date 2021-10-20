// Minimizes and opens code areas
class MinMaxCode {
    constructor() {
        this.sizeBtn = document.querySelectorAll('.single_ctype');
        this.changeDisplay();
    }

    changeDisplay() {

        this.sizeBtn.forEach(btn => {

            btn.addEventListener('click', () => {

                let codeContainer = btn.nextSibling.nextSibling;
                codeContainer.classList.toggle('hide_code_container');

            });
        })
    }
}

export default MinMaxCode;