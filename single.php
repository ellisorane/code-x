<?php get_header(); ?>

    <div class="entries_container">

    <?php
    while(have_posts()) {
        the_post(); 
    ?> 
        <div class="single_entry_container">
            <div class="code_info">
                <h1 class="single_entry_title"><?php the_title(); ?></h1>
                <div class="entry_date light_entry_date"><?php the_time('M j, Y'); ?></div>
                <div class="single_entry_code_desc"><?php echo get_field("code_description"); ?></div>
            </div>

            <!-- HTML  -->
            <div class="single_entry_code light_single_entry_code">
                <div class="code_type single_ctype html">Html ▼</div>
                <div class="single_entry_code_container">
            
                    <pre class="code_format"><textarea class="html_code" disabled="true">
                        <?php echo get_field("html"); ?>
                    </textarea></pre>
            
                </div>
            </div>

            <!-- CSS  -->
            <div class="single_entry_code light_single_entry_code">
                <div class="code_type single_ctype css">CSS ▼</div>
                <div class="single_entry_code_container">
            
                    <pre class="code_format"><code>
                        <?php echo get_field("css"); ?>
                    </code></pre>
            
                </div>
            </div>

            <!-- JS  -->
            <div class="single_entry_code light_single_entry_code">
                <div class="code_type single_ctype js">JS ▼</div>
                <div class="single_entry_code_container">
            
                    <pre class="code_format"><code>
                        <?php echo get_field("js"); ?>
                    </code></pre>
            
                </div>
            </div>

        </div>

    <?php
    }
    ?>
    
    </div>



<?php get_footer(); ?>