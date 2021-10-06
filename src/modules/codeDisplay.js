class Code {
    constructor() {
        this.codeFormat = document.querySelectorAll('.code_format');
        this.formatCode();
    }

    formatCode() {
        this.codeFormat.forEach(el => {
            el.textContent = el.textContent.replace(/^\s+/mg, "");
        });
    }

}

new Code();
