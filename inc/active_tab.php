<?php

function activeTab($activeTab) {
    if(get_page_template_slug() === $activeTab) echo 'light_active_li';
}