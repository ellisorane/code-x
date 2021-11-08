<!-- Search from template  -->


<form action="<?php echo home_url('/'); ?>" method="get">
    <div class="search_form">
        <input type="search" name="s" class="search_input" value="<?php echo get_search_query(); ?>" placeholder="Search...." autocomplete="off">
        <!-- <button id="submit_search">🔍</button> -->
    </div>
</form>

<div class="search_results_div">
    <ul class="results"></ul>
</div>
