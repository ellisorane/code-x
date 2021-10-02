// Minimizes and opens code areas
class MinMaxCode {
    constructor() {
        this.sizeBtn = document.querySelectorAll('.code_type');
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

new MinMaxCode();