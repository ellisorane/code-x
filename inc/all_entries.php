<?php

    // ENTRIES QUERY
    $allEntries = new WP_Query(array(
        'posts_per_page' => -1,
        'post_type' => 'entries',
        'orderby' => 'publish_date',
        'order' => 'DESC'
    ));

    while($allEntries->have_posts()) {
        $allEntries->the_post(); 

        $hasCss = get_field("css");
        $hasJs = get_field("js");
    ?> 
    
        <div class="entry">
            <div class="entry_info"><a href="<?php the_permalink(); ?>">
                <h2 class="entry_title"><span class="open_entry light_open_entry">>></span> <?php the_title(); ?></h2>
                <div class="entry_date light_entry_date"><?php the_time('M j, Y'); ?></div>
                <p class="entry_description"><?php echo wp_trim_words(get_field("code_description"), 30); ?></p>
            </a></div>


            <?php
                
                if($hasCss && $hasJs) { ?>
                    <div class="entry_code light_entry_code">
                        <div class="code_type css">CSS</div>
                        <div class="code_container">
        
                            <pre class="code_format"><code>
                                <?php echo get_field("css"); ?>
                            </code></pre>
                            
                        </div>
                    </div>
                <?php
                } elseif($hasCss) { ?>
                    <div class="entry_code one_entry_code light_entry_code">
                        <div class="code_type css">CSS</div>
                        <div class="code_container">
        
                            <pre class="code_format"><code>
                                <?php echo get_field("css"); ?>
                            </code></pre>
                            
                        </div>
                    </div>    
                <?php
                }
            ?>


            <?php
                if($hasCss && $hasJs) { ?>
                    <div class="entry_code light_entry_code">
                        <div class="code_type js">JS</div>
                        <div class="code_container">
        
                            <pre class="code_format"><code>
                                <?php echo get_field("js"); ?>
                            </code></pre>
                            
                        </div>
                    </div>
                <?php
                } elseif($hasJs) { ?>
                    <div class="entry_code one_entry_code light_entry_code">
                        <div class="code_type js">JS</div>
                        <div class="code_container">
        
                            <pre class="code_format"><code>
                                <?php echo get_field("js"); ?>
                            </code></pre>
                            
                        </div>
                    </div>    
                <?php
                
                }
            ?>

        </div>
        <hr class="entry_hr">
        
        <?php
    }

    wp_reset_postdata();
    ?>
