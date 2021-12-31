import axios from "axios";

class Search {
    constructor() {
        this.searchInput = document.querySelector('.search_input');
        this.searchResultsUl = document.querySelectorAll('.results');

        //Typing timer
        this.typingTimer;
        //Previous key typed
        this.prevKey;
        
        this.onType();
    }

    onType() {
        this.searchInput.addEventListener('input', this.typingLogic.bind(this));
    };


    typingLogic() {
       
        // If current input is different from the previous input
        if (this.searchInput.value != this.prevKey || this.searchInput.value != "") {

            // clear list after each key
            this.searchResultsUl.forEach(div => div.innerHTML = '');
            
            // Reset timer after each key
            clearTimeout(this.typingTimer);

            // If the search bar gets an input
            if (this.searchInput.value) {
                // Run the getResults function after 1 sec of a keypress
                this.typingTimer = setTimeout(this.getResults.bind(this), 500);
            }

        } else {
            // Clear search results
            this.searchResultsUl.forEach(div => div.innerHTML = '');

        }

        this.prevKey = this.searchInput.value;

    }


    async getResults() {
        console.log("searching....");

        try {
        
            const response = await axios.get(`${wp_localize_script_data.root_url}/wp-json/code-x_search/v1/search?term=${this.searchInput.value}`);
            
            response.data.forEach(res => {

                console.log(res);
                this.searchResultsUl.forEach(div => div.innerHTML += `<li class="search_result"><a href="${res.permalink}">${res.title}</a></li>`);

            });

        } catch (err) {
            console.error('Search Failed');
            console.log(err);
        }

    }

}

export default Search;