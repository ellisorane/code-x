<?php

// Custom search route
function registerSearch() {
    //                   namespace ('wp')   route    array
    register_rest_route('code-x_search/v1', 'search', array(
        'methods' => WP_REST_SERVER::READABLE,
        'callback' => 'searchResults' 
    ));
}


// Custom search query
function searchResults($data) {
    $allPosts = new WP_Query(array(
        'post_type' => array('entries'),
        's' => sanitize_text_field($data['term'])
    ));

    $allResults = array();

    while($allPosts->have_posts()) {
        $allPosts->the_post();
        array_push($allResults, array(
            'title' => get_the_title(),
            'permalink' => get_the_permalink()
        ));
    }

    return $allResults;
}

add_action('rest_api_init', 'registerSearch');
