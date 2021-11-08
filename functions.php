<?php

require get_theme_file_path("/inc/search_route.php");


function scripts_links() {
    // CSS links 
    wp_enqueue_style('style_css', get_stylesheet_uri());

    // JS Links
    wp_enqueue_script('src-index-js', get_theme_file_uri('/build/index.js'), null, '1.0', true);
    
    wp_localize_script('src-index-js', 'wp_localize_script_data', array(
        'root_url' => get_site_url()
    ));
   
}

add_action('wp_enqueue_scripts', 'scripts_links');

function features() {
    add_theme_support('title-tag');
    register_nav_menu('main-nav', 'Main Navigation');
}

add_action('after_setup_theme', 'features');

// // Create a custom REST API field 
// function custom_rest_fields() {
//     // Create a field for the author's name
//     register_rest_field('post', 'authorName', array(
//         'get_callback' => function() {return get_the_author();}
//     ));
// }
// add_action('rest_api_init', 'custom_rest_fields');