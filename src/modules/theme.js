class Theme {
    constructor() {
        this.lightThemeBtn = document.querySelector('.light_theme_btn');
        this.darkThemeBtn = document.querySelector('.dark_theme_btn');
        
        this.themeBtns = document.querySelector('.theme_btns');
        this.websiteBody = document.body;
        this.navbar = document.querySelector('.navbar');
        this.logo = document.querySelector('.light_nav_logo');
        this.toggleNavLines = document.querySelectorAll('.line');
        this.navLi = document.querySelectorAll('.nav_li');
        this.activeLi = document.querySelector('.light_active_li');
        this.mobileSearchDiv = document.querySelector('.mobile_search_div');
        this.openEntryBtn = document.querySelectorAll('.open_entry');
        this.entryDate = document.querySelectorAll('.entry_date');
        this.entryCode = document.querySelectorAll('.entry_code');
        this.singleEntryCode = document.querySelectorAll('.single_entry_code');
        
        this.events();
        this.getLclStrgTheme();

    }

    events() {
        this.lightThemeBtn.addEventListener('click', this.lightTheme.bind(this));
        this.darkThemeBtn.addEventListener('click', this.darkTheme.bind(this));

    }

    setLclStrgTheme(theme) {
        localStorage.setItem("theme", theme);
    }

    getLclStrgTheme() {
        let theme = localStorage.getItem("theme");
        theme == 'dark' ? this.darkTheme() : this.lightTheme();
    }

    changeOne(el, add, remove) {
        if (el) {
            el.classList.add(add);
            el.classList.remove(remove);
        }
        
    }

    changeAll(elements, add, remove) {
        if (elements) {
            elements.forEach(el => {
                el.classList.add(add);
                el.classList.remove(remove);
            });
        }
        
    }

    darkTheme() {

        // Set local storage 
        this.setLclStrgTheme('dark');


        //Change theme button style
        this.changeOne(this.themeBtns, 'dark_theme_btn_style', 'light_theme_btn_style');

        // Make this btn the active btn 
        this.darkThemeBtn.classList.add('active_theme');
        this.lightThemeBtn.classList.remove('active_theme');

        //Change body
        this.changeOne(this.websiteBody, 'dark_theme', 'light_theme');

        //Change navbar
        this.changeOne(this.navbar, 'dark_navbar', 'light_navbar');
        this.changeOne(this.logo, 'dark_nav_logo', 'light_nav_logo');
        this.changeAll(this.toggleNavLines, 'dark_line', 'light_line');
        this.changeAll(this.navLi, 'dark_nav_li', 'light_nav_li');
        this.changeOne(this.activeLi, 'dark_active_li', 'light_active_li');
        
        //Change mobile search bar
        this.mobileSearchDiv.classList.remove('light_search_div');

        this.changeAll(this.openEntryBtn, 'dark_open_entry', 'light_open_entry');

        this.changeAll(this.entryDate, 'dark_entry_date', 'light_entry_date');

        this.changeAll(this.entryCode, 'dark_entry_code', 'light_entry_code');
        
        this.changeAll(this.singleEntryCode, 'dark_single_entry_code', 'light_single_entry_code');
        
    }

    lightTheme() {

        // Set local storage 
        this.setLclStrgTheme('light');

        // Change theme buttons style
        this.changeOne(this.themeBtns, 'light_theme_btn_style', 'dark_theme_btn_style');

        // Make this btn the active btn 
        this.lightThemeBtn.classList.add('active_theme');
        this.darkThemeBtn.classList.remove('active_theme');

        // Change body
        this.changeOne(this.websiteBody, 'light_theme', 'dark_theme');

        // Change navbar
        this.changeOne(this.navbar, 'light_navbar', 'dark_navbar');
        this.changeOne(this.logo, 'light_nav_logo', 'dark_nav_logo');
        this.changeAll(this.toggleNavLines, 'light_line', 'dark_line');
        this.changeAll(this.navLi, 'light_nav_li', 'dark_nav_li');
        this.changeOne(this.activeLi, 'light_active_li', 'dark_active_li');
        
        //Change mobile search bar
        
        this.mobileSearchDiv.classList.remove('light_search_div');

        this.changeAll(this.openEntryBtn, 'light_open_entry', 'dark_open_entry');

        this.changeAll(this.entryDate, 'light_entry_date', 'dark_entry_date');

        this.changeAll(this.entryCode, 'light_entry_code', 'dark_entry_code');
        
        this.changeAll(this.singleEntryCode, 'light_single_entry_code', 'dark_single_entry_code');
        

    }

    


}

export default Theme;