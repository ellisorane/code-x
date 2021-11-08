<?php 
    /*
	Search Results Template
    */
    get_header(); 

	global $wp_query;
?>

   <div id="primary" class="content_div">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title">
					<h2 class="page_headings"><u><?php echo $wp_query->found_posts; ?> <?php _e( 'Search results for: ', domain:'locale' ); ?> <span class="page-description"><?php echo get_search_query(); ?></span></u></h2>
				</h1>
			</header><!-- .page-header -->

			<?php
			// Start the Loop.
			while ( have_posts() ) :
				the_post();

				get_template_part('content', 'search');

				// End the loop.
			endwhile;

			// Pagination links here if any

			// If no content, include the "No posts found" template.
		else : ?>
			<h2 class="page_headings">No Results for: <span class="page-description"><?php echo get_search_query(); ?></h1>
			
		<?php
		endif;
		?>

	</div><!-- #primary -->



<?php get_footer(); ?>