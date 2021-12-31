<?php include "inc/active_tab.php"; ?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body class="light_theme" <?php body_class(); ?>>

    <!-- <?php
    wp_nav_menu( array( 
        'theme_location' => 'main-nav', 
        'container_class' => 'navbar' ) ); 
    ?> -->

    <nav class="navbar light_navbar">    
        <div class="nav_container">

            <div class="nav_title">
                <div><h2><a href="<?php echo site_url(); ?>" class="light_nav_logo">Code-X</a></h2></div>
                <div class="toggle_nav">
                    <div class="line light_line"></div>
                    <div class="line light_line"></div>
                    <div class="line light_line"></div>
                    <div class="line light_line"></div>
                    
                </div>
            </div>

            <ul class="nav_list">
                <li class="nav_li light_nav_li"><a href="<?php echo site_url(); ?>" class="<?php if(is_front_page()) echo 'light_active_li'; ?>">All</a></li>
                <li class="nav_li light_nav_li"><a href="<?php echo site_url('/css-entries'); ?>" class="<?php activeTab('css_entries.php'); ?>">CSS</a></li>
                <li class="nav_li light_nav_li"><a href="<?php echo site_url('/js-entries'); ?>" class="<?php activeTab('js_entries.php'); ?>">JavaScript</a></li>


                <div class="theme_btns light_theme_btn_style">
                    <button class="light_theme_btn active_theme">Light</button>
                    <button class="dark_theme_btn">Dark</button>
                </div>

            </ul>

        
            <div class="desk_search_div">
                <hr>
                <?php include "searchform.php"; ?>
            </div>


        </div>
    </nav>
    
    <div class="prog_bar">
        <div class="progression"></div>
    </div>


    <main>

        <?php // if(get_post_type() === 'page') { ?>
            <!-- <div class="mobile_search_div light_search_div">
                <?php // include "searchform.php"; ?>
            </div> -->
        <?php
        // } ?>

