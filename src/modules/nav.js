class MobileNav {
    constructor() {
        this.toggleNavBtn = document.querySelector('.toggle_nav');
        this.navList = document.querySelector('.nav_list');
        this.toggleNav();
    }

    toggleNav() {
        this.toggleNavBtn.addEventListener('click', () => {
            this.navList.classList.toggle('nav_list_open');
        });
    
    }

}

export default MobileNav;
