<!-- Single search result template -->

<a href="<?php the_permalink(); ?>" class="result_link" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <h2 class="title"><span class="open_entry light_open_entry">>></span> <?php the_title(); ?></h2>
    <p class="content"><?php echo wp_trim_words(get_field("code_description"), 30); ?></p>
    <hr>
</a>