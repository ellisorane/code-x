<?php get_header(); ?>

    <div class="entries_container">

        <!-- Entry begins -->
        <div class="entry">
            <div class="entry_info"><a href="">
                <h2 class="entry_title"><span class="open_entry light_open_entry">>></span> Toggle navbar</h2>
                <div class="entry_date light_entry_date">09.29.2021</div>
                <p class="entry_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab expedita odio sunt similique impedit vero sit assumenda tempora, molestias vel, beatae minima! Voluptatem, autem illo itaque inventore laboriosam iste qui.</p>
            </a></div>

            <div class="entry_code light_entry_code">
                <div class="code_type css">CSS</div>
                <div class="code_container">

                    <pre class="code_format"><code>
                        .navbar {
                            position: fixed;
                            top: 0;
                            width: 100%;
                            margin: 0;
                            background-color: #e9ecef;
                            font-family: 'Play', sans-serif;
                        }
                        
                        .nav_container {
                            margin: 20px;
                        }
                        
                        .nav_title {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                        
                        .nav_logo {
                            text-decoration: none;
                            color: black;
                        }
                        
                        .toggle_nav {
                            height: 30px;
                            width: 25px;
                            cursor: pointer;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            float: right;
                        }
                    </code></pre>
                    
                </div>
            </div>

            <div class="entry_code light_entry_code">
                <div class="code_type js">JS</div>
                <div class="code_container">

                    <pre class="code_format"><code>
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

                        new MobileNav();
                    </code></pre>

                </div>
            </div>
        </div>
        <hr class="entry_hr">
        <!-- Entry ends  -->

    </div>


<?php get_footer(); ?>