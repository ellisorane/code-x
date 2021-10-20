<?php

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
